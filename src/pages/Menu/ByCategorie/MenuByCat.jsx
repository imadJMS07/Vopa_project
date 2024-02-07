import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProductByCategory, orderByDate, orderProductsCheapestToMostExpensive, orderProductsMostExpensiveToCheapest } from '../../../Api/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { addPanierAction } from '../../Redux/PanieActions'
// import { clearLocalStorage } from '../../Redux/PanieRreducers';
import Aos from 'aos';

const Pagination = ({ pageCount, currentPage, onPageChange }) => {
    const hasPreviousPage = currentPage > 0;
    const hasNextPage = currentPage < pageCount - 1;

    return (

        <nav aria-label="">
            <div className="flex justify-center">
                <ul className="list-style-none flex">
                    {hasPreviousPage && (
                        <li>
                            <button
                                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-green-800 dark:text-white  dark:hover:text-white"
                                aria-label="Previous"
                                onClick={() => onPageChange(currentPage - 1)}
                            >
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                    )}

                    {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                        <li key={page} aria-current="page">
                            <button
                                className={`relative block rounded bg-transparent px-3 py-1.5 text-sm ${currentPage === page - 1
                                    ? 'bg-neutral-100 text-neutral-800'
                                    : 'text-neutral-600  dark:text-white hover:bg-green-800 dark:hover:text-white'
                                    } transition-all duration-300`}
                                onClick={() => onPageChange(page - 1)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}

                    {hasNextPage && (
                        <li>
                            <button
                                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-green-800 dark:text-white  dark:hover:text-white"
                                aria-label="Next"
                                onClick={() => onPageChange(currentPage + 1)}
                            >
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};
const MenuByCat = () => {
    const url = 'https://api.vopa.ma';
    const Navigate = useNavigate()
    const dispatch = useDispatch();
    const [tableID, setTableID] = useState([]);
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [date, setDate] = useState([]);
    const [priceCheapest, setPriceCheapest] = useState([]);
    const [priceExpensive, setPriceExpensive] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 9;
    const selectedPanier = useSelector((state) => state.paniers.Paniers);
    const count = selectedPanier.length;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getProductByCategory(Number(id));
                console.log(result)
                if (Array.isArray(result?.products)) {
                    setProducts(result.products);
                } else {
                    console.error('Invalid response format:', result);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await orderByDate(Number(id));
                console.log(result)
                if (Array.isArray(result?.products)) {
                    setDate(result.products);
                } else {
                    console.error('Invalid response format:', result);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await orderProductsCheapestToMostExpensive(Number(id));
                console.log(result)
                if (Array.isArray(result?.products)) {
                    setPriceCheapest(result.products);
                } else {
                    console.error('Invalid response format:', result);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await orderProductsMostExpensiveToCheapest(Number(id));
                console.log(result)
                if (Array.isArray(result?.products)) {
                    setPriceExpensive(result.products);
                } else {
                    console.error('Invalid response format:', result);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, [id]);



    const [filter, setFIlter] = useState("");
    let pageCount;
    let visibleProducts;
    if (filter === "") {
        pageCount = Math.ceil(products.length / itemsPerPage);
        visibleProducts = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    }
    if (filter === "orderByDate") {
        pageCount = Math.ceil(date.length / itemsPerPage);
        visibleProducts = date.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    }
    if (filter === "orderProductsCheapestToMostExpensive") {
        pageCount = Math.ceil(priceCheapest.length / itemsPerPage);
        visibleProducts = priceCheapest.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    }
    if (filter === "orderProductsMostExpensiveToCheapest") {
        pageCount = Math.ceil(priceExpensive.length / itemsPerPage);
        visibleProducts = priceExpensive.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    }



    const handleSubmit = (item) => {

        const newPanier = {
            id: item.id,
            name: item.name,
            prix: item.prix,
            image: item.image,
            quantity: 1,
            total: item.prix * 1
        }
        dispatch(addPanierAction(newPanier));
        // dispatch(clearLocalStorage());
    };

    useEffect(() => {
        Aos.init({ duration: 2000 });
    })

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    return (
        <>

            <div className='flex flex-row mt-36 w-[45vh]  sm:w-[80vh] md:w-[100vh] lg:w-[100vh] xl:w-[80vh] 2xl:w-[80vh]  mx-auto'>

                <select id="" onChange={(e) => setFIlter(e.target.value)} class="bg-gray-50 focus:border-0 border border-gray-300  text-sm rounded-lg   block w-full p-2.5 0  dark:text-white hover:none  "  >
                    <option selected value="">Choose filter</option>
                    <option value="orderByDate">Newest</option>
                    <option value="orderProductsCheapestToMostExpensive">Price : Low to High</option>
                    <option value="orderProductsMostExpensiveToCheapest">Price : High to Low</option>
                </select>

            </div>

            <div className="container flex justify-center mt-20">

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8">


                    {visibleProducts.map((item, index) => (

                        <div key={index} className="w-[43vh] md:w-80 bg-white shadow rounded mt-2 mb-12 hover:shadow-2xl hover:duration-700"
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
                                <button id={id.item} value={id.item} className="kalam py-2 px-4 bg-green-800 text-white-A700 rounded hover:bg-green-600  active:bg-green-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
                                    onClick={() => handleSubmit(item)}

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
                    ))}
                </div>
            </div >

            <div className="fixed bottom-10 left-10">
                <div className="relative">
                    <div className="absolute -top-2 -right-2 bg-slate-50 text-green-800 rounded-full h-6 w-6 flex items-center justify-center">
                        {/* {count} */}
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


            <Pagination pageCount={pageCount} currentPage={currentPage} onPageChange={setCurrentPage} />
        </>
    );
};

export default MenuByCat;
