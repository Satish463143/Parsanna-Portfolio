import React, { useEffect } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextInputComponent } from '../../common/Form/Form'

const CategoryForm = ({submitEvent,loading,detail=null,value}) => {

  const categoryDTO = Yup.object({
    name:Yup.string().min(2).max(100).required('It is a required filed')
  })

  const {control, handleSubmit, setValue, formState:{errors}}= useForm({
    resolver:yupResolver(categoryDTO)
  })


  useEffect(()=>{
    if(detail){
      setValue("name", detail.name)
    }
  },[detail, setValue])

  return (
    <form action="" onSubmit={handleSubmit(submitEvent)}>
      <div className="from_grid">
        <div>
          <label htmlFor="name">Category Name</label><br />
            <TextInputComponent
              name='name'
              control={control}
              type='text'
              defaultValue=''
              errMsg={errors?.name?.message}
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

export default CategoryForm