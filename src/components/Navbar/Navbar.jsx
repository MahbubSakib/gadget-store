import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';
import { Toaster } from 'react-hot-toast';

const Navbar = () => {
    return (
        <div className='bg-gray-100'>
            <Toaster></Toaster>
            {/* <div className='pt-5 pb-16'>
                <div className='w-11/12 mx-auto rounded-3xl' style={{ background: "rgb(149, 56, 226)" }}> */}
            <div className="navbar px-48 pt-8 bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="text-black menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
                            <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                            <li><NavLink to={'/about'}>About Us</NavLink></li>
                        </ul>
                    </div>
                    <Link to={'/'}>
                        <div className='flex'>
                            <div className='text-xl mr-3'>
                                <i className="fa-solid fa-house-laptop"></i>
                            </div>
                            <a className="text-xl font-semibold text-black">Gadget Heaven</a>
                        </div>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-black menu menu-horizontal px-1">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
                        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                        <li><NavLink to={'/about'}>About Us</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <button className="border border-gray-300 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <button className="border border-gray-300 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>

        </div>


    );
};

export default Navbar;