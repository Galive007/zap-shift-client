/*import React, { useEffect, useState } from 'react';
import Logo from '../../../Components/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { RiArrowRightUpLine } from 'react-icons/ri';

const Navbar = () => {

    const { user, logOut } = useAuth()
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");


    useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);


    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


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
        <li><NavLink to='/send-parcel'>Send Parcel</NavLink></li>
    </>


    return (
        <div className={`sticky top-0 z-50 bg-base-100/80 backdrop-blur-md transition-shadow rounded-xl duration-300
  ${scrolled ? "shadow-md" : ""}`}>
            <div className="navbar rounded-xl bg-base-100 py-5 px-3">
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
                    <div className="btn btn-ghost text-xl"><Logo></Logo></div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='mr-2'>
                        <input
                            onChange={(e) => handleTheme(e.target.checked)}
                            type="checkbox"
                            defaultChecked={localStorage.getItem('theme') === "dark"}
                            className="toggle" />
                    </div>

                    {
                        user ? <>
                            <Link to='/dashboard' className='btn text-primary hover:bg-secondary mr-3'>Dashboard</Link>
                            <Link className='btn text-primary hover:bg-secondary mr-3' onClick={handleLogout}>Sign out</Link>
                            <Link to='/rider' className='btn text-primary hover:bg-secondary'>Be a Rider</Link>
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
        </div>
    );
};

export default Navbar;
*/

// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router";
// import Logo from "../../../Components/Logo";
// import useAuth from "../../../Hooks/useAuth";
// import { RiArrowRightUpLine, RiSunLine, RiMoonLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";

// const Navbar = () => {
//   const { user, logOut } = useAuth();

//   // Theme
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
//   useEffect(() => {
//     const html = document.querySelector("html");
//     html.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);
//   const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

//   // Scroll
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Mobile Menu
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const toggleMobile = () => setMobileOpen(!mobileOpen);

//   const handleLogout = () => logOut().catch(err => console.log(err));

//   const links = [
//     { name: "Services", to: "/" },
//     { name: "About Us", to: "/about" },
//     { name: "Coverage", to: "/coverage" },
//     { name: "Send Parcel", to: "/send-parcel" },
//   ];

//   return (
//     <header
//       className={`sticky top-0 z-50 backdrop-blur-md bg-base-100/70 transition-shadow duration-300
//       ${scrolled ? "shadow-lg" : ""}`}
//     >
//       <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 text-xl font-bold">
//           <Logo /> 
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex items-center gap-6 text-base font-medium">
//           {links.map((link) => (
//             <li key={link.to}>
//               <NavLink
//                 to={link.to}
//                 className={({ isActive }) =>
//                   isActive ? "text-primary underline underline-offset-4" : "hover:text-primary transition-colors"
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Right Buttons */}
//         <div className="flex items-center gap-3">
//           {/* Theme toggle */}
//           <button
//             className="btn btn-ghost btn-sm rounded-full text-xl"
//             onClick={toggleTheme}
//             title="Toggle Dark/Light"
//           >
//             {theme === "light" ? <RiMoonLine /> : <RiSunLine />}
//           </button>

//           {/* Auth Buttons */}
//           {user ? (
//             <>
//               <Link to='/dashboard' className="btn btn-sm btn-primary">Dashboard</Link>
//               <button onClick={handleLogout} className="btn btn-sm btn-primary">Sign Out</button>
//               <Link className="btn btn-sm btn-secondary">Be a Rider</Link>
//             </>
//           ) : (
//             <>
//               <Link className="btn btn-sm btn-primary">Sign In</Link>
//               <Link className="btn btn-sm btn-secondary">Sign Up</Link>
//               <RiArrowRightUpLine className="text-secondary text-3xl bg-black rounded-full p-1" />
//             </>
//           )}

//           {/* Mobile Menu Button */}
//           <button className="lg:hidden btn btn-ghost text-2xl" onClick={toggleMobile}>
//             {mobileOpen ? <RiCloseLine /> : <RiMenu3Line />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="lg:hidden bg-base-100/90 backdrop-blur-md py-4 px-6 border-t border-base-content/20">
//           <ul className="flex flex-col gap-4 text-lg font-medium">
//             {links.map((link) => (
//               <li key={link.to}>
//                 <NavLink
//                   to={link.to}
//                   className={({ isActive }) =>
//                     isActive ? "text-primary font-semibold" : "hover:text-primary transition-colors"
//                   }
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   {link.name}
//                 </NavLink>
//               </li>
//             ))}
//             <div className="flex flex-col gap-2 mt-2">
//               {user ? (
//                 <>
//                   <Link to="/dashboard" className="btn btn-primary btn-sm w-full">Dashboard</Link>
//                   <button onClick={handleLogout} className="btn btn-primary btn-sm w-full">Sign Out</button>
//                   <Link to="/rider" className="btn btn-secondary btn-sm w-full">Be a Rider</Link>
//                 </>
//               ) : (
//                 <>
//                   <Link to="/login" className="btn btn-primary btn-sm w-full">Sign In</Link>
//                   <Link to="/register" className="btn btn-secondary btn-sm w-full">Sign Up</Link>
//                 </>
//               )}
//             </div>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../../Components/Logo";
import useAuth from "../../../Hooks/useAuth";
import { RiArrowRightUpLine, RiSunLine, RiMoonLine, RiMenu3Line, RiCloseLine, RiUser3Line } from "react-icons/ri";

const Navbar = () => {
  const { user, logOut } = useAuth();

  // ----------------
  // Theme
  // ----------------
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // ----------------
  // Scroll shadow
  // ----------------
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ----------------
  // Mobile menu
  // ----------------
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const handleLogout = () => logOut().catch(err => console.log(err));

  const links = [
    { name: "Services", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Coverage", to: "/coverage" },
    { name: "Send Parcel", to: "/send-parcel" },
  ];

  return (
    <header
      className={`sticky rounded-xl top-0 z-50 backdrop-blur-md bg-base-100/70 transition-shadow duration-300
        ${scrolled ? "shadow-lg" : ""}`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ------------------------- */}
        {/* LEFT: Logo */}
        {/* ------------------------- */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Logo />
        </Link>

        {/* ------------------------- */}
        {/* CENTER: Links */}
        {/* ------------------------- */}
        <ul className="hidden lg:flex items-center gap-6 text-base font-medium">
          {links.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "text-secondary underline underline-offset-4" : "hover:text-secondary transition-colors"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ------------------------- */}
        {/* RIGHT: Theme + User Buttons */}
        {/* ------------------------- */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            className="btn btn-ghost btn-sm rounded-full text-xl"
            onClick={toggleTheme}
            title="Toggle Dark/Light"
          >
            {theme === "light" ? <RiMoonLine /> : <RiSunLine />}
          </button>

          {/* Smart User Buttons */}
          {user ? (
            <div className="relative group">
              {/* Single visible button */}
              <button className="btn btn-primary btn-sm rounded-full">
                <RiUser3Line className="text-xl" />
              </button>

              {/* Hidden buttons that appear on hover */}
              <div className="absolute right-0 top-full mt-2 flex flex-col gap-2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all origin-top-right">
                <Link to="/dashboard" className="btn btn-primary btn-sm w-36">Dashboard</Link>
                <button onClick={handleLogout} className="btn btn-primary btn-sm w-36">Sign Out</button>
                <Link to="/rider" className="btn btn-secondary text-primary btn-sm w-36">Be a Rider</Link>
              </div>
            </div>
          ) : (
            <>
              <Link to={'/login'} className="btn btn-primary btn-sm">Sign In</Link>
              <Link to='/register' className="btn btn-secondary text-primary btn-sm">Sign Up</Link>
              <RiArrowRightUpLine className="text-secondary text-3xl bg-black rounded-full p-1" />
            </>
          )}

          {/* Mobile Menu */}
          <button className="lg:hidden btn btn-ghost text-2xl" onClick={toggleMobile}>
            {mobileOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-base-100/90 backdrop-blur-md py-4 px-6 border-t border-base-content/20">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            {links.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? "text-primary font-semibold" : "hover:text-primary transition-colors"
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

    </header>
  );
};

export default Navbar;




