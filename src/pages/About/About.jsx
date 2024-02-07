import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'primeicons/primeicons.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import '../About/About.scss'
import data from '../../data/About.json'
import image1 from '../../images/Team.png'
import image2 from '../../images/img2.png'
import image3 from '../../images/img3.png'
import image4 from '../../images/img4.png'
import image5 from '../../images/img_unsplashmaqz3x8l0.png'
import image6 from '../../images/img_unsplashjpkfc5ddi.png'
import image7 from '../../images/img_unsplashfdlzbwip0am.png'
import choosee1 from '../../images/choosee1.png'
import Student from '../../images/Student.png'
import Person from '../../images/Person.png'
import Coffee from '../../images/Coffee.png'
import nab1 from '../../images/nab.png'
import nab2 from '../../images/nab2.png'
import hero1 from '../../images/hero1.png'
import hero2 from '../../images/hero2.png'
import hero3 from '../../images/hero3.png'
gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const { teams, clients, values, vision, person, student, coffee } = data
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
    return (
        <>
            <div className="bg-cover bg-center mt-[100px] bg-image">
                <div className="grid justify-items-center relative top-24 ">
                    <p className="  about font-bold  text-8xl md:text-9xl ">About Us </p>
                </div>
                <img src={hero1} alt="" className='circle-image ml-11' data-aos="fade-right" />
                <img src={hero2} alt="" className='circle-image mt-10' data-aos="fade-left" />

                <div className='flex justify-end mr-11' data-aos="fade-right">

                    <img src={hero3} alt="" className='circle-image ml-11' data-aos="fade-right" />
                </div>

            </div>

            <div className="container mx-auto mb-10 mt-4 md:mt-20 lg:mt-32 xl:mt-44">
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8 md:gap-32">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 space-x-4 ">
                            <div className=''>
                                <img src={image3} alt="" data-aos="fade-up" className="max-w-[40vh] md:max-w-[45vh] md:min-h-[60vh] lg:max-w-[45vh] lg:min-h-[60vh] xl:max-w-[40vh] xl:min-h-[40vh] 2xl:max-w-[40vh] 2xl:min-h-[40vh] bg-cover md:ml-[100px] lg:ml-[15px] xl:ml-[5px] 2xl:ml-[100px] mt-4 md:mt-16 lg:mt-0 hidden xl:block 2xl:block min-h-[65vh]" />
                            </div>
                            <div className='space-y-5 flex flex-col justify-center items-center xl:mt-16 2xl:mt-16 '>
                                <img src={image2} alt="" className="hidden xl:block 2xl:block max-w-[40vh] min-h-[40vh] lg:max-w-[43vh] lg:min-h-[60vh] xl:max-w-[40vh] xl:min-h-[40vh] 2xl:max-w-[40vh] 2xl:min-h-[40vh] bg-cover " style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} data-aos="fade-left" />
                                <img src={image4} alt="" className="max-w-[40vh] min-h-[40vh] md:max-w-[45vh] md:min-h-[60vh] lg:max-w-[43vh] lg:min-h-[60vh] xl:max-w-[40vh] xl:min-h-[40vh] 2xl:max-w-[40vh] 2xl:min-h-[40vh] lg:mr-36 xl:mr-0 2xl:mr-0 bg-cover " style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} data-aos="fade-up" />
                            </div>
                        </div>

                        <div data-aos="fade-up" className=" xl:mt-20 2xl:mt-16 relative md:right-[-50px] lg:right-[35px] lg:top-[0px] 2xl:top-20">
                            <React.Fragment >
                                <h1 className="miniver text-2xl" >Healthy Food <hr className='miniver inline-block w-20 h-1' /> </h1>
                                <h6 className="inter text-4xl" ><span className='' style={{ color: '#195A00' }}>Food </span><span className='relative '>is an important</span></h6>
                                <h6 className="inter text-4xl" ><span className='' style={{ color: '#195A00' }}>part of a balanced  </span><span className='relative '>Diet</span></h6>
                                <Text>
                                    <p className="kalam w-[385px] md:w-[600px] lg:w-[600px] xl:w-[600px] 2xl:w-[600px] mt-5 text-[20px]"  >Maintaining a well-balanced diet is not only paramount for optimal physical health, as it furnishes the body with indispensable nutrients vital for the seamless functioning of bodily processes, but it also transcends mere physiological advantages. Food encapsulates a rich tapestry of cultural and social significance, weaving together diverse traditions, customs, and communal bonds. Beyond the realm of sustenance, it becomes a conduit for shared experiences, fostering connections and contributing significantly to the cultivation of a harmonious and gratifying lifestyle.</p>
                                </Text>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mb-10 mt-4 md:mt-20 lg:mt-32 ">
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">

                        <div className="order-1 md:order-1 lg:order-2 xl:order-2 2xl:order-2 grid grid-cols-1 md:grid-cols-2 gap-8  space-x-4 ">
                            <div className='order-2'>
                                <img src={image7} alt="" data-aos="fade-up" className="max-w-[40vh] md:max-w-[45vh] md:min-h-[60vh] lg:max-w-[45vh] lg:min-h-[60vh] xl:max-w-[40vh] xl:min-h-[40vh] 2xl:max-w-[40vh] 2xl:min-h-[40vh] bg-cover  cmt-4 md:mt-16 lg:mt-0 hidden xl:block 2xl:block min-h-[65vh]" />
                            </div>
                            <div className='order-1 space-y-5 flex flex-col justify-center items-center xl:mt-16 2xl:mt-16 '>
                                <img src={image5} alt="" className="hidden xl:block 2xl:block max-w-[40vh] min-h-[40vh] lg:max-w-[43vh] lg:min-h-[60vh] xl:max-w-[40vh] xl:min-h-[40vh] 2xl:max-w-[40vh] 2xl:min-h-[40vh] bg-cover " style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} data-aos="fade-left" />
                                <img src={image6} alt="" data-aos="fade-up" className="max-w-[40vh] min-h-[40vh] md:max-w-[45vh] md:min-h-[60vh] lg:max-w-[43vh] lg:min-h-[60vh] xl:max-w-[40vh] xl:min-h-[40vh] 2xl:max-w-[40vh] 2xl:min-h-[40vh] lg:mr-36 xl:mr-0 2xl:mr-0 bg-cover " style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
                            </div>
                        </div>

                        <div data-aos="fade-up" className="  order-2 md:order-2 lg:order-1 xl:order-1 2xl:order-1 flex  flex-col xl:mt-20 2xl:mt-16 relative ml-10 md:right-[-30px] lg:right-[15px] lg:top-[0px] 2xl:top-20">
                            {clients.map((item, index) => (
                                <React.Fragment >
                                    <h1 className="miniver text-2xl" >{item.title}<hr className='miniver inline-block w-20 h-1' /> </h1>
                                    <h6 className="inter text-4xl" ><span className='' style={{ color: '#195A00' }}>{item.let1}</span><span className='relative '>{item.grand1}</span></h6>
                                    <h6 className="inter text-4xl" style={{ color: '#195A00' }}>{item.grand2}</h6>
                                    <h6 className="inter text-4xl" >{item.grand3}<span className='tracking-tight relative right-2' style={{ color: '#195A00' }}>{item.let2}</span></h6>
                                    <Text>
                                        <p className="kalam w-[350px] md:w-[600px] lg:w-[600px] xl:w-[600px] 2xl:w-[600px] mt-5 text-[20px]"  >{item.pharagraph1}{item.pharagraph2}{item.pharagraph3}{item.pharagraph4}{item.pharagraph5}</p>
                                    </Text>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="why container flex  flex-col  items-center mr-auto ml-auto xl:mt-36 2xl:mt-36" style={{ objectFit: 'cover' }}>
                <p className="Great text-[45px]  font-bold opacity-[0.8]" style={{}}>Why Choose us</p>
                <p className="kalam text-md text-center font-semibold  mr-auto ml-auto">Elevate your dining experience with us,   where health meets flavor seamlessly.Our restaurant is your go-to for delicious, wholesome meals crafted with care to nourish and delight</p>
                <p className="kalam text-md font-semibold  mr-auto ml-auto"></p>
                <img src={choosee1} className="max-w-[45vh] md:max-w-[95vh] lg:max-w-[95vh] xl:max-w-[95vh] 2xl:max-w-[165vh] mt-6" alt="" />
                <img src={nab1} className=" absolute left-[1260px] max-w-[40vh]   2xl:block hidden" alt="" />
            </div >

            <div className="container">
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-1  md:grid-cols-3 space-y-8 gap-16">
                        <div className="text-center   mt-6" data-aos="fade-up">
                            <img src={Student} alt="Student" className=" mx-auto " />
                            <p className="item text-xl font-semibold relative top-2 ">{student.title}</p>
                            <Text>
                                <p className="text-lg mx-auto kalam text-gray-500 relative top-3 w-[340px]">{student.pargha}</p>
                            </Text>
                        </div>

                        <div className="text-center" data-aos="fade-up">
                            <img src={Coffee} alt="Coffee" className=" mx-auto" />
                            <p className="item text-xl font-semibold relative top-2">{coffee.title}</p>
                            <Text>
                                <p className="text-lg mx-auto kalam text-gray-500 relative top-3 w-[340px]">{coffee.pargha}</p>
                            </Text>
                        </div>

                        <div className="text-center " data-aos="fade-up">
                            <img src={Person} alt="Person" className=" mx-auto " />
                            <p className="item text-xl font-semibold relative top-2">{person.title}</p>
                            <Text>
                                <p className="text-lg mx-auto text-gray-500 relative top-3  w-[340px] kalam">{person.pargha}</p>
                            </Text>
                        </div >
                    </div >
                </div >

            </div >

            {/* </div> */}
            <br /><br /><br /><br /><br />
        </>
    )
}
;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Hide the scrollbars */
                    `;

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