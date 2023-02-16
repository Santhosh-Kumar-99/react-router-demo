import React from 'react'
import { NavLink } from 'react-router-dom'
function NavBar() {
    return (
        <nav className='primary'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'products'}>Products</NavLink>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'profile'}>Profile</NavLink>
        </nav>
    )
}

export default NavBar