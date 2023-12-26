import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const url = "http://127.0.0.1:8000";
    const Navigate = useNavigate()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchAllProducts();
    }, []);

    const fetchAllProducts = async () => {
        try {
            const response = await axios.get(`${url}/api/products`);
            setProducts(response.data);
            console.log(response.data)

        } catch (error) {
            console.error('Error fetching all products:', error);
        }
    };

    // Render your products grouped by category
    const renderProductsByCategory = () => {
        const productsByCategory = {};

        // Group products by category
        products.forEach((product) => {
            const categoryName = product.category ? product.category.name : 'Uncategorized';
            if (!productsByCategory[categoryName]) {
                productsByCategory[categoryName] = { products: [], image: null };
            }

            productsByCategory[categoryName].products.push(product);

            // Set the category image if not already set
            if (!productsByCategory[categoryName].image) {
                productsByCategory[categoryName].image = product.category ? product.category.image : null;
            }
        });

        // Render products by category with alternating flex classes and left margin
        let isFlexRow = true; // Start with flex-row
        let index = 0;

        return Object.keys(productsByCategory).map((categoryName) => {
            const flexClass = isFlexRow ? 'flex-row' : 'flex-row-reverse';
            const marginLeftClass = !isFlexRow ? 'right-32' : ''; // Add this line for left margin when using flex-row-reverse
            const textEnd = !isFlexRow ? 'right-[140px]' : ''; // Add this line for left margin when using flex-row-reverse

            isFlexRow = !isFlexRow; // Toggle for the next category
            index += 1; // Increment index for the next category

            return (
                <div key={categoryName} className={`mx-52 flex ${flexClass} mt-28 ${marginLeftClass} mr-5 md:mr-10 lg:mr-32 space-x-4 md:space-x-8 lg:space-x-20 relative`}>
                    {productsByCategory[categoryName].image && (
                        <img className='max-w-[190vh]' style={{ maxHeight: '75vh', maxWidth: '57vh', objectFit: 'cover' }} src={`${url}/storage/product/image/${productsByCategory[categoryName].image}`} alt={`Category: ${categoryName}`} />
                    )}
                    <div className={`relative ${textEnd}`}>
                        <p className={`inter text-6xl font-extrabold relative`} style={{ color: "#195A00" }}>{categoryName}</p>
                        <table className="table-auto">
                            <tbody >
                                {productsByCategory[categoryName].products.slice(0, 4).map((product) => (
                                    <><tr key={product.id} className='space-x-24 space-y-20 hover:text-green-800 duration-600'>
                                        <td>
                                            <p className='Miniver text-xl font-bold'>
                                                {product.name}
                                            </p>
                                            <p className='kalam text-lg'>
                                                {product.description}
                                            </p>
                                            <p className='kalam text-md'>
                                                {product.cal} CAL
                                            </p>
                                        </td>
                                        <td className='text-xl flex justify-end'>
                                            <p className='relative top-[-67px] font-bold' style={{ color: "#195A00" }}>
                                                {product.prix} MAD
                                            </p>
                                        </td>
                                    </tr><tr className=''>
                                            <td className='mt-14 w-[400px]'>
                                                <hr />
                                            </td>
                                        </tr><tr className=''>
                                            <td className='mt-14 w-[400px]'></td>
                                        </tr></>
                                ))}
                                {productsByCategory[categoryName].products.length > 0 && (
                                    <tr className=''>
                                        <td>
                                            <button
                                                className='mt-3 border-2 border-green-800 w-28 h-10 rounded-md hover:border-none hover:bg-green-800 hover:text-white-A700 duration-700'
                                                onClick={() => { Navigate(`/menu/${productsByCategory[categoryName].products[0].category.id}`) }}
                                            >
                                                View Menu
                                            </button>
                                        </td>
                                    </tr>
                                )}


                            </tbody>
                        </table>
                    </div>
                </div>
            );
        });
    };

    return (
        <><div className='mt-36 mb-20'>
            {renderProductsByCategory()}
        </div>
            {/* <br /><br /><br /><br /> */}
        </>

    );
};

export default Menu;
