import React from 'react';
import Logo from '../../../Components/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { RiArrowRightUpLine } from 'react-icons/ri';

const Navbar = () => {

    const { user, logOut } = useAuth()

    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }

    const links = <>
        <li><NavLink to=''>Services</NavLink></li>
        <li><NavLink to='/about'>About us</NavLink></li>
        <li><NavLink to='/coverage'>Coverage</NavLink></li>
    </>


    return (
        <div className="navbar bg-base-100 rounded-xl py-5 px-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn px-0 btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><Logo></Logo></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <>
                    <Link className='btn text-primary hover:bg-secondary mr-3' onClick={handleLogout}>Sign out</Link>
                    <Link to='beARider' className='btn text-primary hover:bg-secondary'>Be a Rider</Link>
                    </>
                        : <>
                            <Link to='/login' className='btn text-primary mr-3 hover:bg-secondary'>Sign In</Link>
                            <Link to='/register' className='btn text-primary hover:bg-secondary'>Sign Up</Link>
                            <span>
                                <RiArrowRightUpLine className='text-secondary text-4xl bg-black rounded-3xl' />
                            </span>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;



