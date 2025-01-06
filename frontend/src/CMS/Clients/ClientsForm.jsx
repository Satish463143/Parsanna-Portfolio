import React, { useEffect } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextInputComponent } from '../../common/Form/Form'

const ClientsForm = ({submitEvent,loading,detail=null,value}) => {
  const clientsDTO =Yup.object({
    link:Yup.string(),
    image:Yup.mixed().required()
  })

  const {control, handleSubmit, setValue, formState:{errors}} = useForm({
    resolver:yupResolver(clientsDTO)
  })

  useEffect(()=>{
    if(detail){
      setValue("link", detail.link)
      setValue("image", detail.image)
    }
  }, [detail, setValue])

  return (
    <form action="" onSubmit={handleSubmit(submitEvent)}>
      <h3>Content</h3>
      <div className="from_grid">        
        <div>
          <label htmlFor="link">Link</label><br />
            <TextInputComponent
              name="link"
              control={control}
              type='text'
              defaultValue=''
              errMsg={errors?.link?.message}
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

export default ClientsForm