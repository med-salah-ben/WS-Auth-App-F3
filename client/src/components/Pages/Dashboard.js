import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const user = useSelector(state=>state.authReducer.user)
    return (
        <div>
            {!user ? (<h1>Spinner .....</h1>):(
                <div>
                <h2>{user.name}</h2>
                <h2>{user.lastName}</h2>
                <h2>{user.email}</h2>
                </div>
            )}
        </div>
    )
}

export default Dashboard
