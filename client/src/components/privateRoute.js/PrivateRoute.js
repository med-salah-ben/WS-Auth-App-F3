import { useSelector } from 'react-redux';
import NotAuth from '../Pages/NotAuth';



const PrivateRoute = ({children}) => {
    const isAuth = useSelector(state=>state.authReducer.isAuth);
  return (
      <>
         {isAuth ? children : <NotAuth />}
      </>
  )
}

export default PrivateRoute
