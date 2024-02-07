import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';

const Menu = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    })
    const url = "https://api.chocolatpatis.shop";
    const Navigate = useNavigate()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchAllProducts();
    }, []);

    const fetchAllProducts = async () => {
        try {
            const response = await axios.get(`${url}/api/productsWithCategoryw`);
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
            // const flexClass = isFlexRow ? 'flex-col items-center lg:flex-row lg:items-center 2xl:flex-row 2xl:items-start 2xl:mx-52 xl:mx-52 lg:mx-20' : ' lg:flex-row-reverse';
            const flexClass = isFlexRow ? 'flex-col items-center lg:flex-row lg:items-center 2xl:flex-row 2xl:items-start 2xl:mx-44 xl:mx-44 lg:left-20 xl:left-0 2xl:left-20 ' : 'flex-col items-center  lg:flex-row-reverse  lg:items-start 2xl:flex-row-reverse 2xl:items-start  ';

            const marginLeftClass = !isFlexRow ? '2xl:right-32 xl:right-3 lg:left-12 xl:left-0 2xl:left-[-10px] ' : '';
            const textEnd = !isFlexRow ? '2xl:right-[160px] xl:right-[50px] lg:right-[50px] md:top-12 sm:top-12 top-12 lg:top-0 xl:top-0 xl:top-0' : 'top-12 lg:top-0 xl:top-0 xl:top-0';

            isFlexRow = !isFlexRow; // Toggle for the next category
            index += 1; // Increment index for the next category

            return (
                <div key={categoryName} className={`ml-5  flex ${flexClass} mt-28 ${marginLeftClass} mr-5 md:mr-10 lg:mr-32 space-x-4 md:space-x-8 lg:space-x-20 relative`}>
                    {productsByCategory[categoryName].image && (
                        <img data-aos="fade-up" className='max-w-[40vh] md:max-w-[60vh] lg:max-w-[50vh] xl:max-w-[60vh] 2xl:max-w-[55vh] lg:h-[100vh] lg:min-w-[0vh] 2xl:min-w-[0px] 2xl:h-[90vh]' style={{ objectFit: 'cover' }} src={`${url}/storage/product/image/${productsByCategory[categoryName].image}`} alt={`Category: ${categoryName}`} />
                    )}
                    <div data-aos="fade-up" className={` relative ${textEnd} max-w-full`}>
                        <p className={`inter text-6xl sm:text-5xl lg:text-3xl xl:text-5xl 2xl:text-5xl font-extrabold relative `} style={{ color: "#195A00" }}>{categoryName}</p>
                        <table className="table-auto ">
                            <tbody >
                                {productsByCategory[categoryName].products.slice(0, 4).map((product) => (
                                    <><tr key={product.id} className='space-x-24 space-y-20 hover:text-green-800 duration-700'>
                                        <td>
                                            <p className='inter text-xl font-helvetica font-bold'>
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
                                            <p className='inter relative top-[-67px] font-bold' style={{ color: "#195A00" }}>
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
