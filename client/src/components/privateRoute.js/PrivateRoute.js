import { useSelector } from 'react-redux';
import {Navigate} from "react-router-dom"



const PrivateRoute = ({children}) => {
  // const navigate =useNavigate()
    const isAuth = useSelector(state=>state.authReducer.isAuth);
  return (
      <>
         {isAuth ? children :< Navigate to="/" />}
      </>
  )
}

export default PrivateRoute
