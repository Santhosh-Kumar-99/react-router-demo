import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Users() {
    return (
        <div className='user-list'>
            <Link to={'1'}>User 1</Link>
            <Link to={'2'}>User 2</Link>
            <Link to={'3'}>User 3</Link>
            <Link to={'admin'}>Admin</Link>
            <Outlet />
        </div >
    )
}

export default Users;