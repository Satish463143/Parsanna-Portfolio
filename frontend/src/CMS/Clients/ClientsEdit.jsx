import React,{useEffect, useState} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import { Link, useNavigate ,useParams} from 'react-router-dom'
import { toast } from 'react-toastify'
import ClientsForm from './ClientsForm'
import { useShowByIdQuery, useUpdateMutation } from '../../api/clients.api'

const ClientsEdit = () => {
  const params = useParams()
  const [loading, setLoading] = useState()
  const navigate= useNavigate()
  const [clients, setClients] = useState()
    
  const {data, error, isLoading}= useShowByIdQuery(params.id)
  const [updateClients] = useUpdateMutation()
  useEffect(()=>{
    if(data){
      setClients(data?.result)
    }
  })
  const submitEvent = async(data)=>{
    setLoading(true)
    try{
        const formData = new FormData()
        
        formData.append("link", data.link);
  
        if (data.image instanceof File) {
          formData.append("image", data.image);
        }        
        await updateClients({id:params.id, payload:formData}).unwrap()
        toast.success("Clients updated sucessfully")
        navigate('/admin/clients')     

    }catch(exception){
      console.log(exception)
      toast.error("Error while updating clients")
    }finally{
      setLoading(false)
    }
  }
  return (
    <div className='admin_margin_box'>
      <div className="admin_titles">
        <AdminTitle label1=" Service List" label2="/Edit_service" url="/admin/clients"/>
        <div className='Dashboard_title'>
            <h1>Edit Service</h1>
        </div>
      </div>

      <div className='banner_form'>
        <ClientsForm 
          detail={
            clients ? 
            {
                link: clients.link,
                image: clients.image
            }
            : null
          }
        submitEvent={submitEvent} value='Update Clients' loading={loading}/>
      </div>
  </div>
  )
}

export default ClientsEdit