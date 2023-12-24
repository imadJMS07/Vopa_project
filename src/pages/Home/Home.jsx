import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aos from 'aos';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../../pages/Home/Home.scss'

import image2 from '../../images/img2.png'
import image3 from '../../images/img3.png'
import image4 from '../../images/img4.png'
import Bg from '../../images/Bg3.png'
import Pic_2 from '../../images/pic_2.png'
import Stars from '../../images/stars.png'
import bgWelcome from '../../images/hero_bg2.png'
import imm2 from '../../images/imm2.png'
// import No9at from '../../images/'
import Chaf from '../../images/chaf.png'
import Truck from '../../images/Truck.png'
import Timer from '../../images/Timer.png'
import Hamburger from '../../images/Hamburger.png'
import Factory from '../../images/Factory.png'
import image5 from '../../images/img_unsplashmaqz3x8l0.png'
import image6 from '../../images/img_unsplashjpkfc5ddi.png'
import image7 from '../../images/img_unsplashfdlzbwip0am.png'
import pay from '../../images/pay.png'
import Quotes from '../../images/Quotes.png'
import hero1 from '../../images/hero1.png'
import hero2 from '../../images/hero2.png'
import hero3 from '../../images/hero3.png'
gsap.registerPlugin(ScrollTrigger);
export default function Home() {

    const [category, setCategory] = useState([]);
    const [last, setLast] = useState([]);

    useEffect(() => {
        // Fetch product data from the Laravel API
        axios.get('http://127.0.0.1:8000/api/categories')
            .then(response => {
                setCategory(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/lastproducts')
            .then(response => {
                setLast(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        Aos.init({ duration: 3000 });
    });
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1
    };


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <div className="mt-24 mb-96 gridHome">
                <div className='gridHome grid grid-cols-1 sm:grid-cols-2 gap-4'>

                    <div className='space-y-5 relative xl:left-36 xl:top-20'>
                        <p className='miniver' style={{}}>
                            Healthy & Testy Food <hr className='ml-6 w-9 inline-block' />
                        </p>
                        <p className='inter text-6xl  opacity-[0.7]' >
                            Enjoy Healthy Life <br /> & Testy Food. <img src={Stars} className='inline-block' alt="" />
                        </p>
                        <p className='kalam'>
                            Indulge in a life of wellness with the perfect fusion of health and tasty delights. <br /> Enjoy a healthy life and delicious food, making every moment a celebration of well-being
                        </p>

                        <div className='flex flex-row gap-5'>
                            <button type="button" className="kalamButton w-44  h-11  text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 ">Show More</button>
                            <button type="button" className="kalam border-green-800 border-[1.5px] text-green-800 w-44  h-11  text-[17px] placeholder-gray-800 mt-3 rounded-md  ">Reserve Now</button>

                        </div>
                    </div>

                    <div className="relative">
                        <img src={Bg} alt="" className="absolute inset-0  object-cover " />
                        <img src={Pic_2} className='circle-image-pic2 xl:max-w-[60vh] xl:ml-32 xl:mt-28 absolute top-0 left-0 ' alt="" />
                    </div>

                </div>
            </div>

            <div
                className='maw-w-[90vh]'
                style={{
                    backgroundImage: `url(${bgWelcome})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundPepeat: "no-repeat",
                }}
            >
                <div className='h-[550px] sm:h-[680px] flex  flex-col space-y-8'>
                    <div className='flex justify-center mx-auto flex-col  '>
                        <p className='miniver text-6xl mt-32 flex justify-center '>Welcome</p>
                        <Text>
                            <p className='kalam text-2xl mt-6'>Discover healthy and delicious cuisine at VOPA in Tangier, favoring freshness and diversity. Our balanced menu offers</p>
                            <p className='kalam text-2xl mt-3'>unique dishes for all tastes. With quality ingredients, our passionate team guarantees you an exceptional culinary</p>
                            <p className='kalam text-2xl mt-3'>experience, combining health and pleasure. Join us in redefining your diet at VOPA.</p>
                        </Text>
                        <div className="flex justify-center mt-12">
                            <button type="button" className=" kalamButton w-44  h-11  text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 ">Show More</button>
                        </div>
                    </div>
                </div>
            </div >


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-[90px] flex justify-center">
                <div className="space-x-2 flex justify-center md:col-span-2 lg:col-span-1 " data-aos="fade-left" >
                    <img src={image3} alt="" className="img3 ml-4 md:ml-[180px] mt-4 md:mt-16 lg:mt-0 hidden lg:flex xl:block 2xl:block" />
                </div>
                <div className="twoimage flex justify-center flex-col space-y-4 mt-8 md:mt-[60px]" data-aos="fade-up" >
                    <img src={image2} alt="" className="img" data-aos="fade-left" />
                    <img src={image4} alt="" className="img" data-aos="fade-up" />
                </div>
                <div className="paghar relative mt-8 md:mt-[100px] lg:right-[150px]">
                    <React.Fragment >
                        <h1 className="miniver text-2xl" data-aos="fade-right">Healthy Food <hr className='miniver inline-block w-20 h-1' /> </h1>
                        <h6 className="inter text-4xl" data-aos="fade-right"><span className='t' style={{ color: '#195A00' }}>Food </span><span className='relative '>is an important</span></h6>
                        <h6 className="inter text-4xl" data-aos="fade-right"><span className='t' style={{ color: '#195A00' }}>part of a balanced  </span><span className='relative '>Diet</span></h6>
                        <Text>
                            <p className="kalam w-full mt-5" style={{ fontSize: '20px' }} data-aos="fade-right">A well-rounded diet is crucial for overall health, providing  </p>
                            <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-left">essential nutrients that support bodily functions.  </p>
                            <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-right"> Beyond physical benefits, food also carries cultural and </p>
                            <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-left">social significance, contributing to a balanced and </p>
                            <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-right"> fulfilling lifestyle.</p>
                        </Text>
                    </React.Fragment>
                </div>
                <img src={hero1} alt="" className='hidden xl:block 2xl:block circle-image relative top-[-700px] left-[1500px]' />
                <img src={hero2} alt="" className='hidden xl:block 2xl:block circle-image relative top-[-700px] left-12' />
                <img src={hero3} alt="" className='hidden xl:block 2xl:block circle-image ml-11 relative top-[-340px]' />
                <img src={hero2} alt="" className='hidden xl:block 2xl:block circle-image relative top-[-300px] left-[1500px] ' />

            </div>




            <div className="flex  flex-col  mx-auto mt-36" data-aos="fade-up">
                <p className='flex justify-center text-5xl miniver ' >Food Catagory</p>
                <Text>
                    <p className='flex justify-center kalam mt-5 text-xl'>In the realm of cuisine, 'Food Category'helps classify and organize diverse foods based on shared characteristics. </p>
                    <p className='flex justify-center kalam text-xl'>Whether it's fruits, vegetables, dairy, or meats, this concept simplifies navigating the rich world of</p>
                    <p className='flex justify-center kalam text-xl'>  flavors and textures.</p>
                </Text>
                <img src={hero3} alt="" className='hidden xl:block 2xl:block circle-image ml-11 relative top-[-140px]' />
                <img src={hero2} alt="" className='hidden xl:block 2xl:block circle-image relative top-[00px] left-[1500px] ' />

            </div>


            <div className='w-3/4  m-auto' data-aos="fade-up">
                <div className="mt-20 space-x-9 ">
                    <Slider {...settings}>
                        {category.map((d) => (
                            <div key={d.id} className=" bg-white h-[450px] text-black rounded-xl  border-2  hover:shadow-2xl rounded-t-xl hover:duration-700">
                                <div className='h-72 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
                                    <img src={`http://127.0.0.1:8000/storage/product/image/${d.image}`} alt="" className="h-72 w-[377px] rounded-t-xl  " />
                                </div>

                                <div className="flex flex-col items-center justify-center gap-4 p-4">
                                    <p className="text-xl font-semibold kalam text-green-800" >{d.name}</p>
                                    <Link to={`/menu/${d.id}`} className='bg-green-800 text-white text-lg px-6 py-1 rounded-sm  text-white-A700'>View Menu</Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <img src={hero3} alt="" className='hidden xl:block 2xl:block circle-image mr-20 relative top-[-40px] ' />

                <img src={hero2} alt="" className='hidden xl:block 2xl:block circle-image relative top-[-200px] left-[1300px] ' />

            </div >


            <div className="container flex justify-center mt-32">
                <div className='grid grid-cols-1 sm:grid-cols-2  gap-'>
                    <div>

                        <img src={Chaf} alt="" data-aos="fade-right" />
                        <img src={imm2} className='hidden lg:block xl:block 2xl:block absolute top-[3600px] left-[400px]' alt="" />

                    </div>
                    <div className='relative xl:left-24 xl:top-28'>
                        <div className="relative" >
                            <h1 className="miniver text-2xl" data-aos="fade-right">Why choose us <hr className='miniver inline-block w-20 h-1' /> </h1>
                            <h6 className="inter text-4xl" data-aos="fade-right"><span className='t' style={{ color: '#195A00' }}>Why </span><span className='relative '>We are the best?</span></h6>
                            <Text>
                                <p className="kalam w-full mt-5" style={{ fontSize: '20px' }} data-aos="fade-right">Choose us because we stand out as the best. Our commitment </p>
                                <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-left"> to excellence,unparalleled quality,and customer satisfaction</p>
                                <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-right">  make us a top choice. With a track record of delivering </p>
                                <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-left"> exceptional results ,we prioritize your needs, ensuring an </p>
                                <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-right">experience  that goes beyond expectations.</p>

                            </Text>
                            <div className='flex flex-row gap-4 mt-7' data-aos="fade-left">
                                <button className='kalam w-60 h-14 rounded-md text-xl  shadow-lg ' style={{ color: "#195A00" }} > <img src={Truck} className='w-10 ml-6 mt-1' alt="" /> <span className='relative top-[-30px] left-2'>Fast delivery</span> </button>
                                <button className='kalam w-60 h-14 rounded-md text-xl  shadow-lg ' style={{ color: "#195A00" }} ><img src={Timer} className='w-10 ml-6 mt-1' alt="" /> <span className='relative top-[-30px] left-2'> 24/7 services</span>  </button>
                            </div>

                            <div className='flex flex-row gap-4 mt-3' data-aos="fade-left">
                                <button className='kalam w-60 h-14 rounded-md text-xl  shadow-lg ' style={{ color: "#195A00" }} ><img src={Hamburger} className='w-10 ml-6 mt-1' alt="" /><span className='relative top-[-30px] left-2'>Fresh food</span> </button>
                                <button className='kalam w-60 h-14 rounded-md text-xl  shadow-lg ' style={{ color: "#195A00" }} ><img src={Factory} className='w-10 ml-6 mt-1' alt="" /> <span className='relative top-[-30px] left-5'>Qualiti maintain</span> </button>
                            </div>
                        </div>

                    </div>

                    <img src={hero1} alt="" className='hidden xl:block 2xl:block circle-image relative top-[70px] left-[100px]' />
                    <img src={hero3} alt="" className='hidden xl:block 2xl:block circle-image ml-11 relative top-[-340px]' />
                    <img src={hero2} alt="" className='hidden xl:block 2xl:block circle-image relative top-[-300px] right-[100px] ' />


                </div>
            </div >

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-[150px] ">

                <div className="paghar2 relative mt-8 mt-[150px]  xl:left-56  ">
                    <React.Fragment >
                        <h1 className="miniver text-2xl" data-aos="fade-down">Wednesday means <hr className='miniver inline-block w-20 h-1' /> </h1>
                        <h6 className="inter text-6xl " data-aos="fade-down"><span className='t' >Happy hours!</span></h6>
                        <h6 className="kalam text-2xl mt-3" style={{ color: '#195A00' }} data-aos="fade-down">Half-price bottles of wine and six tasty lunches for $9</h6>
                        <Text>
                            <p className="kalam w-full mt-3" style={{ fontSize: '20px' }} data-aos="fade-right">Congue, gravida. Placeat nibh sunt semper elementum anim! </p>
                            <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-left">Integer lectus debitis auctor.Nunc quisquam adipisicing leo, </p>
                            <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-right">tempora ipsam pede nostrum.Turpis tempus fusce, sed, orci </p>
                            <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-left">eligendi</p>



                        </Text>
                    </React.Fragment>
                </div>
                <div className="twoimageParte2 flex justify-center flex-col space-y-4 relative mt-16 xl:left-72" data-aos="fade-left">
                    <img src={image5} alt="" className="img " />
                    <img src={image6} alt="" className="img" />
                </div>

                <div className="flex justify-center md:col-span-2 lg:col-span-1">
                    <img src={image7} data-aos="fade-right" alt="" className="img3partetwo   mt-4 md:mt-16 lg:mt-0 hidden lg:flex xl:block 2xl:block xl:mr-9" />
                </div>

                <img src={hero1} alt="" className='hidden xl:block 2xl:block circle-image relative top-[-70px] left-[300px]' />
                <img src={hero3} alt="" className='hidden xl:block 2xl:block circle-image ml-11 relative top-[-440px] right-[400px]' />
                <img src={hero2} alt="" className='hidden xl:block 2xl:block circle-image relative top-[-100px] left-[400px] ' />


            </div>


            <div className='flex miniver kalam justify-center mt-48  text-6xl inter'>
                Last Blogs & News
            </div>
            <div className="container flex justify-center  ">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
                    {last && last.length > 0 ? (
                        last.map((item, index) => (
                            <div key={index} className="w-full md:w-80 bg-white shadow rounded mt-2 mb-12 hover:shadow-2xl hover:duration-700"
                                data-aos="zoom-up"
                            >
                                <div
                                    className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(http://127.0.0.1:8000/storage/product/image/${item.image})`,
                                    }}
                                    onClick={() => { Navigate(`/details/${item.id}`) }}
                                >
                                    <div onClick={() => { Navigate(`/details/${item.id}`) }}>
                                        <span className="kalam uppercase text-xs bg-green-50 p-1 border-green-500 border rounded text-green-700 font-medium select-none">
                                            available
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4 flex flex-col items-center ">
                                    {/* <p onClick={() => { Navigate(`/details/${item.id}`) }} className="text-gray-400 font-light text-xs text-center">{item.category}</p> */}
                                    <h1 onClick={() => { Navigate(`/details/${item.id}`) }} className="text-gray-800 text-center mt-1 kalam">{item.name}</h1>
                                    <p onClick={() => { Navigate(`/details/${item.id}`) }} className="text-center text-gray-800 mt-1 kalam">{`${item.prix}`} MAD</p>
                                    <button className="py-2 px-4 bg-green-800 text-white rounded hover:bg-green-600 active:bg-green-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
                                        onClick={() => handleSubmitLast(item)}

                                    >
                                        Add to order
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 ml-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products available.</p>
                    )}
                </div>
            </div>


            <div className="container mx-auto mt-44">
                <div className="flex justify-center">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-32'>
                        <div>
                            <div className="paghar2 relative      ">
                                <React.Fragment >
                                    <h1 className="miniver text-2xl" data-aos="fade-down">Testimonials <hr className='miniver inline-block w-20 h-1' /> </h1>
                                    <h6 className="inter text-6xl " data-aos="fade-down"><span className='t' >Customer Review</span></h6>
                                    <img src={Quotes} alt="" />
                                    <Text>
                                        <p className="kalam w-full mt-3" style={{ fontSize: '20px' }} data-aos="fade-right">At <span>Voopa Food</span>, healthy dining is an art form. Their menu,filled with </p>
                                        <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-left">vibrant and locally-sourced ingredients,transforms each meal into</p>
                                        <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-right"> a flavorful and nourishing delight. From colorful salads to protein-packed</p>
                                        <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-left">entrees, every bite at <span>Voopa Food</span> is a celebration of well-being.</p>
                                        <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-right">A must-try for those who appreciate a perfect balance of taste and health!</p>



                                    </Text>
                                </React.Fragment>
                            </div>
                        </div>
                        <div>
                            <img src={pay} className='max-w-[70vh]' alt="" data-aos="fade-left" />
                        </div>
                    </div>
                </div>
                <img src={hero1} alt="" className='hidden xl:block 2xl:block circle-image relative top-[70px] left-[100px]' />
                <img src={hero3} alt="" className='hidden xl:block 2xl:block circle-image ml-11 relative top-[-340px]' />
                <img src={hero2} alt="" className='hidden xl:block 2xl:block circle-image relative top-[-300px] right-[100px] ' />

            </div>
            {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
        </>
    )
}




const Text = styled.div`


                p {
                    background: linear-gradient(to right,  #195A00 50%, black 50%);
                background-size: 200% 100%;
                background-position-x: 100%;
                color: transparent;
                background-clip: text;
                -webkit-background-clip: text;
                // margin-left: 50px;
                // margin-top: 20px;
                // margin-bottom: -6px;
                user-select: none;
                line-height:1.5

  }
                `;




















