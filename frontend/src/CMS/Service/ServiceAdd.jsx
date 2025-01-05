import React, { useState } from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import ServiceForm from './ServiceForm'
import { useNavigate } from 'react-router-dom'
import { useCreateMutation } from '../../api/service.api'
import { toast } from 'react-toastify'


const ServiceAdd = () => {
  const [loading, setLoading] = useState()
  const navigate= useNavigate()
  const [createService] = useCreateMutation()


  const submitEvent= async(data)=>{
    setLoading(true)
    try{
      const formData = new FormData()

      formData.append("title", data.title);
      formData.append("description", data.description || "");

      if (data.image instanceof File) {
        formData.append("image", data.image);
      }
      
      await createService(formData).unwrap()
      toast.success("Service created sucessfully")
      navigate('/admin/service')

    }catch(exception){
      console.log(exception)
      toast.error("Error while creating service")
    }
    finally{
      setLoading(false)
    }
  }
  return (
    <div className='admin_margin_box'>
     <div className="admin_titles">
        <AdminTitle label1=" Service List" label2="/Add_service" url="/admin/service"/>
        <div className='Dashboard_title'>
            <h1>Add Service</h1>
        </div>
      </div>

      <div className='banner_form'>
        <ServiceForm submitEvent={submitEvent} value='Add service' loading={loading}/>
      </div>

    </div>
  )
}

export default ServiceAdd