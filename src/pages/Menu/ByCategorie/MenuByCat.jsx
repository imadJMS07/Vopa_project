import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByCategory } from '../../../Api/Menu';

const MenuByCat = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make sure to handle the API response properly
                const result = await getProductByCategory(Number(id));

                // Check if 'products' is an array before setting the state
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

    return (
        <>
            <div className="container flex justify-center mt-36">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products && products.length > 0 ? (
                        products.map((item, index) => (
                            <div key={index} className="w-full md:w-80 bg-white shadow rounded mt-2 mb-12">
                                <div
                                    className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(http://127.0.0.1:8000/storage/product/image/${item.image})`,
                                    }}
                                >
                                    <div>
                                        <span className="uppercase text-xs bg-green-50 p-1 border-green-500 border rounded text-green-700 font-medium select-none">
                                            available
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4 flex flex-col items-center">
                                    <p className="text-gray-400 font-light text-xs text-center">Hammond robotics</p>
                                    <h1 className="text-gray-800 text-center mt-1">{item.name}</h1>
                                    <p className="text-center text-gray-800 mt-1">{`€${item.prix}`}</p>
                                    <div className="inline-flex items-center mt-2">
                                        {/* ... your existing code for rendering quantity buttons */}
                                    </div>
                                    <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
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
                        <div id="loading-basic-example" class="h-[300px] w-full">
                            <div
                                data-te-loading-management-init
                                data-te-parent-selector="#loading-basic-example">
                                <div
                                    data-te-loading-icon-ref
                                    class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                    role="status"></div>
                                <span data-te-loading-text-ref>Loading...</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default MenuByCat;
