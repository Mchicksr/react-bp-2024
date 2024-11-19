import React from 'react';
import { Outlet } from 'react-router';
function Nav(props) {
    return (
        <div>
            <h1>Nav</h1>
            <Outlet/>
        </div>
    );
}

export default Nav;