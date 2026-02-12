import React from 'react';
import logo from '../../assets/logo.png';
import './navbar.css';
import Link from '../links/link';

const Navbar = () => {
    return ( 
            <>
                <div className="navbar">
                    <img src={logo} alt="" />
                    <div className="navlinks">
                        <Link />
                        <Link />
                        <Link />
                        <Link />
                        <Link />

                    </div>
                </div>
            
            </>
     );
}
 
export default Navbar;