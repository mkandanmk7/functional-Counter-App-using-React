import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul className="navlist">
                <Link to="/" >
                    <li className="navlist-item" >Home</li>
                </Link>
                <Link to="/about">

                    <li className="navlist-item">About</li>
                </Link>
                <Link to="/review">

                    <li className="navlist-item">Review</li>
                </Link>
                <Link to="/customer">
                    <li className="navlist-item">Customer</li>
                </Link>
                <Link to="/contact" >
                    <li className="navlist-item">Contact</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar