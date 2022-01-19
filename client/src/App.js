import {Routes,Route} from "react-router-dom";
import { useEffect } from "react";
import { getAuthUser } from "./JS/action/authActions";
import { useDispatch } from "react-redux";
import Login from "./components/Login"
import AppNavbar from "./components/Route/AppNavbar";
import Home from "./components/Pages/Home";
import Dashboard from "./components/Pages/Dashboard";
import PrivateRoute from "./components/privateRoute.js/PrivateRoute";


function App() {
  const dispatch = useDispatch();
  const getUser = ()=>{
    dispatch(getAuthUser())
  }
  useEffect(()=>{
    getUser()
   // eslint-disable-next-line
  },[])
  return (
    <div>
   <AppNavbar />
   <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/login" element={<Login />}/>
     <Route path="/dashboard" element={
       <PrivateRoute><Dashboard /></PrivateRoute>
     } />
     
 
   </Routes>
   
    </div>
  );
}

export default App;
