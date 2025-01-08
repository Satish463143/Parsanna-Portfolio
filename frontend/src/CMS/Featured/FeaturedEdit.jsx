import React, { useState } from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import { ToastContainer, toast } from 'react-toastify';
import {  useNavigate, useParams } from 'react-router-dom'
import { useCreateMutation, useShowByIdQuery, useUpdateMutation } from '../../api/featured.api';
import FeaturedForm from './FeaturedForm';

const FeaturedEdit = () => {
  const params = useParams()
  const [loading, setLoading] = useState()
  const navigate = useNavigate()
  const [updateFeatured] = useUpdateMutation()
  const {data, error, isLoading} = useShowByIdQuery(params.id)

  const featured = data?.result

  const submitEvent = async(data)=>{
    setLoading(true)
    try{
      const submitData = {
        ...data,
        status:data.status.value
      }
      await updateFeatured({id:params.id, payload:submitData}).unwrap()
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
        <FeaturedForm 
          detail={
            featured ?{
              title: featured.title,
              description:featured.description,
              videoUrl:featured.videoUrl,
              videoImageUrl:featured.videoImageUrl,
              status: {
                label: featured.status === "active" ? "Active" : "Inactive",
                value: featured.status,
              }
            }: null
          }
        submitEvent={submitEvent} loading={loading} value='Update Featured Portfolio'/>
      </div>
      
    </div>
  )
}

export default FeaturedEdit