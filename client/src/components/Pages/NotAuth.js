import React from 'react'
import { Link } from 'react-router-dom'

const NotAuth = () => {
    return (
        <div>
            <h1>this is PrivateRoute </h1>
            <Link to="/login">go to login</Link>
        </div>
    )
}

export default NotAuth
