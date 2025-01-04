import React, { useEffect, useState } from 'react'
import { TextInputComponent } from '../../common/Form/Form'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from '../../api/login.api';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setLoggedInUser } from '../../reducer/user.reeducer';
import './Login.css'

const Login = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [createLogin] = useLoginMutation()

    const loggedInUser = useSelector((root)=>{
        return root.user.loggedInUser
    })

    useEffect(()=>{
        if(loggedInUser){
            navigate('/admin/dashboard')
        }
    },[loggedInUser])

    console.log('loggedInUser',loggedInUser)

    const loginDTO = Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
    });

    const {handleSubmit, control, formState: { errors }, } = useForm({
        resolver: yupResolver(loginDTO),
    });

    
    const login = async(data)=>{
        setLoading(true)
        try{
            const response = await createLogin(data).unwrap()
            toast.success("Login sucessfull")
            localStorage.setItem("_at", response.result.token.token)
            localStorage.setItem("_rt", response.result.token.refreshToken)
            dispatch(setLoggedInUser(response.result.userDetails))
            
            navigate("/admin/dashboard");
        }catch(exception){
            toast.error(exception.data?.message || "Login failed");
        }
        finally{
            setLoading(false)
        }

    }

  return (
    <div className='container' onSubmit={handleSubmit(login)}>
        <ToastContainer/>
        <div className="login_form">
            <form action="">
                <label htmlFor="email">Email <span>*</span></label><br />
                <TextInputComponent 
                    name='email'
                    errMsg={errors?.email?.message || null}
                    required:true
                    control={control}   
                /> <br />
                <label htmlFor="password">Password <span>*</span></label><br />
                <TextInputComponent 
                    name='password'
                    errMsg={errors?.password?.message || null}
                    required:true
                    control={control}   
                /><br />
                <input
                    className="submit_btn hoverBotton"
                    type="submit"
                    value="Log in"
                    name="login_submit"
                    disabled={loading}
                />
            </form>
        </div>
        
    </div>
  )
}

export default Login