import React, { useState } from 'react'
import { useCreateMutation } from '../../api/clients.api'
import AdminTitle from '../AdminTitle/AdminTitle'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import ClientsForm from './ClientsForm'

const ClientsAdd = () => {
   const [loading, setLoading] = useState()
    const navigate= useNavigate()
    const [createClients] = useCreateMutation()
  
  
    const submitEvent= async(data)=>{
      setLoading(true)
      try{
        const formData = new FormData()

        formData.append("link", data.link);
  
        if (data.image instanceof File) {
          formData.append("image", data.image);
        }
        
        await createClients(formData).unwrap()
        toast.success("Clients created sucessfully")
        navigate('/admin/clients')
  
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
        <ClientsForm submitEvent={submitEvent} value='Add Clients' loading={loading}/>
      </div>
    </div>
  )
}

export default ClientsAdd