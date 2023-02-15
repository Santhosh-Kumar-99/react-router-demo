import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const { userId } = useParams()
    console.log(userId);
    return (
        <div>Details about user {userId}</div>
    )
}

export default UserDetails