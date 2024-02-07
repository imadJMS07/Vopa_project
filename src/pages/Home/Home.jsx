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
    const url = "https://api.vopa.ma";
    const [category, setCategory] = useState([]);
    const [last, setLast] = useState([]);

    useEffect(() => {
        axios.get(`${url}/api/categories`)
            .then(response => {
                console.log(response.data)
                setCategory(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        axios.get(`${url}/api/products`)
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
        slidesToShow: 3,  // Set initial slidesToShow for desktop
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000, // Tablet breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600, // Mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };




    // useEffect(() => {
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // }, []);

    return (
        <>

            {/* <div className='container'> */}
            <div className="mt-24 mb-96 gridHome flex flex-col-reverse">
                <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-4'>

                    <div className='space-y-5 relative top-80 mt-16 sm:mt-48 md:mt-60 md:ml-48 lg:ml-0 xl:ml-0 2xl:ml-0 lg:mt-0  xl:mt-0 2xl:mt-0 ml-5  order-2 md:order-2  lg:order-1 xl:order-1 2xl:order-1   lg:left-10 lg:top-10 xl:left-16 xl:top-12 2xl:left-36 2xl:top-20 '>
                        <p className='miniver' style={{}}>
                            Healthy & Testy Food <hr className='ml-6 w-9 inline-block' />
                        </p>
                        <p className='inter text-6xl  sm:text-6xl md:text-6xl lg:text-4xl xl:text-6xl 2xl:text-6xl opacity-[0.7]' >
                            Enjoy Healthy Life <br /> & Testy Food. <img src={Stars} className='inline-block' alt="" />
                        </p>
                        <p className='kalam w-[350px]'>
                            Indulge in a life of wellness with the perfect fusion of health and tasty delights. <br /> Enjoy a healthy life and delicious food, making every moment a celebration of well-being
                        </p>

                        <div className='buttonHome flex flex-row  gap-5'>
                            <button type="button" className=" kalamButton w-44  h-11  text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 hover:shadow-2xl duration-700 hover:duration-700">
                                <a href="https://info-vopa.com/">

                                    Show More
                                </a>

                            </button>
                            <button type="button" className="kalam border-green-800 border-[1.5px] text-green-800 w-44  h-11  text-[17px] placeholder-gray-800 mt-3 rounded-md  hover:shadow-2xl duration-700 hover:duration-700">
                                <Link to='/reservastion'>Reserve Now</Link>
                            </button>

                        </div>
                    </div>

                    <div className="relative order-1  ml-0  sm:ml-0 md:ml-36 lg:ml-0 xl:ml-0">
                        <img src={Bg} alt="" className="absolute inset-0  object-cover md:min-w-[60vh]" />
                        <img src={Pic_2} className='circle-image-pic2 w-[300px] md:w-[50vh] md:mt-44  lg:w-[55vh] xl:w-[50vh] 2xl:w-[60vh] xl:ml-28 xl:mt-24 2xl:max-w-[60vh] 2xl:ml-28 2xl:mt-24 absolute top-0 left-0 ' alt="" />
                    </div>

                </div>
            </div>


            <div
                className='welcom '
                style={{
                    backgroundImage: `url(${bgWelcome})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundPepeat: "no-repeat",
                }}
            >
                <div className="container mx-auto mt-36 text-center md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl ">
                    <div className='h-[550px] sm:h-[680px] flex  flex-col space-y-8'>
                        <div className='flex justify-center mx-auto flex-col  '>
                            <p className='miniver text-6xl mt-32 flex justify-center '>Welcome</p>

                            <Text>
                                <p className='kalam textKlam text-[25px] w-[450px] sm:w-[500px] md:w-[500px] lg:w-[1000px] xl:w-[1000px] 2xl:w-[1300px]  md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl mt-6'>Discover healthy and delicious cuisine at VOPA in Tangier, favoring freshness and diversity. Our balanced menu offers unique dishes for all tastes. With quality ingredients, our passionate team guarantees you an exceptional culinary experience, combining health and pleasure. Join us in redefining your diet at VOPA.</p>
                            </Text>
                            <div className="flex justify-center mt-12">
                                <button type="button" className=" kalamButton w-44  h-11  text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 ">Show More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className="container mx-auto mb-10 mt-4 md:mt-20 lg:mt-32 xl:mt-44">
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8 md:gap-32">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 space-x-4 ">
                            <div className=''>
                                <img src={image3} alt="" data-aos="fade-up" className="max-w-[40vh] md:max-w-[45vh] md:min-h-[60vh] lg:max-w-[45vh] lg:min-h-[60vh] xl:max-w-[40vh] xl:min-h-[40vh] 2xl:max-w-[40vh] 2xl:min-h-[40vh] bg-cover md:ml-[100px] lg:ml-[15px] xl:ml-[5px] 2xl:ml-[100px] mt-4 md:mt-16 lg:mt-0 hidden xl:block 2xl:block min-h-[65vh]" />
                            </div>
                            <div className='space-y-5 flex flex-col justify-center items-center xl:mt-16 2xl:mt-16 '>
                                <img src={image2} alt="" className="hidden xl:block 2xl:block max-w-[40vh] min-h-[40vh] lg:max-w-[43vh] lg:min-h-[60vh] xl:max-w-[40vh] xl:min-h-[40vh] 2xl:max-w-[40vh] 2xl:min-h-[40vh] bg-cover " style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} data-aos="fade-up" />
                                <img src={image4} alt="" className="max-w-[40vh] min-h-[40vh] md:max-w-[45vh] md:min-h-[60vh] lg:max-w-[43vh] lg:min-h-[60vh] xl:max-w-[40vh] xl:min-h-[40vh] 2xl:max-w-[40vh] 2xl:min-h-[40vh] lg:mr-36 xl:mr-0 2xl:mr-0 bg-cover " style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} data-aos="fade-up" />
                            </div>
                        </div>

                        <div data-aos="fade-up" className="xl:mt-20 2xl:mt-16 relative md:right-[-50px] lg:right-[35px] lg:top-[0px] 2xl:top-20">
                            <React.Fragment >
                                <h1 className="miniver text-2xl" >Healthy Food <hr className='miniver inline-block w-20 h-1' /> </h1>
                                <h6 className="inter text-4xl" ><span className='' style={{ color: '#195A00' }}>Food </span><span className='relative '>is an important</span></h6>
                                <h6 className="inter text-4xl" ><span className='' style={{ color: '#195A00' }}>part of a balanced  </span><span className='relative '>Diet</span></h6>
                                <Text>
                                    <p className="kalam w-[365px] mx-auto md:w-[600px] lg:w-[600px] xl:w-[600px] 2xl:w-[600px] mt-5 text-[20px]"  >Maintaining a well-balanced diet is not only paramount for optimal physical health, as it furnishes the body with indispensable nutrients vital for the seamless functioning of bodily processes, but it also transcends mere physiological advantages. Food encapsulates a rich tapestry of cultural and social significance, weaving together diverse traditions, customs, and communal bonds. Beyond the realm of sustenance, it becomes a conduit for shared experiences, fostering connections and contributing significantly to the cultivation of a harmonious and gratifying lifestyle.</p>
                                </Text>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex  flex-col items-center  mx-auto mt-32" data-aos="fade-up">
                <p className='flex justify-center text-5xl miniver '  >Food Catagory</p>
                <Text>
                    <p className='flex justify-center  w-[269px] md:w-[100vh] lg:w-[130vh] xl:w-[160vh] 2xl:w-[160vh] kalam mt-5 text-xl text-center'>In the realm of cuisine, 'Food Category' helps classify and organize diverse foods based on shared characteristics.  <br className='hidden lg:block xl:block 2xl:block' /> Whether it's fruits,  vegetables, dairy, or meats, this concept simplifies navigating <br className='hidden lg:block xl:block 2xl:block' /> the rich world of flavors and textures.</p>
                </Text>
            </div >

            <div className='w-3/4 m-auto'>
                <div className="mt-20 space-x-9" data-aos="zoom-up">
                    <Slider {...settings}>
                        {category.map((d) => (
                            <div className="card" key={d.id}>
                                <div className="bg-white h-[450px] text-black rounded-xl border-2 hover:shadow-2xl rounded-t-xl hover:duration-700">
                                    <div className='h-72 bg-green-800 flex justify-center items-center rounded-t-xl'>
                                        <img src={`${url}/storage/product/image/${d.image}`} alt="" className="h-72 w-[377px] rounded-t-xl" style={{ objectFit: 'cover' }} />
                                    </div>

                                    <div className="flex flex-col items-center justify-center gap-4 p-4">
                                        <p className="text-xl font-semibold kalam text-green-800">{d.name}</p>
                                        <Link to={`/menu/${d.id}`} className='bg-green-800 text-white text-lg px-6 py-1 rounded-sm text-white-A700'>View Menu</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <img src={hero3} alt="" className='hidden xl:block 2xl:block circle-image mr-20 relative top-[-40px]' />

                <img src={hero2} alt="" className='hidden xl:block 2xl:block circle-image relative top-[100px] left-[900px]' />
            </div>

            <div className="container mx-auto mt-32">
                <div className='grid grid-cols-1 md:grid-cols-2 '>

                    <div data-aos="fade-up" className='flex justify-center items-center flex-col  '>
                        <div>
                            <img src={Chaf} alt="" className='max-w-[46vh]' />
                            <img src={imm2} className=' hidden lg:block xl:block 2xl:block relative max-w-[45vh md:max-w-[75vh] left-44 top-[-53vh] lg:left-20 xl:left-44 2xl:left-44' alt="" />
                        </div >

                    </div >

                    <div className='chosse relative mx-auto  mt-5   xl:mt-20 ml-7 md:ml-0 md:left-[25vh] md:top-[0vh] lg:top-[-0vh] lg:left-[10vh] xl:top-[0vh] xl:left-[7vh]'>
                        <h1 className="miniver text-2xl" >Why choose us <hr className='miniver inline-block w-20 h-1' /> </h1>
                        <h6 className="inter text-4xl" ><span className='t' style={{ color: '#195A00' }}>Why </span><span className='relative '>We are the best?</span></h6>
                        <Text>
                            <p className="kalam w-[335px] md:w-[70vh] lg:w-[70vh]  mt-5" style={{ fontSize: '20px' }} >Choose us because we stand out as the best. Our commitment to excellence,unparalleled quality,and customer satisfaction make us a top choice. With a track record of delivering exceptional results ,we prioritize your needs, ensuring an experience  that goes beyond expectations.</p>
                        </Text>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6">
                            <button className='kalam w-80 sm:w-80 md:w-80 h-14 rounded-md text-xl  shadow-lg ' style={{ color: "#195A00" }} > <img src={Truck} className='w-10  mt-1' alt="" /> <span className='relative top-[-30px]  md:left-2 '>Fast delivery</span> </button>
                            <button className='kalam w-80 md:w-60 h-14 rounded-md text-xl  shadow-lg ' style={{ color: "#195A00" }} ><img src={Timer} className='w-10  mt-1' alt="" /> <span className='relative top-[-30px]  md:left-2'> 24/7 services</span>  </button>
                            <button className='kalam w-80 md:w-60 h-14 rounded-md text-xl  shadow-lg ' style={{ color: "#195A00" }} ><img src={Hamburger} className='w-10  mt-1' alt="" /><span className='relative top-[-30px] lmd:left-2'>Fresh food</span> </button>
                            <button className='kalam w-80 md:w-60 h-14 rounded-md text-xl  shadow-lg ' style={{ color: "#195A00" }} ><img src={Factory} className='w-10  mt-1' alt="" /> <span className='relative top-[-30px]  md:left-5'>Qualiti maintain</span> </button>
                        </div>

                    </div >

                    <img src={hero1} alt="" className='hidden xl:block 2xl:block circle-image relative top-[-500px] left-[100px]' />
                    <img src={hero2} alt="" className='hidden xl:block 2xl:block circle-image relative top-[-430px] right-[-100px] ' />
                </div >
            </div >

            <div div className="container mx-auto mb-10 md:mt-20 mt-[50px] lg:mt-[-300px] xl:mt-[-300px] 2xl:mt-[-180px]" >
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 xl:gap-9">
                        <div data-aos="zoom-up" className="2xl:order-2 xl:order-2  md:order-1 lg:order-2 ">
                            <img src={pay} className="mx-auto max-w-[45vh] sm:max-w-[64vh] md:max-w-[64.5vh] lg:max-w-[68.5vh] xl:max-w-[68.5vh] 2xl:max-w-[68.5vh]" alt="" />
                        </div>
                        <div data-aos="zoom-up" className="2xl:order-1 xl:order-1  md:order-2 lg:order-1">
                            <React.Fragment>
                                <h1 className="mx-auto miniver text-2xl ml-2.5 sm:ml-5 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0">Testimonials <hr className="miniver inline-block w-20 h-1" /></h1>
                                <h6 className=" inter text-4xl md:text-5xl lg:text-4xl xl:text-6xl 2xl:text-6xl ml-2.5 sm:ml-5 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0"><span className='t'>Customer Review</span></h6>
                                <img src={Quotes} alt="" className='ml-2.5 sm:ml-5 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0' />
                                <Text>
                                    <p className="mx-auto kalam mt-3 w-[370px] sm:w-[600px] md:w-[610px] lg:w-[550px] xl:w-[610px] 2xl:w-[600px]" style={{ fontSize: '20px' }}>
                                        At <span>Voopa Food</span>, healthy dining is an art form. Their menu, filled with vibrant and locally-sourced ingredients, transforms each meal into a flavorful and nourishing delight. From colorful salads to protein-packed entrees, every bite at <span>Voopa Food</span> is a celebration of well-being. A must-try for those who appreciate a perfect balance of taste and health!
                                    </p>
                                </Text>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
                <img src={hero1} alt="" className='hidden xl:block 2xl:block circle-image relative top-[70px] left-[00px]' />
                <img src={hero3} alt="" className='hidden xl:block 2xl:block circle-image ml-11 relative top-[-340px]' />
            </div >
            {/* </div > */}



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
            user-select: none;
            line-height:1.5
}
            `;




















