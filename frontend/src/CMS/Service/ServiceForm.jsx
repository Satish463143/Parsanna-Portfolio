import React, { useEffect } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextInputComponent } from '../../common/Form/Form'

const ServiceForm = ({submitEvent,loading,detail=null,value}) => {
  const serviceDTO =Yup.object({
    title:Yup.string().min(2).max(50).required('It is a required filed'),
    description:Yup.string().required('It is a required field'),
    image:Yup.mixed().required()
  })

  const {control, handleSubmit, setValue, formState:{errors}} = useForm({
    resolver:yupResolver(serviceDTO)
  })

  useEffect(()=>{
    if(detail){
      setValue("title", detail.title)
      setValue("description", detail.description)
      setValue("image", detail.image)
    }
  }, [detail, setValue])

  return (
    <form action="" onSubmit={handleSubmit(submitEvent)}>
      <h3>Content</h3>
      <div className="from_grid">
        <div>
          <label htmlFor="title">Title</label><br />
          <TextInputComponent
              name="title"
              control={control}
              type='text'
              defaultValue=''
              errMsg={errors?.title?.message}
              required:true
          />
        </div>
        <div>
          <label htmlFor="description">Description</label><br />
          <TextInputComponent
              name="description"
              control={control}
              type='text'
              defaultValue=''
              errMsg={errors?.description?.message}
              required:true
          />
        </div>
        <div>                
            <label htmlFor="image">Image</label><br />
            <input
                type='file'
                onChange={(e) => {
                    const image = e.target.files['0']
                    setValue('image', image)
                }}
            /><br />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input className='submit_btn' type="submit" value={value} disabled={loading}  style={{ cursor: loading ? 'not-allowed' : 'pointer' }}/>
      </div>
    </form>
  )
}

export default ServiceForm