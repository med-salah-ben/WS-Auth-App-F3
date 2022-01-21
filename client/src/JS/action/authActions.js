import axios from "axios";
import {  toast } from 'react-toastify';



import { LOGIN_USER,REGISTER_USER,LOGOUT_USER,GET_AUTH_USER,USER_LOADING,AUTH_ERRORS } from "../constant/actions-types";

//Register User

export const registerUser = (formdata)=>async(dispatch)=>{
    try {
        const res = await axios.post("/api/auth/register",formdata)
        dispatch({
            type:REGISTER_USER,
            payload:res.data // {msg, user, token}
        })
    } catch (error) {
        console.dir(error)
        const {errors,msg} = error.response.data;
        if(Array.isArray(errors)){
            errors.forEach((err)=>toast(err.msg))
            
        }
        if(msg){
            toast(msg)
        }

        dispatch({type:AUTH_ERRORS})
    }
}

export const loginUser = (formdata)=>async(dispatch)=>{
    try {
        const res = await axios.post("/api/auth/login",formdata)
        dispatch({
            type:LOGIN_USER,
            payload:res.data // {msg, user, token}
        })
    } catch (error) {
        console.dir(error)
        const {errors,msg} = error.response.data ;
        if(Array.isArray(errors)){
            errors.forEach((err)=>toast.error(err.msg, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                }))
        }
        if(msg){
           toast.error(msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
           
        }
        
        dispatch({type:AUTH_ERRORS})
    }
};

export const getAuthUser = ()=>async(dispatch)=>{
    try {
        //headers
        const config ={
            headers :{
                'x-auth-token':localStorage.getItem('token')
            }
        }
        const res = await axios.get('/api/auth/user',config)
        dispatch({
            type:GET_AUTH_USER,
            payload:res.data // user:req.user
        })

    } catch (error) {
        console.log(error)
        // dispatch({type:AUTH_ERRORS})
        
    }
}

export const loadingUser = ()=>(dispatch)=>{
    dispatch({
        type:USER_LOADING
    })
}

export const logoutUser = ()=>(dispatch)=>{
    dispatch({
        type:LOGOUT_USER
    })
}

