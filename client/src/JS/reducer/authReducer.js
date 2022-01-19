import { LOGIN_USER,REGISTER_USER,LOGOUT_USER,GET_AUTH_USER,USER_LOADING,AUTH_ERRORS } from "../constant/actions-types";

const initialState ={
    token:localStorage.getItem('token'),
    user:null,
    isAuth:false,
    isLoading:false,
    msg:null
}

const authReducer = (state = initialState,{type,payload})=>{
    switch (type) {
        case USER_LOADING:
            return{
                ...state,
                isLoading:true
            }
            case GET_AUTH_USER:
                return {
                    ...state,
                    isLoading:false,
                    isAuth:true,
                    ...payload
                }        
                
            case LOGOUT_USER:
             localStorage.removeItem('token')
             return {
                 ...state,
                 token:null,
                 user:null,
                 isAuth:false,
                 isLoading:false
             }
            case LOGIN_USER:
            case REGISTER_USER:
            
            localStorage.setItem('token',payload.token)
                return {
                 ...state,
                 isLoading:false,
                 isAuth:true,
                 ...payload
                }
   
        
        
        default:
            return state;
    }
}

export default authReducer