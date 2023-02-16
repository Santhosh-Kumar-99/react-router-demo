import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom';

function Users() {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
    return (
        <div className='user-list'>
            <Link to={'1'}>User 1</Link>
            <Link to={'2'}>User 2</Link>
            <Link to={'3'}>User 3</Link>
            <Link to={'admin'}>Admin</Link>
            <Outlet />
            <div>
                <button onClick={() => { setSearchParams({ filter: 'active' }) }}>Active User</button>
                <button onClick={() => { setSearchParams({}) }}>Reset Filter</button>
            </div>
            {
                showActiveUsers ? <h2>Showing Active users</h2> : <h2>Showing all users</h2>
            }
        </div >
    )
}

export default Users;