import React, { useState, useEffect } from 'react'
import data from '../../data/Reservation.json'
import 'aos/dist/aos.css';
import Aos from 'aos';



import hero1 from '../../images/hero1.png'
import hero2 from '../../images/hero2.png'
import hero3 from '../../images/hero3.png'


import '../Reservation/Reservation.scss'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Reservation() {
    const url = 'http://127.0.0.1:8000';

    const [cancelReservation, setCancelReservation] = useState({ numbervoice: '', emailvoice: '', telvoice: '' });
    const { time, input_name, input_email, input_contact, input_date, input_form, input_To, input_guests, input_info, button, concellation, cancel, invoice_number, message, phone } = data;

    const [showModal, setShowModal] = useState(false);

    const [reservation, setReservation] = useState({ name: '', email: '', phone: '', date: '', from: '', to: '', guests: '', information: 'undefined' });
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (reservation.name !== '' && reservation.email !== '' && reservation.phone !== '' && reservation.date !== '' && reservation.from !== '' && reservation.to !== '' && reservation.guests !== '') {

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "All field is required",
            });
        }

        if (new Date(`2000-01-01T${reservation.to}`) <= new Date(`2000-01-01T${reservation.from}`)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "SThe 'to' time must be greater than 'from' time.",
            });

            return;
        }

        const formData = new FormData();
        formData.append('name', reservation.name);
        formData.append('email', reservation.email);
        formData.append('phone', reservation.phone);
        formData.append('date', reservation.date);
        formData.append('from', reservation.from);
        formData.append('to', reservation.to);
        formData.append('guests', reservation.guests);
        formData.append('information', reservation.information);

        try {
            await axios.post(`${url}/api/reservations`, formData);
            Swal.fire({
                icon: "success",
                title: "Reservations added successfully!",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error('Error adding reservations:', error);
        }
    };





    const toggleModal = () => {
        setShowModal(!showModal);
    };

    //  get value in input field
    const getValue = (e) => {
        setReservation(preveuse => ({
            ...preveuse,
            [e.target.name]: e.target.value
        }))
    }

    //  get value in input for cancel reservation
    const getValueForCancel = (e) => {
        setCancelReservation(preveuse => ({
            ...preveuse,
            [e.target.name]: e.target.value
        }))
    }


    useEffect(() => {
        Aos.init({ duration: 2000 });
    });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    console.log(reservation.from)
    return (
        <>
            <div className="bg-cover bg-center mt-[100px] bg-image">
                <div className="grid justify-items-center relative top-24 ">
                    <p className="  about font-bold  text-9xl sm:text-1xl ">Reservation </p>
                </div>
                <img src={hero1} alt="" className='circle-image ml-11' data-aos="fade-left" />
                <img src={hero2} alt="" className='circle-image ml-96 mt-10' data-aos="fade-left" />
                <div className='flex justify-end mr-11' data-aos="fade-right">
                    <img src={hero2} alt="" className='circle-image ' data-aos="fade-right" />
                    <img src={hero3} alt="" className='circle-image ml-11' data-aos="fade-left" />
                </div>

            </div>
            <div className="grid grid-cols-1 gap-4  h-10 w-2/3 mt-10  mr-auto ml-auto" style={{ background: "#D7FFE3" }} data-aos="fade-up">
                <div className='flex justify-center mt-auto mb-auto'>
                    <p className="kalam">{time}</p>
                </div>

            </div>

            <div className="container ">
                <div className=" grid grid-cols-1 gap-4 w-full md:w-2/3 mt-10 ml-auto mr-auto bg-slate-50 rounded-sm shadow-xl p-6 xl:ml-[280px]">
                    {/* Name and Email */}
                    <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div data-aos="fade-right">
                            <p className="kalam">{input_name.label}</p>
                            <input type="text" className="w-full  h-11 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600 " placeholder={input_name.placeHolder} style={{ background: "#EAEAEA" }} name="name" id="name" onChange={getValue} />
                        </div>

                        <div data-aos="fade-left">
                            <p className="kalam">{input_email.label}</p>
                            <input type="email" className="w-full  h-11 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600" placeholder={input_email.placeHolder} style={{ background: "#EAEAEA" }} name="email" id="email" onChange={getValue} />
                        </div>
                    </div>

                    {/* Contact and Date */}
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-4'>
                        <div data-aos="fade-right">
                            <p className="kalam" >{input_contact.label}</p>
                            <input type="tel" className="w-full  h-11 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600" placeholder={input_contact.placeHolder} style={{ background: "#EAEAEA" }} name="phone" id="phone" onChange={getValue} />
                        </div>

                        <div data-aos="fade-left">
                            <p className="kalam">{input_date.label}</p>
                            <input type="date" className="w-full  h-11 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600" placeholder={input_date.placeHolder} style={{ background: "#EAEAEA" }} name="date" id="date" onChange={getValue} />
                        </div>
                    </div>

                    {/* From and To */}

                    <div className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-4'>
                        <div data-aos="fade-right">
                            <p className="kalam">{input_form.label}</p>
                            <input type="time" className="w-full  h-11 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600" style={{ background: "#EAEAEA" }} name="from" id="from" onChange={getValue} />
                        </div>

                        <div data-aos="fade-left">
                            <p className="kalam">{input_To.label}</p>
                            <input type="time" className="w-full  h-11 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600" style={{ background: "#EAEAEA" }} name="to" id="to" onChange={getValue} />
                        </div>
                    </div>

                    {/* Guests */}
                    <div className='grid grid-cols-1 mt-3'>
                        <div data-aos="fade-up">
                            <p className="kalam">{input_guests.label}</p>
                            <select className="w-full h-14 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600" style={{ background: "#EAEAEA" }} name="guests" id="guests" onChange={getValue}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </div>

                    {/* Info */}
                    <div className='grid grid-cols-1 mt-3'>
                        <div data-aos="fade-up">
                            <p className="kalam">{input_info.label}</p>
                            <textarea name="information" id="information" className="w-full h-[150px] md:h-18 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600" style={{ background: "#EAEAEA" }} placeholder={input_info.placeHolder} onChange={getValue}></textarea>
                        </div>
                    </div>


                    <div className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-4'>
                        <div data-aos="zoom-out">
                            <button type="button" className="kalamButton w-36  h-11  text-[17px] placeholder-gray-800 mt-3 rounded-md  focus:outline-none" name="from" id="from" onClick={handleSubmit} >{button.label}</button>
                            <button className='inline-block ml-3 kalamButtonC' onClick={toggleModal}>{concellation.label}</button>
                        </div>


                    </div>

                </div >
            </div >

            {showModal && (
                <div className="fixed mt-10 bg-slate-500 inset-0 flex items-center justify-center bg-black bg-opacity-50" >

                    <div className="container " >
                        <div data-aos="zoom-in" className=" grid grid-cols-1 gap-4 w-full md:w-2/3 mt-10 ml-auto mr-auto bg-slate-50 rounded-sm shadow-md p-6 xl:ml-[280px]">
                            {/* Number and Email */}
                            <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div>
                                    <p className="kalam">{invoice_number.label}</p>
                                    <input type="number" className="w-full  h-11 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600" placeholder={invoice_number.placeHolder} style={{ background: "#EAEAEA" }} name="numbervoice" id="numbervoice" onChange={getValueForCancel} />
                                </div>

                                <div>
                                    <p className="kalam">{input_email.label}</p>
                                    <input type="email" className="w-full  h-11 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600" placeholder={input_email.placeHolder} style={{ background: "#EAEAEA" }} name="emailvoice" id="emailvoice" onChange={getValueForCancel} />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 mt-3'>
                                <div>
                                    <p className="kalam">{phone.label}</p>
                                    <input type='tel' className="w-full h-14 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600" style={{ background: "#EAEAEA" }} placeholder={phone.placeHolder} name="telvoice" id="telvoice" onChange={getValueForCancel} />


                                </div>
                            </div>

                            {/* Message */}
                            <div className='grid grid-cols-1 mt-3'>
                                <div>
                                    <p className="kalam">{message.label}</p>
                                    <textarea name="info" id="info" className="w-full h-[100px] md:h-18 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-500 focus:outline-lime-600" style={{ background: "#EAEAEA" }} placeholder={message.placeHolder} onChange={getValue}></textarea>
                                </div>
                            </div>


                            <div className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-4'>
                                <div>
                                    <button type="button" className="kalamButton w-44  h-11  text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 " name="from" id="from" onChange={getValue} >{concellation.label}</button>
                                    <button className='inline-block ml-3 kalamButtonC' onClick={toggleModal}>{cancel.label}</button>
                                </div>


                            </div>

                        </div >
                    </div >
                </div>
            )}

            <img src={hero1} alt="" className='circle-image relative top-[-700px] left-[1500px]' />
            <img src={hero2} alt="" className='circle-image relative top-[-700px] left-12' />
            <img src={hero3} alt="" className='circle-image ml-11 relative top-[-340px]' />
            <img src={hero2} alt="" className='circle-image relative top-[-300px] left-[1500px] ' />











        </>
    )
}
