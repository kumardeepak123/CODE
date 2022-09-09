import React from 'react';
import { Link, Outlet } from 'react-router-dom'
const Header = (props) => {
    return (
        <div style={{ backgroundColor: "#ccc" }}>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/aboutus">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/allEmps">allEmps</Link>
                </li>
                <li>
                    <Link to="/createEmp">Create Employee</Link>
                </li>
                <li>
                    <Link to="/employee/details/2">Employee Details</Link>
                </li>
                <li>
                    <Link to="/manager/login">Manager Login</Link>
                </li>
               

            </ul>
            
        </div>
        );
}


export default Header;