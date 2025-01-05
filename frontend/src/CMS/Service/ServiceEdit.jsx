import React,{useEffect, useState} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import ServiceForm from './ServiceForm'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useShowByIdQuery, useUpdateMutation } from '../../api/service.api'

const ServiceEdit = () => {
  const params = useParams()
  const [loading, setLoading] = useState()
  const navigate= useNavigate()
  const [service, setService] = useState()

  const [updateService] = useUpdateMutation()
  const {data, error, isLoading} = useShowByIdQuery(params.id)

  useEffect(()=>{
    if (data){
      setService(data?.result)
    }
  }) 

  const submitEvent = async(data)=>{
    setLoading(true)
    try{
      const formData = new FormData()

      formData.append("title", data.title);
      formData.append("description", data.description || "");

      if (data.image instanceof File) {
        formData.append("image", data.image);
      }

      await updateService({id:params.id, payload:formData}).unwrap()
      toast.success("services updated sucssfully")
      navigate('/admin/service')

    }catch(exception){
      console.log(exception)
      toast.error("Error while updating service")
    }
    setLoading(false)

  }
  return (
    <div className='admin_margin_box'>
      <div className="admin_titles">
        <AdminTitle label1=" Service List" label2="/Add_service" url="/admin/service"/>
        <div className='Dashboard_title'>
            <h1>Edit Service</h1>
        </div>
      </div>

      <div className='banner_form'>
        <ServiceForm
          detail={
            service ? {
              title : service.title,
              description:service.description,
              image: service.image
            }
            :
            null
          }
        submitEvent={submitEvent} value='Add service' loading={loading}/>
      </div>


    </div>
  )
}

export default ServiceEdit