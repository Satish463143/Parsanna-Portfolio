import React, {useState} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import { toast } from 'react-toastify';
import LoadingComponent from '../../common/LoadingComponent/LoadingComponent'
import { Pagination } from 'flowbite-react'
import { useListAllQuery } from '../../api/contact.api';

const Contact = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // Fixed limit
  const [search, setSearch] = useState('');

  const {data, error, isLoading} =useListAllQuery({page, limit, search})
  const contactList = data?.result

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(1); // Reset to first page on new search
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  return (
    <div className='admin_margin_box'>
      <div className="admin_titles">
        <AdminTitle label1=" Contacts List"/>
        <div className='Dashboard_title'>
            <h1>Contacts List</h1>
            <input type="search" className='search_btn' placeholder='Search here by title...' value={search} onChange={handleSearchChange}/>
        </div>
      </div>
      <div  className='blog_table'>
        <table border='2'>
            <thead>
            <tr>
                <th>S.N</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Number</th>  
                <th>Message</th>
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
              ) :  contactList.length > 0 ? (
                contactList.map((row, index) => (
                  <tr key={index}>
                    <td className="table_sn">{index + 1}</td>
                    <td>{row.fullName}</td>
                    <td >
                      {row.email} 
                    </td>                    
                    <td>{row.number}</td>
                    <td width='550px'>{row.message}</td>
                    <td style={{ textAlign: 'center', width: '150px' }} className='response'>
                      <a href={`mailto:${row.email}`} target='_blank'>Response</a>             
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Contatc List is Empty</td>
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

export default Contact