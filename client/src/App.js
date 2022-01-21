import {Routes,Route} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getAuthUser } from "./JS/action/authActions";

import Login from "./components/Login"
import AppNavbar from "./components/Route/AppNavbar";
import Home from "./components/Pages/Home";
import Dashboard from "./components/Pages/Dashboard";
import PrivateRoute from "./components/privateRoute.js/PrivateRoute";
import NotFound404 from "./components/Pages/NotFound404";


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
     <Route path="*" element={<NotFound404 />} />
 
   </Routes>
   <ToastContainer position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover/>
    </div>
  );
}

export default App;
