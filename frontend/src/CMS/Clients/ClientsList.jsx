import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import AdminTitle from '../AdminTitle/AdminTitle'
import LoadingComponent from '../../common/LoadingComponent/LoadingComponent'
import { Pagination } from 'flowbite-react'
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import { toast } from 'react-toastify';
import { useDeleteMutation, useListAllQuery } from '../../api/clients.api';
function ClientsList() {
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // Fixed limit
  const [search, setSearch] = useState('');

  const {data, error, isLoading} = useListAllQuery({page, limit, search})
  const [deleteClients] = useDeleteMutation()

  const clientsList = data?.result

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(1); // Reset to first page on new search
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const deleteData = async(id)=>{
    try{
          await deleteClients(id).unwrap()
          toast.success("Clients deleted sucessfully")     
        }catch(exception){
          console.log(exception)
          toast.error("Error while deleting clients")
        }
  }

  return (
    <div className='admin_margin_box'>
      <div className="admin_titles">
        <AdminTitle label1=" Clients List"/>
        <div className='Dashboard_title'>
            <h1>Clients List</h1>
            <div>
              <input type="search" className='search_btn' placeholder='Search here by title...' value={search} onChange={handleSearchChange}/>
              <Link to='/admin/clients_add'>
                <button className='edit_btn'>Add Clients</button>
              </Link>
            </div>
        </div>
      </div> 
      <div  className='blog_table'>
        <table border='2'>
            <thead>
            <tr>
                <th>S.N</th>
                <th>Image</th>
                <th>Link</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>  
                  <td colSpan="6"><LoadingComponent/></td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="6" className="error-message">{error}</td>
                </tr>
              ) :  clientsList.length > 0 ? (
                clientsList.map((row, index) => (
                  <tr key={index}>
                    <td className="table_sn">{index + 1}</td>
                    <td className='table_img'>
                       <img src={row.image} alt=""/>
                    </td>
                    <td>{row.link}</td>
                    <td style={{ textAlign: 'center', width: '150px' }}>
                      <EditButton editUrl={`/admin/clients_edit/${row._id}`}/>
                      <DeleteButton deleteAction={deleteData} rowId={row._id}  />                  
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Service List is Empty</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className='flex overflow-x-auto sm:justify-center'>
            {data?.meta && (
            <div className='flex overflow-x-auto sm:justify-center'>
              <Pagination
                currentPage={data.meta.currentPage}
                totalPages={Math.ceil(data.meta.total / limit)}
                onPageChange={handlePageChange}
              />
            </div>
          )}
          </div>
      </div>
    </div>
  )
}

export default ClientsList