import React, { useEffect } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { OptionsComponent, TextInputComponent } from '../../common/Form/Form'

const FeaturedForm = ({submitEvent,loading,detail=null,value}) => {
  const featuredDTO = Yup.object({
      title:Yup.string().min(2).max(100).required('It is a required filed'),
      description:Yup.string().nullable().notRequired(),
      videoUrl:Yup.string().required('It is a required filed'),
      videoImageUrl:Yup.string().required('It is a required filed'),
      status: Yup.object({
        label: Yup.string().matches(/^(Active|Inactive)$/),
        value: Yup.string().matches(/^(active|inactive)$/).required()
    }).required(),

    })
  
    const {control, handleSubmit, setValue, formState:{errors}}= useForm({
      resolver:yupResolver(featuredDTO)
    })
  
  
    useEffect(()=>{
      if(detail){
        setValue("title", detail.title)
        setValue("description", detail.description)
        setValue("videoUrl", detail.videoUrl)
        setValue("videoImageUrl", detail.videoImageUrl)
        setValue("status", detail.status)
      }
    },[detail, setValue])
  return (
    <form action="" onSubmit={handleSubmit(submitEvent)}>
      <div className="from_grid">
        <div>
          <label htmlFor="title">Title</label><br />
            <TextInputComponent
              name='title'
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
              name='description'
              control={control}
              type='text'
              defaultValue=''
              errMsg={errors?.description?.message}
            />
        </div>
        <div>
          <label htmlFor="videoUrl">Video Url</label><br />
            <TextInputComponent
              name='videoUrl'
              control={control}
              type='text'
              defaultValue=''
              errMsg={errors?.videoUrl?.message}
              required:true
            />
        </div>
        <div>
          <label htmlFor="videoImageUrl">Video Image Url (https://img.youtube.com/vi/videoId/maxresdefault.jpg)</label><br />
            <TextInputComponent
              name='videoImageUrl'
              control={control}
              type='text'
              defaultValue=''
              errMsg={errors?.videoImageUrl?.message}
              required:true
            />
        </div>
        <div>
          <label htmlFor="status">Status</label><br />
            <OptionsComponent
              name='status'
              control={control}
              errMsg={errors?.status?.message}
              required:true 
            />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input className='submit_btn' type="submit" value={value} disabled={loading}  style={{ cursor: loading ? 'not-allowed' : 'pointer' }}/>
      </div>
    </form>
  )
}

export default FeaturedForm