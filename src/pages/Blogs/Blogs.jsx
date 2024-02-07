import React, { useEffect, useState } from "react";
import 'primeicons/primeicons.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Blogs.scss'
import data from '../../data/Blogs.json'


import hero1 from '../../images/hero1.png';
import hero2 from '../../images/hero2.png';
import hero3 from '../../images/hero3.png';
import image3 from '../../images/img3.png';
import Blog2 from '../../images/BlogsI2.png';
import Blog3 from '../../images/BlogsI3.png';

import Calendar from '../../images/Calendar.png';
import Admin from '../../images/admin.png';


import rec1 from '../../images/res1.png'
import rec2 from '../../images/res2.png'
import rec3 from '../../images/res3.png'
import rec4 from '../../images/res4.png'

function Blogs() {
    const { title, photo, recent } = data;

    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;
    const images = [image3, Blog2, Blog3, Blog3, Blog3, Blog2];


    const recentPosts = [
        {
            image: image3,
            date: 'June 22, 2020',
            title: '10 Reasons To do A Digital Detox Challenge',
        },
        {
            image: Blog2,
            date: 'June 22, 2020',
            title: '10 Reasons To do A Digital Detox Challenge',
        },
        {
            image: Blog3,
            date: 'June 22, 2020',
            title: '10 Reasons To do A Digital Detox Challenge',
        },
        {
            image: image3,
            date: 'June 22, 2020',
            title: '10 Reasons To do A Digital Detox Challenge',
        },
    ];

    const blogData = [
        {
            date: 'Feb 14, 2022',
            author: 'Admin',
            image: image3,
            title: '10 Reasons To do A Digital Detox Challenge',
            content:
                'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        },
        {
            date: 'Jun 14, 2020',
            author: 'Admin',
            image: Blog2,

            title: 'Traditional Soft Pretzels With Sweet Beer Cheesse',
            content:
                'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        },
        {
            date: 'Feb 14, 2022',
            author: 'Admin',
            image: Blog3,
            title: '10 Reasons To do A Digital Detox Challenge',
            content:
                'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        },
        {
            date: 'Feb 14, 2022',
            author: 'Admin',
            image: Blog3,
            title: '10 Reasons To do A Digital Detox Challenge',
            content:
                'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        },

    ];

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };



    useEffect(() => {
        Aos.init({ duration: 2000 });
    });
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);
    useEffect(() => {
        const matches = document.querySelectorAll("p");
        matches.forEach((target) => {
            gsap.to(target, {
                backgroundPositionX: "0%",
                stagger: 9,
                scrollTrigger: {
                    trigger: target,
                    scrub: true,
                    start: "top center",
                    end: "bottom 40%",
                },
            });
        });
        return () => { };
    }, []);

    gsap.registerPlugin(ScrollTrigger);
    return (
        <>

            <div className="bg-cover bg-center mt-[100px] bg-image">
                <div className="grid justify-items-center relative top-24 ">
                    <p className="  about font-bold  text-9xl sm:text-1xl ">{title}</p>
                </div>
                <img src={hero1} alt="" className='circle-image ml-11' data-aos="fade-up" />
                <img src={hero2} alt="" className='circle-image ml-96 mt-10' data-aos="fade-up" />
                <div className='flex justify-end mr-11' data-aos="fade-up">
                    <img src={hero2} alt="" className='circle-image ' data-aos="fade-up" />
                    <img src={hero3} alt="" className='circle-image ml-11' data-aos="fade-up" />
                </div>
            </div>



            <div className=" flex justify-center mt-10 xl:hidden 2xl:hidden">
                <input type="text" className="h-11 w-[37vh] sm:w-[50vh] md:w-[90vh] outline-none p-5 border-2  " placeholder="Search Your Keword.." />
                <button className=" h-11 w-12" style={{ background: '#195A00' }}>
                    <i className="pi pi-search  text-white-A700" style={{ fontSize: '1rem' }}></i>
                </button>
            </div>

            <div className={`${isModalOpen ? 'opacity-75' : ''}`}>
                <div className="container flex justify-end  ">
                    <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 space-x-10 mt-10 ">

                        <div className="post flex flex-col items-center mx-auto ml-0 sm:ml-0 md:ml-36 xl:ml-0  relative lg:left-[-20vh] xl:left-[0vh] space-y-20">
                            {currentPosts.map((blog, index) => (
                                <div key={index} className="imaage flex flex-col justify-end " data-aos="zoom-up">


                                    <img src={blog.image} className="img3" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} alt="" />

                                    <div className="flex flex-row  date">
                                        <img src={Calendar} className="w-6 mt-3" alt="" />
                                        <p className="mt-3 ml-1 text-md text-gray-900 font-medium">{blog.date} /</p>
                                        <img src={Admin} className="w-6 mt-3" alt="" />
                                        <p className="mt-3 ml-1 text-md text-gray-900 font-medium">{blog.author}</p>
                                    </div>
                                    <p className="text-3xl  mt-2  title text-gray-700 font-semibold">{blog.title}</p>
                                    <hr className="mt-6" />
                                    <Text>
                                        <p className="kalam pargha w-[420px] sm:w-[600px] md:w-[600px] 2xl:w-[600px]  mx-auto   mt-5">{blog.content}</p>
                                    </Text>
                                </div>
                            ))}
                        </div>

                        <div className="hidden order-1 xl:block 2xl:block">
                            <div>
                                <input type="text" className="h-11 w-[330px] outline-none p-5 border-2  " placeholder="Search Your Keword.." />
                                <button className=" h-11 w-12" style={{ background: '#195A00' }}>
                                    <i className="pi pi-search  text-white-A700" style={{ fontSize: '1rem' }}></i>
                                </button>
                            </div>

                            <div className="recent w-[379px] border-2 mt-7 p-7">
                                <p className="kalam font-bold text-2xl mt-[-10px] text-gray-800">{recent}</p>
                                {recentPosts.map((post, index) => (
                                    <React.Fragment key={index}>
                                        <div className="flex flex-row">
                                            <img src={post.image} className="w-28 max-h-20 rounded mt-3" alt="" style={{ objectFit: 'cover' }} />
                                            <div className="flex flex-col">
                                                <p className="text-gray-700 mt-2 ml-2 font-normal">{post.date}</p>
                                                <p className="text-sm fon mt-2 text-gray-700 font-semibold ml-2">{post.title}</p>
                                            </div>
                                        </div>
                                        <hr className="mt-7" />
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="recent w-[379px] border-2 mt-7 p-7">
                                <p className=" kalam font-bold text-2xl mt-[-10px] text-gray-800" >
                                    {photo}
                                </p>
                                <div className=" ml-4">
                                    <div className="grid grid-cols-3">
                                        {images.map((image, index) => (
                                            <div key={index} onClick={() => handleImageClick(image)}>
                                                <img src={image} className="w-20 h-20 mt-3" style={{ objectFit: "cover" }} alt="" />
                                            </div>
                                        ))}

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center" data-aos="zoom-up">
                    <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
                    <div className="bg-white p-4 z-10">
                        <img src={selectedImage} className="mt-20" alt="" style={{ minWidth: '100vh', maxHeight: "80vh", objectFit: "cover" }} />
                    </div>
                </div>
            )}

            <nav className="flex justify-center mt-20">
                <ul className="list-style-none flex">
                    <li>
                        <a
                            className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm  transition-all duration-300 "
                        >
                            Previous
                        </a>
                    </li>
                    {Array.from({ length: Math.ceil(blogData.length / postsPerPage) }, (_, index) => (
                        <li key={index}>
                            <a
                                className={`relative block rounded bg-transparent px-3 py-1.5 text-sm ${currentPage === index + 1
                                    ? 'bg-primary-100 font-medium text-primary-700'
                                    : 'text-green-600'
                                    } transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-green-700 dark:hover:text-white`}
                                onClick={() => paginate(index + 1)}
                            >
                                {index + 1}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-green-100 dark:text-white dark:hover:bg-green-700 dark:hover:text-white"
                            href=""
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>

            <br /><br />
        </>


    );
}

export default Blogs;


const Text = styled.div`
                p {
                    background: linear-gradient(to right,  #195A00 50%, black 50%);
                background-size: 200% 100%;
                background-position-x: 100%;
                color: transparent;
                background-clip: text;
                -webkit-background-clip: text;
                user-select: none;
                line-height:1.5
}
                `;





