import React, { useState } from "react";
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/solid'

import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    useNavigate,
    useLocation,
} from "react-router-dom";
import "./styles.css";

import { Provider } from 'react-redux';
import Store from './pages/store/Store';


import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Reservastion from './pages/Reservation/Reservation';
import Blog from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import Logo from './images/logo2.png'
import Footer from "./pages/Footer/Footer";
import MenuByCat from './pages/Menu/ByCategorie/MenuByCat'
import Panier from "./pages/Panier/Panier";
import Single from './pages/Menu/Single/Single'
const Link = ({ to, children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClicked = () => {
        const bars = document.getElementById("bars");

        bars?.classList.add("show");

        setTimeout(() => {
            bars?.classList.remove("show");
            bars?.classList.add("hide");
            navigate(to);
        }, 800);

        setTimeout(() => bars?.classList.remove("hide"), 1600);
    };

    return (
        <a
            className={
                location.pathname.includes(to.toLowerCase()) ? "active" : ""
            }
            onClick={handleClicked}
        >
            {children}
        </a>
    );
};

const Bars = () => {
    return (
        <div id="bars" className="bars">
            <div />
            <div style={{ animationDelay: "0.1s" }} />
            <div style={{ animationDelay: "0.2s" }} />
            <div style={{ animationDelay: "0.3s" }} />
            <div style={{ animationDelay: "0.4s" }} />
        </div>
    );
};

const Layout = () => {
    const [open, setOpen] = useState(false);

    return (

        <>
            <div style={{ zIndex: 1, backgroundColor: '#ffff' }} className='shadow-lg  w-full fixed top-0 left-0  h-26' >
                <div className=' md:flex items-center justify-between   bg-white  md:px-10 px-7'>
                    <div className=' flex items-center '>
                        <img src={Logo} className="Logo w-24" alt="VOPA_LOGA" />
                    </div>
                    <div onClick={() => setOpen(!open)} className='absolute right-8 top-8  cursor-pointer md:hidden w-7 h-7' >
                        {
                            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                        }
                    </div>
                    <ul className={`2xl:mr-28  md:flex md:items-center md:pb-0 pb-12  absolute  md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15' : 'top-[-490px]'} `}>

                        <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                            <Link to="/" className=' text-gray duration-500'>HOME</Link>
                        </li>
                        <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                            <Link to="/about" className=' duration-500'>ABOUT</Link>
                        </li>
                        <li className='md:ml-8 md:my-0 my-7 font-semibold' >
                            <Link to="/menu" className=' duration-500' >MENU</Link>
                        </li>
                        <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                            <Link to="/reservastion" className=' duration-500'>RESERVATION</Link>
                        </li>
                        <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                            <Link to="/blog" className=' duration-500'>BLOG</Link>
                        </li>
                        <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                            <button class="rounded-full   border-2 border-lime-600 h-11 w-32  hover:border-none hover:bg-lime-600 transition-all duration-700">
                                <Link to="/contact" className=' duration-500 ' >CONTACT</Link>
                            </button>

                        </li>



                    </ul>
                </div>
            </div>
            <Bars />
            <Outlet />
            <Footer />
        </>
    );
};


const Routerr = () => {
    return (
        <Provider store={Store}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/reservastion" element={<Reservastion />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/menu/:id" element={<MenuByCat />} />
                    <Route path="/panier" element={<Panier />} />
                    <Route path="/details/:id" element={<Single />} />
                </Route>
            </Routes>
        </Provider>
    );
};

export default Routerr;
export { Home, About, Menu, Reservastion, Blog, Contact, Routerr };



