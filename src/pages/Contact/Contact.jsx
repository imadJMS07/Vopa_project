import React, { useState, useEffect, useRef } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import gsap from 'gsap';
import 'primeicons/primeicons.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';




import '../Contact/Contact.scss';
import data from "../../data/Contact.json";


import hero1 from '../../images/hero1.png';
import hero2 from '../../images/hero2.png';
import hero3 from '../../images/hero3.png';
import message1 from '../../images/message-1.png';
import message2 from '../../images/message-2.png';
import man from '../../images/man.png'

export default function Contact() {
    const { qestions, input_name, input_email, input_subject, message, button, card } = data;
    const [sendMessageToEmail, setSendMessageToEmail] = useState({ name: '', email: '', subject: '', message: '' })
    const imageRef = useRef(null);
    const secondImageRef = useRef(null);

    useEffect(() => {
        Aos.init({ duration: 2000 });
    });

    useEffect(() => {
        const image = imageRef.current;
        const secondImage = secondImageRef.current;
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(image, { opacity: 0, duration: 1, delay: 0 })
            .to(secondImage, { opacity: 1, duration: 1 }, '-=1');
        tl.to(secondImage, { opacity: 0, duration: 1, delay: 1 })
            .to(image, { opacity: 1, duration: 1 }, '-=1');
        tl.to({}, { duration: 2 });
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);


    // Get value in input vild 

    const getValue = (e) => {
        setSendMessageToEmail(preveuse => ({
            ...preveuse,
            [e.target.name]: e.target.value
        }))
    }

    // Send data in gmail
    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = '';
        const templateId = '';
        const publicKey = '';


        const templateParams = {
            from_name: sendMessage.name,
            from_email: sendMessage.email,
            from_objective: sendMessage.subject,
            from_message: sendMessage.message,

        }
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                setSendMessageToEmail({ name: '', email: '', subject: '', message: '' })

            })
            .catch((error) => {
                console.log('Error sending email : ', error)
            })



    };




    return (
        <>
            <div className="bg-cover bg-center mt-[100px] bg-image">
                <div className="grid justify-items-center relative top-24 ">
                    <p className="  about font-bold  text-9xl sm:text-1xl ">Contact </p>
                </div>
                <img src={hero1} alt="" className='circle-image ml-11' data-aos="fade-left" />
                <img src={hero2} alt="" className='circle-image ml-96 mt-10' data-aos="fade-left" />
                <div className='flex justify-end mr-11' data-aos="fade-right">
                    <img src={hero2} alt="" className='circle-image ' data-aos="fade-right" />
                    <img src={hero3} alt="" className='circle-image ml-11' data-aos="fade-left" />
                </div>

            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 space-x-12   ">
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="container ">
                        <div className=" grid grid-cols-1 gap-4 w-96 md:w-[480px] mt-10 ml-auto mr-auto bg-slate-50 rounded-sm shadow-xl p-6 xl:ml-[280px]">
                            <div className=' grid grid-cols-1 md:grid-cols-1 gap-4'>
                                <div data-aos="fade-right">
                                    <p className="kalam flex justify-start text-2xl font-bold" style={{ color: '#195A00' }}>{qestions}</p>
                                </div>
                                <div data-aos="fade-right">
                                    <p className="kalam flex justify-start text-lg">{input_name.label}</p>
                                    <input type="text" className="w-full  h-11 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600 " placeholder={input_name.placeHolder} style={{ background: "#EAEAEA" }} name="name" id="name" onChange={getValue} value={sendMessageToEmail.name} />
                                </div>
                                <div data-aos="fade-right">
                                    <p className="kalam flex justify-start text-lg">{input_email.label}</p>
                                    <input type="text" className="w-full  h-11 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600 " placeholder={input_email.placeHolder} style={{ background: "#EAEAEA" }} name="email" id="email" onChange={getValue} value={sendMessageToEmail.email} />
                                </div>
                                <div data-aos="fade-right">
                                    <p className="kalam flex justify-start text-lg">{input_subject.label}</p>
                                    <input type="text" className="w-full  h-11 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600 " placeholder={input_subject.placeHolder} style={{ background: "#EAEAEA" }} name="subject" id="subject" onChange={getValue} value={sendMessageToEmail.subject} />
                                </div>

                                <div data-aos="fade-right">
                                    <p className="kalam flex justify-start text-lg">{message.label}</p>
                                    <textarea name="message" id="message" className="w-full h-[150px] md:h-18 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600" style={{ background: "#EAEAEA" }} placeholder={message.placeHolder} onChange={getValue} value={sendMessageToEmail.message}></textarea>
                                </div>
                                <div data-aos="zoom-out">
                                    <button onClick={handleSubmit} type="button" className="kalamButton w-36  h-11  text-[17px] placeholder-gray-800 mt-3 rounded-md  focus:outline-none" name="from" id="from"  >{button.label}</button>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 space-x-12  mt-20 ">
                    <div>
                        <img
                            ref={imageRef}
                            src={message1}
                            alt="Image 1"
                            style={{ maxWidth: "60vh", height: 'auto' }}
                            className=''
                        />

                        <img
                            ref={secondImageRef}
                            src={message2}
                            alt="Image 1"
                            style={{ maxWidth: "60vh", height: 'auto' }}
                            className='md:ml-12 xl-36 lg-36 2xl-36'
                        />

                    </div>

                    <div>
                        <img src={man} alt="" className="md:ml-[-190px] md:mt-72   xl-ml-[-80px] lg-ml-[-80px] 2xl-ml-[-80px] xl-mt-56 lg-mt-56 2xl-mt-56" style={{ maxWidth: "60vh", height: 'auto' }}
                        />
                    </div>
                </div>


            </div >

            <div div class="container mr-auto ml-auto mt-36 flex justify-center " >
                <div className="mr-auto ml-auto grid grid-cols-1 md:grid-cols-3 gap-3 space-x-2 mt-20  ">

                    <div className='w-[380px]  h-[300px]  pt-12 flex justify-center items-center flex-col hover:bg-green-100  border-green-600 border-[0.5px] transition ease-in-out delay-150 xl:hover:-translate-y-1 xl:hover:scale-110  duration-700' data-aos="fade-right">
                        {/* " bg-blue-500 hover:bg-indigo-500 */}
                        <p className='kalam text-3xl relative bottom-14'>{card.phone}</p>
                        <i className="pi pi-phone  relative bottom-2" style={{ fontSize: '60px', color: '#195A00' }}></i>
                        <p>+212 7 62 18 15 92</p>
                        <p>+212 7 62 18 15 92</p>
                    </div>

                    <div className='w-[380px]  h-[300px]  pt-12 flex justify-center items-center flex-col hover:bg-green-100  border-green-600 border-[0.5px] transition ease-in-out delay-150 xl:hover:-translate-y-1 xl:hover:scale-110  duration-700' data-aos="fade-up">
                        <p className='kalam text-3xl relative bottom-14'>{card.email}</p>
                        <i className="pi pi-envelope relative bottom-2" style={{ fontSize: '60px', color: '#195A00' }}></i>
                        <p>M.benmousa@gmail.com</p>
                        <p>M.benmousa2@gmail.com</p>
                    </div>

                    <div className='w-[380px]  h-[300px] pt-12 flex justify-center items-center flex-col hover:bg-green-100  border-green-600 border-[0.5px] transition ease-in-out delay-150 xl:hover:-translate-y-1 xl:hover:scale-110  duration-700' data-aos="fade-left">
                        <p className='kalam text-3xl relative bottom-14'>{card.phone}</p>
                        <i className="pi pi-map-marker relative bottom-2" style={{ fontSize: '60px', color: '#195A00' }}></i>
                        <p>12 Park Street Road,</p>
                        <p>New York, 15668, USA</p>
                    </div>

                </div>
            </div >


            <div div class="container mr-auto ml-auto mt-36 flex justify-center " >


                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4086.0604600007455!2d-5.804263272649879!3d35.77978008465752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c7f598a3e10bd%3A0x772a4b96165ba92d!2sTanja%20Marina%20Bay!5e0!3m2!1sen!2sma!4v1702382170564!5m2!1sen!2sma"
                    width="1000"
                    height="600"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    data-aos="fade-up"></iframe>
            </div >

            <div className='mt-[-300px]'>
                <img src={hero1} alt="" className='circle-image hidden xl:block lg:block 2xl:block relative top-[-1500px] left-4 ' data-aos="fade-left" />
                <img src={hero1} alt="" className='circle-image hidden xl:block lg:block 2xl:block relative top-[-1500px] left-[85%] ' data-aos="fade-left" />

                <img src={hero2} alt="" className='circle-image hidden xl:block lg:block 2xl:block relative top-[-1230px] left-[85%]' data-aos="fade-left " />
                <img src={hero3} alt="" className='circle-image hidden xl:block lg:block 2xl:block relative top-[-1000px] left-[20%]' data-aos="fade-left " />
                <img src={hero1} alt="" className='circle-image hidden xl:block lg:block 2xl:block relative top-[-900px] left-4' data-aos="fade-left " />
                <img src={hero2} alt="" className='circle-image hidden xl:block lg:block 2xl:block relative top-[-1000px] left-[90%]' data-aos="fade-left " />
                <img src={hero3} alt="" className='circle-image hidden xl:block lg:block 2xl:block relative top-[-1300px] left-4' data-aos="fade-left " />

                <img src={hero1} alt="" className='circle-image hidden xl:block lg:block 2xl:block relative top-[-100px] left-[45%]' data-aos="fade-left " />
                <img src={hero2} alt="" className='circle-image hidden xl:block lg:block 2xl:block relative top-[-100px] left-[90%]' data-aos="fade-left " />
                <img src={hero3} alt="" className='circle-image hidden xl:block lg:block 2xl:block relative top-[-180px] left-4' data-aos="fade-left " />

            </div>












        </>
    )
}
