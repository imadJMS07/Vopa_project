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

    // useEffect(() => {
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // }, []);

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
            <Container>
                <div className="bg-cover bg-center mt-[100px] bg-image">
                    <div className="grid justify-items-center relative top-24 ">
                        <p className="  about font-bold  text-9xl sm:text-1xl ">About Us </p>
                    </div>
                    <img src={hero1} alt="" className='circle-image ml-11' data-aos="fade-right" />
                    <img src={hero2} alt="" className='circle-image ml-96 mt-10' data-aos="fade-left" />

                    <div className='flex justify-end mr-11' data-aos="fade-right">

                        <img src={hero3} alt="" className='circle-image ml-11' data-aos="fade-right" />
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-[90px] flex justify-center">
                    <div className="space-x-2 flex justify-center md:col-span-2 lg:col-span-1 " data-aos="fade-left" >
                        <img src={image3} alt="" className="img3 ml-4 md:ml-[180px] mt-4 md:mt-16 lg:mt-0 hidden lg:flex xl:block 2xl:block" />
                    </div>
                    <div className="twoimage flex justify-center flex-col space-y-4 mt-8 md:mt-[60px]" data-aos="fade-up" >
                        <img src={image2} alt="" className="img" data-aos="fade-left" />
                        <img src={image4} alt="" className="img" data-aos="fade-up" />
                    </div>
                    <div className="paghar relative mt-8 md:mt-[100px] lg:right-[150px]">
                        {teams.map((item, index) => (
                            <React.Fragment key={index}>
                                <h1 className="miniver text-2xl">{item.title} <hr className='miniver inline-block w-20 h-1' /> </h1>
                                <h6 className="inter text-4xl" data-aos="fade-right"><span className='t' style={{ color: '#195A00' }}>{item.let1}</span><span className='relative '>{item.grand1}</span></h6>
                                <h6 className="inter text-4xl" style={{ color: '#195A00' }} data-aos="fade-right">{item.grand2}</h6>
                                <h6 className="inter text-4xl" data-aos="fade-right">{item.grand3} <span className='tracking-tight relative right-2' style={{ color: '#195A00' }} data-aos="fade-right">{item.let2}</span></h6>
                                <Text>
                                    <p className="kalam w-full mt-5" style={{ fontSize: '20px' }} data-aos="fade-right">{item.pharagraph1}</p>
                                    <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-left">{item.pharagraph2}</p>
                                    <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-right">{item.pharagraph3}</p>
                                    <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-left">{item.pharagraph4}</p>
                                    <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-right">{item.pharagraph5}</p>
                                    <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-left">{item.pharagraph6}</p>
                                    <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-right">{item.pharagraph7}</p>
                                    <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-left">{item.pharagraph8}</p>
                                    <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-right">{item.pharagraph9}</p>


                                </Text>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-[90px] ">

                    <div className="paghar2 relative mt-8 mt-[150px]  xl:left-56  ">
                        {clients.map((item, index) => (
                            <React.Fragment key={index}>
                                <h1 className="miniver text-2xl" data-aos="fade-down">{item.title} <hr className='miniver inline-block w-20 h-1' /> </h1>
                                <h6 className="inter text-4xl " data-aos="fade-down"><span className='t' style={{ color: '#195A00' }}>{item.let1}</span><span className='relative '>{item.grand1}</span></h6>
                                <h6 className="inter text-4xl" style={{ color: '#195A00' }} data-aos="fade-down">{item.grand2}</h6>
                                <h6 className="inter text-4xl" data-aos="fade-down">{item.grand3} <span className='tracking-tight relative right-2' style={{ color: '#195A00' }}>{item.let2}</span></h6>
                                <Text>
                                    <p className="kalam w-full mt-9" style={{ fontSize: '20px' }} data-aos="fade-right">{item.pharagraph1}</p>
                                    <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-left">{item.pharagraph2}</p>
                                    <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-right">{item.pharagraph3}</p>
                                    <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-left">{item.pharagraph4}</p>
                                    <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-right">{item.pharagraph5}</p>

                                </Text>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="twoimageParte2 flex justify-center flex-col space-y-4 relative mt-16 xl:left-72" data-aos="fade-left">
                        <img src={image5} alt="" className="img " />
                        <img src={image6} alt="" className="img" />
                    </div>

                    <div className="flex justify-center md:col-span-2 lg:col-span-1">
                        <img src={image7} data-aos="fade-right" alt="" className="img3partetwo   mt-4 md:mt-16 lg:mt-0 hidden lg:flex xl:block 2xl:block xl:mr-9" />
                    </div>

                </div>




                {/* ******************** */}

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 space-x-12 flex justify-center items-center  h-screen lg:mt-[-130px] xl:mt-[-130px] 2xl:mt-[-130px]">
                    <div className="flex flex-col justify-center items-center text-center">
                        {values.map((item, index) => (
                            <React.Fragment key={index}>
                                <h1 className="Great text-4xl relative top-9" data-aos="fade-up">{item.title}</h1>
                                <Text className="mt-10 text-center">
                                    <p className='kalam text-2xl font-bold ' data-aos="fade-right" >{item.pharagraph1}</p>
                                    <p className='kalam text-2xl font-bold ' data-aos="fade-left" >{item.pharagraph2}</p>
                                    <p className='kalam text-2xl font-bold ' data-aos="fade-right" >{item.pharagraph3}</p>
                                    <p className='kalam text-2xl font-bold ' data-aos="fade-left" >{item.pharagraph4}</p>
                                    <p className='kalam text-2xl font-bold ' data-aos="fade-left" >{item.pharagraph5}</p>
                                </Text>

                            </React.Fragment>
                        ))}
                    </div>

                    <div className="vison flex flex-col justify-center items-center text-center mt-12 md:mt-0 xl:relative top-5">
                        {vision.map((item, index) => (
                            <React.Fragment key={index}>
                                <h1 className="Great  text-4xl" data-aos="fade-up">{item.title}</h1>
                                <Text className="text-center">
                                    <p className='kalam text-2xl font-bold' data-aos="fade-right">{item.pharagraph1}</p>
                                    <p className='kalam text-2xl font-bold' data-aos="fade-left">{item.pharagraph2}</p>
                                    <p className='kalam text-2xl font-bold' data-aos="fade-right">{item.pharagraph3}</p>
                                    <p className='kalam text-2xl font-bold' data-aos="fade-left">{item.pharagraph4}</p>
                                    <p className='kalam text-2xl font-bold' data-aos="fade-right">{item.pharagraph5}</p>
                                </Text>

                            </React.Fragment>
                        ))}
                    </div>

                    <img src={hero2} alt="" className='hidden xl:block circle-image absolute  left-[700px]   opacity-[0.5]' />
                    <img src={hero2} alt="" className='hidden xl:block circle-image absolute   left-[1400px]  opacity-[0.5]' />
                    <img src={hero3} alt="KAK" className='hidden xl:block circle-image absolute left-[1100px] top-[2360px]' />
                    <img src={hero1} alt="" className='hidden xl:block circle-image absolute left-[600px] top-[2260px] opacity-[0.5]' />
                    <img src={hero3} alt="" className='hidden xl:block circle-image absolute' />

                </div>



                {/* ******************** */}


                <div className="why container flex  flex-col  items-center mr-auto ml-auto " style={{ objectFit: 'cover' }}>
                    <p className="Great text-[45px]  font-bold opacity-[0.8]" style={{}}>Why Choose us</p>
                    <p className="kalam text-md text-center font-semibold  mr-auto ml-auto">Elevate your dining experience with us,   where health meets flavor seamlessly.</p>
                    <p className="kalam text-md font-semibold  mr-auto ml-auto">Our restaurant is your go-to for delicious, wholesome meals crafted with care to nourish and delight</p>
                    <img src={choosee1} className="mt-6" alt="" />
                    <img src={nab1} className=" absolute left-[1270px] max-w-[40vh]   2xl:block hidden" alt="" />


                </div>
                <div className="container">
                    <div className="items flex flex-row items-center justify-center  space-y-8 space-x-10">
                        <div className=" text-center  " data-aos="fade-right">
                            <img src={Student} alt="Student" className=" mx-auto mt-12" />
                            <p className="item text-xl font-semibold relative top-2 ">{student.title}</p>
                            <Text>
                                <p className="text-sm text-gray-500 relative top-3 w-[340px]">{student.pargha}</p>
                            </Text>
                        </div>
                        <div className="text-center" data-aos="fade-up">
                            <img src={Coffee} alt="Coffee" className=" mx-auto" />
                            <p className="item text-xl font-semibold relative top-2">{coffee.title}</p>
                            <Text>
                                <p className="text-sm text-gray-500 relative top-3 w-[340px]">{coffee.pargha}</p>
                            </Text>
                        </div>
                        <div className="text-center " data-aos="fade-left">
                            <img src={Person} alt="Person" className=" mx-auto mt-5" />
                            <p className="item text-xl font-semibold relative top-2">{person.title}</p>
                            <Text>
                                <p className="text-sm text-gray-500 relative top-3  w-[340px]">{person.pargha}</p>
                            </Text>
                        </div>
                    </div>
                </div>
                {/* </div> */}


                <br /><br /><br /><br /><br />
            </Container>











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