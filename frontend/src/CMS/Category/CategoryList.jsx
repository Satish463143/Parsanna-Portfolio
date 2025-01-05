import React from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import EditButton from '../EditButton/EditButton'
import DeleteButton from '../DeleteButton/DeleteButton'
import LoadingComponent from '../../common/LoadingComponent/LoadingComponent'
import { useDeleteMutation, useListAllQuery } from '../../api/category.api'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
const CategoryList = () => {
  const { data, error, isLoading } = useListAllQuery();
  const [deleteCategory] = useDeleteMutation();
  const categoryList = data?.result;
  
    const deleteData = async (rowId) => {
      try {
         await deleteCategory(rowId).unwrap();
        toast.success("Category deleted successfully");
      } catch (exception) {
        console.error("Error during delete mutation:", exception);
        toast.error("Error while deleting category");
      } 
    };


  return (
    <div className="admin_margin_box">
      <ToastContainer />
      <div className="admin_titles">
        <AdminTitle label1="Category List" />
        <div className="Dashboard_title">
          <h1>Category List</h1>
          <div>
            <Link to="/admin/category_add">
              <button className="edit_btn">Add Banner</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="blog_table">
        <table border="2">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="3">
                  <LoadingComponent />
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="3" className="error-message">
                  {error}
                </td>
              </tr>
            ) : categoryList.length > 0 ? (
              categoryList.map((row, index) => (
                <tr key={index}>
                  <td className="table_sn">{index + 1}</td>
                  <td>{row.name}</td>
                  <td style={{ textAlign: "center", width: "150px" }}>
                    <EditButton editUrl={`/admin/category_edit/${row._id}`} />
                    <DeleteButton deleteAction={deleteData} rowId={row._id} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">Category List is Empty</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default CategoryList