import React from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src="https://nationalbuilders.in/wp-content/uploads/2021/10/Group-5.png" alt="logo" />
            </div>
            <img className='nav-dropdown' />
            <ul className="nav-menu">
                <li>Home</li>
                <li>Projects</li>
                <li>Rentals</li>
                <li>About</li>
            </ul>
            <span className='menu-icon'>
                <MenuIcon style={{ fontSize: '32px' }} />
            </span>
        </div>
    )
}

export default Navbar
