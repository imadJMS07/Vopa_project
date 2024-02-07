import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removePanierAction, updatePanierAction, updatePanierMoinsActions } from '../Redux/PanieActions';
import Aos from 'aos';
import axios from 'axios';
import Swal from 'sweetalert2';

const Panier = () => {
    const url = 'https://api.vopa.ma';
    const dispatch = useDispatch();
    const selectedPanier = useSelector((state) => state.paniers.Paniers);
    const count = selectedPanier.length;
    const totalSum = selectedPanier.reduce((acc, item) => acc + item.total, 0);
    const [showModal, setShowModal] = useState(false);
    const Navigate = useNavigate()
    const extractedValues = selectedPanier.map(({ id, quantity }) => ({ id, quantity }));
    const [order, setOrder] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zone: 'null',
        phone: '',
        email: '',

    })

    const commandes = async () => {

        if (extractedValues.length > 0) {
            if (order.firstName !== "" && order.lastName !== "" && order.firstName !== "" && order.contry !== "" && order.address !== "" && order.city !== "" && order.StateCounty !== "" && order.zip !== "" && order.phone !== "" && order.email !== "") {
                const data = {
                    firstName: order.firstName,
                    lastName: order.lastName,
                    address: order.address,
                    city: order.city,
                    zone: order.zone,
                    phone: order.phone,
                    email: order.email,
                    PrixTotal: totalSum,
                    products: extractedValues, // Corrected line
                };

                try {
                    await axios.post(`${url}/api/commandes`, data);
                    console.log('commandes added successfully!');
                    Swal.fire({
                        icon: "success",
                        title: "Order placed successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    setTimeout(() => {
                        Navigate('/menu')

                    }, 2000);

                } catch (error) {
                    console.error('Error adding commandes:', error);
                }
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "All filed is important!",
                });
            }

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Panier is empty !",
            });
        }

    }

    const getValue = (e) => {
        setOrder(preveuse => ({
            ...preveuse,
            [e.target.name]: e.target.value
        }))
    }
    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const handleRemove = (id) => {
        dispatch(removePanierAction(id));
    };
    const addQnt = (id) => {
        dispatch(updatePanierAction(id));
    };
    const moinsQnt = (id) => {
        dispatch(updatePanierMoinsActions(id));
    };
    useEffect(() => {
        Aos.init({ duration: 2000 });
    });
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);



    const [uniqueCities, setUniqueCities] = useState([]);
    const [zoneCity, setZoneCity] = useState([]);


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/unique-cities")
            .then(response => {
                setUniqueCities(response.data.cities);
                console.log(uniqueCities)
            })
            .catch(error => {
                console.error('Error fetching unique cities:', error);
            });
    }, []);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/zones/${order.city}`)
            .then(response => {
                setZoneCity(response.data.zones);
                console.log(zoneCity)
            })
            .catch(error => {
                console.error('Error fetching zone city:', error);
            });
    }, [order.city]);


    return (
        <>
            <div className=" bg-gray-100 pt-20  ">
                <div className="mx-auto max-w-7xl justify-center px-6 md:flex md:space-x-6 xl:px-0 mt-20">
                    <div className="rounded-lg md:w-2/3">
                        {selectedPanier.map((item) => (
                            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start hover:text-green-800 hover:shadow-2xl hover:duration-700">
                                <img
                                    src={`${url}/storage/product/image/${item.image}`} alt="product-image"
                                    className=" rounded-lg w-20 h-20"
                                />
                                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between mt-3">
                                    <div className="mt-5 sm:mt-0">
                                        <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                                        <p className="mt-1 text-xs text-gray-700">{item.prix} MAD</p>
                                    </div>
                                    <div className="f border-gray-100">
                                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3 duration-100 hover:bg-green-800 hover:text-blue-50"
                                            onClick={() => { moinsQnt(item.id) }}
                                        >
                                            {' '}
                                            -{' '}
                                        </span>
                                        <input
                                            className="h-8 w-12 border pl-1 bg-white text-center text-xs outline-none"
                                            type="number"
                                            value={item.quantity}
                                            min="1"
                                        />
                                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-green-800 hover:text-blue-50"
                                            onClick={() => { addQnt(item.id) }}
                                        >
                                            {' '}
                                            +{' '}

                                        </span>
                                    </div>
                                    <h2 className="text-lg  text-gray-900 font-semibold">{item.total} MAD</h2>
                                    <svg
                                        onClick={() => handleRemove(item.id)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>


                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="mt-6 md:mt-0 md:w-[560px] mb-10">
                        <div className="h-auto rounded-lg border bg-white p-6 shadow-md">
                            <div className="mb-2 flex justify-center ">
                                <p className=" text-xl font-bold text-green-800" >Subtotal</p>
                                <p className="text-gray-700 ml-96 relative right-40 kalam hover:text-green-800 duration-700">{totalSum}MAD</p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-start">
                                <p className="text-green-800 text-xl font-bold">Shipping</p>
                                <div className='flex justify-center flex-col ml-auto  mt-2'>
                                    {selectedPanier.map((item) => (
                                        <>
                                            <p className='kalam hover:text-green-800 duration-700'>{item.name} × {item.quantity}</p> <br />
                                        </>

                                    ))}
                                </div>

                                <p className="text-gray-700"></p>

                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between">
                                <p className="text-green-800 text-xl font-bold ">Total</p>
                                <p className="relative right-24 text-2xl kalam hover:text-green-800 duration-700">{totalSum} MAD</p>
                            </div>

                            <button className="mt-6 w-full rounded-md bg-green-800 py-1.5 font-medium text-blue-50 hover:bg-green-700 duration-700"
                                onClick={toggleModal}
                            >
                                Check out
                            </button>
                        </div>
                    </div>
                </div >
            </div >




            {showModal && (
                <div className="fixed mt-10  bg-slate-500 inset-0 flex items-center justify-center bg-black bg-opacity-50" >

                    <div className="container " >
                        <div data-aos="zoom-in" className="h-[600px]  grid grid-cols-1 gap-4 w-full md:w-2/3 mt-10 ml-auto mr-auto bg-slate-50 rounded-sm shadow-md p-6 xl:ml-[280px]" style={{ overflow: 'scroll' }}>

                            <p className='flex justify-center text-3xl mb-8 inter' style={{ color: "#195A00" }}>Confirmation of the order</p>
                            <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div>
                                    <p className="kalam">First Name *</p>
                                    <input type="text" placeholder='First Name here' className="w-full  h-11 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600" style={{ background: "#EAEAEA" }} id="firstName" name="firstName" onChange={getValue} />
                                </div>

                                <div>
                                    <p className="kalam">Last Name *</p>
                                    <input type="text" placeholder='Last Name here' className="w-full  h-11 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600" style={{ background: "#EAEAEA" }} name="lastName" id="lastName" onChange={getValue} />
                                </div>
                            </div>


                            <div className=' grid grid-cols-1 md:grid-cols-3 gap-4'>

                                {/* <div>
                                    <p className="kalam">City *</p>
                                    <input type='text' placeholder='City here' className="w-full h-14 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600" style={{ background: "#EAEAEA" }} name="city" id="city" onChange={getValue} />
                                </div> */}

                                <div className=''>
                                    <p className="kalam">City *</p>
                                    <select
                                        className={`w-full h-14 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600 ${(!uniqueCities || uniqueCities.length === 0) ? 'disabled' : ''
                                            }`}
                                        style={{ background: "#EAEAEA" }}
                                        name="city"
                                        id="city"
                                        onChange={getValue}
                                        disabled={!uniqueCities || uniqueCities.length === 0}
                                    >
                                        <option value="" className='text-gray-200'>Select City</option>
                                        {
                                            uniqueCities.map((city, index) => (
                                                <option value={city} key={index}>{city}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className=''>
                                    <p className="kalam">Zone *</p>
                                    <select
                                        className={`w-full h-14 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600 ${(!zoneCity || zoneCity.length === 0) ? 'disabled' : ''
                                            }`}
                                        style={{ background: "#EAEAEA" }}
                                        name="zone"
                                        id="zone"
                                        onChange={getValue}
                                        disabled={!zoneCity || zoneCity.length === 0 || zoneCity === "null"}
                                    >
                                        <option value="" className='text-gray-200'>Select Zone</option>
                                        {
                                            zoneCity.map((zone, index) => (
                                                <option value={zone} key={index}
                                                    disabled={!zone || zone === "null"}
                                                >{zone}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div>
                                    <p className="kalam">Phone *</p>
                                    <input type='tel' placeholder='Phone here' className="w-full h-14 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600" style={{ background: "#EAEAEA" }} name="phone" id="phone" onChange={getValue} />
                                </div>

                            </div>



                            <div className='grid grid-cols-1 mt-3'>
                                <div>
                                    <p className="kalam">Address *</p>
                                    <input type='text' placeholder='Address here' className="w-full h-14 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600" style={{ background: "#EAEAEA" }} name="address" id="address" onChange={getValue} />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 mt-3'>
                                <div>
                                    <p className="kalam">Email *</p>
                                    <input type='email' placeholder='Email here' className="w-full h-14 p-4 text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 focus:outline-lime-600" style={{ background: "#EAEAEA" }} name="email" id="email" onChange={getValue} />
                                </div>
                            </div>


                            <div className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-4'>
                                <div>
                                    <button type="button" className="kalamButton w-44  h-11  text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 " name="from" id="from" onClick={commandes} >Place order</button>
                                    <button className='inline-block ml-3 kalamButtonC' onClick={toggleModal}>Cancel</button>
                                </div>


                            </div>

                        </div >
                    </div >
                </div >

            )}




            <div div className="fixed bottom-10 left-10" >
                <div className="relative">
                    <div className="absolute -top-2 -right-2 bg-slate-50 text-green-800 rounded-full h-6 w-6 flex items-center justify-center">
                        {count}
                    </div>
                    <Link to={'/panier'} className="py-3 px-4 text-white rounded disabled:opacity-50 flex items-center" style={{ background: '#195A00' }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-slate-50"
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
                    </Link>
                </div>
            </div >
        </>

    );
};
export default Panier;





