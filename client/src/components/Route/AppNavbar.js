import * as React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Register from '../Register';
import Login from '../Login';
import { logoutUser } from '../../JS/action/authActions';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state)=>state.authReducer.isAuth);
  const user = useSelector((state)=>state.authReducer.user);

  const logout = ()=>{
    dispatch(logoutUser())
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/"style={{color:"white", textDecoration:"none"}}>
            Home</Link>
            {isAuth ? (<Link to="/dashboard"style={{color:"white", textDecoration:"none",marginLeft:"2rem"}}>
            Dashboard</Link>):(<></>)}
          </Typography>
        {!isAuth ? ( <>
        <div color="inherit"> <Register /> </div>
          <div color="inherit"> <Login /> </div></>):(
            <>
            <Button color="inherit" >{user.name}</Button>
            <Button  onClick={logout}><Link to="/" style={{color:"white", textDecoration:"none"}}>Logout</Link></Button>
            </>)}
        </Toolbar>
      </AppBar>
    </Box>
  );
}