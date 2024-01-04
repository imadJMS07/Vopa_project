import React, { useState, useEffect } from 'react'
import { getDetailsProduct, lastProduct } from '../../../Api/Menu';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { addPanierAction } from '../../Redux/PanieActions'
import Aos from 'aos';
import { useDispatch, useSelector } from 'react-redux';
import hero1 from '../../../images/hero1.png';
import hero2 from '../../../images/hero2.png';
import hero3 from '../../../images/hero3.png';

const Single = () => {
    const url = 'https://api.chocolatpatis.shop';
    const selectedPanier = useSelector((state) => state.paniers.Paniers);
    const count = selectedPanier.length;
    const Navigate = useNavigate()
    const dispatch = useDispatch();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [categorie, setCategorie] = useState({});
    const [qnt, setQnt] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [last, setLast] = useState([]);

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const handleSubmitLast = (item) => {

        const newPanier = {
            id: item.id,
            name: item.name,
            prix: item.prix,
            image: item.image,
            quantity: 1,

        }
        dispatch(addPanierAction(newPanier));
        // dispatch(clearLocalStorage());
    };


    const handleSubmit = () => {

        console.log(product.id)
        console.log(product.name)

        const newPanier = {
            id: product.id,
            name: product.name,
            prix: product.prix,
            image: product.image,
            quantity: qnt,
            total: product.prix * qnt
        }
        dispatch(addPanierAction(newPanier));
    };

    useEffect(() => {
        // Fetch product data from the Laravel API
        axios.get(`${url}/api/showDetails/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);


    useEffect(() => {
        // Fetch product data from the Laravel API
        axios.get(`${url}/api/showDetailsCategori/${id}`)
            .then(response => {
                setCategorie(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    useEffect(() => {
        Aos.init({ duration: 2000 });
    });



    useEffect(() => {
        // Fetch product data from the Laravel API
        axios.get(`${url}/api/lastproducts`)
            .then(response => {
                setLast(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    return (
        <>
            <div className="bg-cover bg-center mt-[100px] bg-image">
                <div className="grid justify-items-center relative top-24 ">
                    <p className="  about font-bold  text-9xl sm:text-1xl ">Details</p>
                </div>
                <img src={hero1} alt="" className='circle-image ml-11' data-aos="fade-left" />
                <img src={hero2} alt="" className='circle-image ml-96 mt-10' data-aos="fade-left" />
                <div className='flex justify-end mr-11' data-aos="fade-right">
                    <img src={hero2} alt="" className='circle-image ' data-aos="fade-right" />
                    <img src={hero3} alt="" className='circle-image ml-11' data-aos="fade-left" />
                </div>
            </div>

            <div className="container flex justify-center mt-36 mb-14">
                <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2">
                    <div>
                        <img
                            src={`${url}/storage/product/image/${product.image}`}
                            alt=""
                            className='rounded-xl max-w-[55vh] max-h-[900vh]'
                            onClick={() => { setIsModalOpen(true) }}
                            data-aos="fade-right"
                        />
                    </div>
                    <div className='mt-8 w-[100%]' data-aos="fade-left">
                        <p className='text-3xl kalam' style={{ color: '#195A00' }}>{categorie.category_name}</p>
                        <p className='w-[470px] text-3xl font-extrabold mt-2'>{product.name}</p>
                        <p className='w-[470px] font-sans inter mt-6 opacity-[0.5]' style={{}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nesciunt placeat corporis inventore odio laudantium neque. Natus velit fuga, at corporis quia reprehenderit obcaecati doloremque</p>
                        <p className='text-2xl font-extrabold mt-4' style={{ color: '#195A00' }}>{product.prix} MAD</p>
                        <div className='flex'>
                            <div className="bg-gray-100 rounded-lg h-14 mt-3 flex items-center justify-between px-6 lg:px-3 font-bold sm:mr-3 lg:mr-5 lg:w-1/3">
                                <button className="text-orange text-2xl leading-none font-bold mb-1 lg:mb-2 lg:text-3xl hover:opacity-60" onClick={() => setQnt(qnt - 1)}>-</button>
                                <input min={0} max={100} onChange={(e) => setQnt(e.target.value)} value={qnt} className="quantity focus:outline-none text-dark-blue bg-gray-100 font-bold flex text-center w-full ml-2" type="number" name="quantity" aria-label="quantity number" />
                                <button className="text-orange text-2xl leading-none font-bold mb-1 lg:mb-2 lg:text-3xl hover:opacity-60" onClick={() => setQnt(qnt + 1)}>+</button>
                            </div>
                            <button className="shadow-xl duration-500 py-2 px-4 w-3/6 bg-green-700 text-white rounded hover:bg-green-800 active:bg-green-700 disabled:opacity-50 mt-4 flex items-center justify-center"
                                onClick={() => handleSubmit()}
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
                </div>
            </div>



            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center" data-aos="zoom-up">
                    <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
                    <div className="bg-white p-4 z-10">
                        <img src={`${url}/storage/product/image/${product.image}`} className='rounded-xl max-w-[55vh] max-h-[900vh]' alt="" style={{ minWidth: '100vh', maxHeight: "80vh", objectFit: "cover" }} />
                    </div>
                </div>
            )}



            <p className='text-8xl Great  mt-52 mb-24 flex justify-center' style={{ color: '#195A00' }}>Latest products</p>
            <div className="container flex justify-center ">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {last && last.length > 0 ? (
                        last.map((item, index) => (
                            <div key={index} className="w-full md:w-80 bg-white shadow rounded mt-2 mb-12 hover:shadow-2xl hover:duration-700"
                                data-aos="zoom-up"
                            >
                                <div
                                    className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${url}/storage/product/image/${item.image})`,
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
                                    <button id={id.item} value={id.item} className="py-2 px-4 bg-green-800 text-white rounded hover:bg-green-600 active:bg-green-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
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

            <div className="fixed bottom-10 left-10">
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
            </div>



        </>
    );
};

export default Single;




