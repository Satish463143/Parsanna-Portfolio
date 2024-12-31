import React from 'react'
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextAreaInput,TextInputComponent } from '../../common/Form/Form';
const ContactForm = ({ submitEvent, loading, value }) => {

    const contactDTO = Yup.object({
        fullName: Yup.string().min(2).max(50).required(),
        email: Yup.string().required(),
        phone : Yup.string()
            .matches(
              /^\+?[1-9]\d{1,14}$/,
              "Phone number must be a valid phone number"
            )
            .required("Phone number is required"),
        message:Yup.string().nullable().notRequired()
    })
    
    const {control, handleSubmit,formState: { errors }} = useForm({
        resolver:yupResolver(contactDTO)
    })

  return (
    <form action="" onSubmit={handleSubmit(submitEvent)}>
        <div className="form_gid">
            <div>
                <label htmlFor="fullName"> Full name *</label><br />
                <TextInputComponent 
                    name='fullName'
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.fullName?.message}
                    required:true
                />
                <br />
            </div>
            <div>
                <label htmlFor="email">Email *</label><br />
                <TextInputComponent 
                    name='email'
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.email?.message}
                    required:true
                />
                <br />
            </div>
            <div>
                <label htmlFor="phone">Phone Number *</label><br />
                <TextInputComponent 
                    name='phone'
                    control={control}
                    defaultValue=''
                    errMsg={errors?.phone?.message}
                    required:true
                /> 
                <br />
            </div>
            <div>
                <label htmlFor="Message">Message</label><br />
                <TextAreaInput 
                    name='message'
                    control={control}
                    defaultValue=''
                    errMsg={errors?.message?.message}
                    required:true
                /> 
                <br />
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center',  }}>            
            <input
                className='submit_btn'
                type="submit"
                value={value}
                disabled={loading}
                style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
            />
        </div>
    </form>
  )
}

export default ContactForm