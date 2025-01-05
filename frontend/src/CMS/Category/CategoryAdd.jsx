import React, { useState } from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import { ToastContainer, toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom'
import CategoryForm from './CategoryForm';
import { useCreateMutation } from '../../api/category.api';
const CategoryAdd = () => {
  const [loading, setLoading] = useState()
  const navigate = useNavigate()
  const [createCategory] = useCreateMutation()

  const submitEvent = async(data)=>{
    setLoading(true)
    try{
      const submitData = {
        ...data
      }
      await createCategory(submitData).unwrap()
      toast.success('Category craeated sucessfully')
      navigate('/admin/category')
    }catch(exception){
      toast.error('Error while adding catgory')
    }
    finally{
      setLoading(false)
    }
  }
  return (
    <div className='admin_margin_box'>
      <div className="admin_titles">
          <AdminTitle label1=" Category List" label2="/Add_Category" url="/admin/category"/>
          <div className='Dashboard_title'>
              <h1>Add Category</h1>
          </div>
      </div>
      <ToastContainer />
      <div className="banner_form">
        <CategoryForm submitEvent={submitEvent} loading={loading} value='Add category'/>
      </div>
    </div>
  )
}

export default CategoryAdd