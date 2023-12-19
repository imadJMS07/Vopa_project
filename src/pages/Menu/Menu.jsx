import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetchProducts();
    }, [])
    const fetchProducts = async () => {
        await axios.get('http://127.0.0.1:8000/api/products').then(({ data }) => { setProducts(data) })
    }

    // Render your products grouped by category
    const renderProductsByCategory = () => {
        const productsByCategory = {};

        // Group products by category
        products.forEach((product) => {
            const categoryName = product.category ? product.category.name : 'Uncategorized';
            if (!productsByCategory[categoryName]) {
                productsByCategory[categoryName] = [];
            }

            productsByCategory[categoryName].push(product);
        });

        // Render products by category
        return Object.keys(productsByCategory).map((categoryName) => (
            <div key={categoryName}>
                <h2>{categoryName}</h2>
                <ul>
                    {productsByCategory[categoryName].slice(0, 6).map((product) => (
                        <li key={product.id}>
                            {product.name} - {product.prix} MAD -{product.category_id}
                        </li>
                    ))}
                </ul>
            </div>
        ));
    };

    return (
        <>
            <div className='mt-96'>
                {renderProductsByCategory()}
            </div>

            <br /><br /><br /><br /><br />
        </>
    );
};

export default Menu;
