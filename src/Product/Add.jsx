import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Add() {
    const url = 'https://api.vopa.ma';

    const [cat, setCat] = useState([])

    useEffect(() => {
        // Fetch product data from the Laravel API
        axios.get(`${url}/api/categories`)
            .then(response => {
                setCat(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    const [product, setProduct] = useState({
        name: '',
        category_id: '',
        image: null,
        desc: '',
        prix: 0,
        cal: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: name === 'image' ? files[0] : value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('prix', product.prix);
        formData.append('image', product.image);
        formData.append('cal', product.cal);
        formData.append('description', product.desc);
        formData.append('category_id', 1);

        try {
            await axios.post(`${url}/api/products`, formData);
            console.log('Product added successfully!');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };


    const [category, setCategory] = useState({
        name: '',
        image: null,
    });

    const handleChangeCategory = (e) => {
        const { name, value, files } = e.target;
        setCategory((prevProduct) => ({
            ...prevProduct,
            [name]: name === 'image' ? files[0] : value,
        }));
    };


    const handleSubmitCategory = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', category.name);
        formData.append('image', category.image);
        // formData.append('description', 'category.image');

        // formData.append('niveau_stock', "formik.values.niveau_stock");
        // formData.append('mouvment_stock', "formik.values.mouvment_stock");
        // formData.append('produit_plus_vendus', "formik.values.produit_plus_vendus");
        // formData.append('description', "formik.values.description");


        // formData.append('email', "mo@gmail.com");
        // formData.append('password', "mouadben2345678");

        try {
            await axios.post(`${url}/api/categories`, formData);
            console.log('category added successfully!');
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };

    const [localIpAddress, setLocalIpAddress] = useState('');

    const getLocalIpAddress = () => {
        return new Promise((resolve, reject) => {
            fetch('https://api64.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    setLocalIpAddress(data.ip);
                    resolve(data.ip);
                })
                .catch(error => reject(error));
        });
    };

    useEffect(() => {


        // Call the function to get local IP address when the component mounts
        getLocalIpAddress();
    }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

    return ( 
        <>


            {cat.map((item) => (
                <>
                    <p>ppppp dddddddddd{item.name}</p>
                    <img src={`${url}/storage/product/image/${item.image}`} alt="ddd" />
                    <br /></>
            ))}
            <div className='mt-36'>
                <h2>Add categorie</h2>
                <form onSubmit={handleSubmitCategory}>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={handleChangeCategory} /> <br />
                    {category.name}
                    <label>Image:</label>
                    <input type="file" name="image" onChange={handleChangeCategory} /> <br />

                    <button type="submit">Add categorie</button>
                </form>

            </div>


            <div className='mt-36'>
                <h2>Add Product</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={handleChange} /> <br />
                    <label>categorie:</label>
                    <input type="text" name="category_id" onChange={handleChange} /> <br />
                    <label>prix:</label>
                    <input type="text" name="prix" onChange={handleChange} /> <br />
                    <label>Image:</label>
                    <input type="file" name="image" onChange={handleChange} /> <br />
                    <label>desc:</label>
                    <input type="text" name="desc" onChange={handleChange} /> <br />
                    <label>Cal:</label>
                    <input type="number" name="cal" onChange={handleChange} /> <br />

                    <button type="submit">Add Product</button>
                </form>

            </div>


            <button
                type="button"
                class="btn btn-outline-primary"
                onClick={getLocalIpAddress}
            >
                Button
            </button>
            <p>Local IP Address: {localIpAddress}</p>


        </>


    )
}


// // // const Home = () => {























// // //     return (
// // //         <>

// // //             <div className='mt-96'>
// // //                 <h2>Add Product</h2>
// // //                 <form onSubmit={handleSubmit}>
// // //                     <label>Name:</label>
// // //                     <input type="text" name="name" value={product.name} onChange={handleChange} /> <br />


// // //                     <label>categorie:</label>
// // //                     <input type="text" name="category_id" value={product.category_id} onChange={handleChange} /> <br />
// // //                     <label>prix:</label>
// // //                     <input type="text" name="prix" value={product.prix} onChange={handleChange} /> <br />



// // //                     <label>Image:</label>
// // //                     <input type="file" name="image" onChange={handleChange} /> <br />
// // //                     <label>desc:</label>
// // //                     <input type="text" name="desc" onChange={handleChange} /> <br />

// // //                     <button type="submit">Add Product</button>
// // //                 </form>

// // //             </div>
// // //         </>



// // //     )
// // // };

// // // export default Home;



// import React, { useEffect } from 'react';

// const GoogleTranslate = () => {
//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//         script.async = true;
//         document.head.appendChild(script);

//         window.googleTranslateElementInit = () => {
//             new window.google.translate.TranslateElement(
//                 { pageLanguage: 'en' },
//                 'google_translate-element'
//             );
//         };

//         return () => {
//             document.head.removeChild(script);
//             delete window.googleTranslateElementInit;
//         };
//     }, []);

//     return (
//         <div className='mt-96'>
//             <p>Hello</p>
//             <p>My name is imad</p>
//             <div id="google_translate-element"></div>
//         </div>
//     );
// };

// export default GoogleTranslate;
