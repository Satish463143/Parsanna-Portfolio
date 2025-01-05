import React, { useEffect, useState } from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import { ToastContainer, toast } from 'react-toastify';
import {  useNavigate, useParams } from 'react-router-dom'
import CategoryForm from './CategoryForm';
import { useShowByIdQuery, useUpdateMutation } from '../../api/category.api';

const CategoryEdit = () => {
  const params = useParams()
  const [loading, setLoading] = useState()
  const [category, setCategory] = useState()
  const navigate = useNavigate()

  const {data, error, isLoading} = useShowByIdQuery(params.id)
  const [updateCategory] = useUpdateMutation()

  useEffect(()=>{
    if(data){
      setCategory(data?.result)
    }
  },[data])

  const submitEvent = async(data)=>{
    setLoading(true);
    try{
      const submitData = {
        ...data

      }
      await updateCategory({id:params.id, payload:submitData}).unwrap()
      toast.success("Banner updated Successfully");
      navigate('/admin/category')
    }catch(exception){
        let errorMessage = "Error while updating category";
        toast.error(errorMessage);
        console.error(exception, "Error here");
    }finally{
        setLoading(false)
    }

  }
  return (
    <div className='admin_margin_box'>
    <div className="admin_titles">
        <AdminTitle label1=" Category List" label2="/Edit_Category" url="/admin/category"/>
        <div className='Dashboard_title'>
            <h1>Edit Category</h1>
        </div>
    </div>
    <ToastContainer />
    <div className="banner_form">
        <CategoryForm 
          detail={
            category ? {
              name:category.name,
            }
            :
            null
          }
        submitEvent={submitEvent} loading={loading} value='Add category'/>
      </div>


    </div>
  )
}

export default CategoryEdit