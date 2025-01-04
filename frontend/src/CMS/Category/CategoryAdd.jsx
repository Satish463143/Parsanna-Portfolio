import React from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
const CategoryAdd = () => {
  return (
    <div className='admin_margin_box'>
      <div className="admin_titles">
          <AdminTitle label1=" Category List" label2="/Add_Category" url="/admin/category"/>
          <div className='Dashboard_title'>
              <h1>Add Category</h1>
          </div>
      </div>

    </div>
  )
}

export default CategoryAdd