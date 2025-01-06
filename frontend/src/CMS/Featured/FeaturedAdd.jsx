import React, { useState } from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import { ToastContainer, toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom'
import { useCreateMutation } from '../../api/featured.api';
import FeaturedForm from './FeaturedForm';


const FeaturedAdd = () => {
  const [loading, setLoading] = useState()
    const navigate = useNavigate()
    const [createFeatured] = useCreateMutation()
  
    const submitEvent = async(data)=>{
      setLoading(true)
      try{
        const submitData = {
          ...data,
          status:data.status.value
        }
        await createFeatured(submitData).unwrap()
        toast.success('Featrued Portfolio Added sucessfully')
        navigate('/admin/featured_portfolio')
      }catch(exception){
        toast.error('Error while adding Featrued Portfolio')
      }
      finally{
        setLoading(false)
      }
    }

  return (
    <div className='admin_margin_box'>
      <div className="admin_titles">
          <AdminTitle label1=" Featured Portfolio List" label2="/Add_Featured_Portfolio" url="/admin/featured_portfolio"/>
          <div className='Dashboard_title'>
              <h1>Add Featured Portfolio</h1>
          </div>
      </div>
      <ToastContainer />
      <div className="banner_form">
        <FeaturedForm submitEvent={submitEvent} loading={loading} value='Add Featured Portfolio'/>
      </div>
      
    </div>
  )
}

export default FeaturedAdd