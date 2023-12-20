import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetchProducts();
    }, [])
    const fetchProducts = async () => {
        await axios.get('http://127.0.0.1:8000/api/categories').then(({ data }) => { setProducts(data) })
    }








    return (
        <>
            <div className="container mx-auto mt-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={`http://127.0.0.1:8000/storage/product/image/${item.image}`}
                            className="max-w-full h-auto"
                            alt={`Product ${index}`}
                        />
                        <div className="mt-4 text-center">
                            <p>Test</p>
                            <p>Test</p>
                            <p>Test</p>
                        </div>
                    </div>
                ))}
            </div>





            <br /><br /><br /><br /><br />
        </>
    );
};

export default Menu;
