import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Add() {
    const url = 'http://127.0.0.1:8000';

    const [cat, setCat] = useState([])

    useEffect(() => {
        // Fetch product data from the Laravel API
        axios.get(`${url}/api/category`)
            .then(response => {
                setCat(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    const [nam, setNam] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState(null)

    const [product, setProduct] = useState({
        name: '',
        qnt_dispo: '',
        prix_vent: '',
        kcal: '',
        image: null,
        category_id: '',
        description: ''
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

        console.log(product.category_id)
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('qnt_dispo', product.qnt_dispo);
        formData.append('prix_vent', product.prix_vent);
        formData.append('kcal', product.kcal);
        formData.append('image', product.image);
        formData.append('categorie_id', 1);
        formData.append('description', product.description);

        try {
            await axios.post(`${url}/api/products`, formData);
            console.log('Product added successfully!');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };


    const [category, setCategory] = useState({
        name: '',
        image: '',
        description: ""
    });

    const handleChangeCategory = (e) => {
        const { name, value, files } = e.target;
        setCategory((prevProduct) => ({
            ...prevProduct,
            [name]: name === 'image' ? files[0] : value,
        }));
    };
    console.log(typeof (id))


    const handleSubmitCategory = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('_method', 'PATCH');
        formData.append('name', category.name);
        formData.append('image', category.image);
        formData.append('description', category.description);
        const id = Number(1)
        console.log(id)
        await axios.post(`${url}/api/category/` + id, formData)
            .then(({ data }) => {
                Swal.fire({
                    icon: "success",
                    text: data.message
                })
            }).catch(({ response }) => {
                if (response.status === 422) {
                    console.log(response.data.errors)
                } else {
                    Swal.fire({
                        text: response.data.message,
                        icon: "error"
                    })
                }
            })
    };



    // const handleSubmitCategory = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('name', category.name);
    //     formData.append('image', category.image);
    //     formData.append('description', category.description);
    //     await axios.post(`${url}/api/category/`, formData)
    //         .then(({ data }) => {
    //             Swal.fire({
    //                 icon: "success",
    //                 text: data.message
    //             })
    //         }).catch(({ response }) => {
    //             if (response.status === 422) {
    //                 console.log(response.data.errors)
    //             } else {
    //                 Swal.fire({
    //                     text: response.data.message,
    //                     icon: "error"
    //                 })
    //             }
    //         })
    // };






    return (
        <>
            {cat.map((item) => (
                <p>Name{item.name}</p>
            ))}
            <div className='mt-36'>
                <h2>Add categorie</h2>
                <form onSubmit={handleSubmitCategory} encType="multipart/form-data">
                    <input type="text" name="name" value={category.name} onChange={(e) => setCategory({ ...category, name: e.target.value })} />
                    <input type="text" name="description" value={category.description} onChange={(e) => setCategory({ ...category, description: e.target.value })} />
                    <input type="file" name="image" onChange={(e) => setCategory({ ...category, image: e.target.files[0] })} />

                    {/* <input type="text" name="nam" value={nam} onChange={(e) => setNam(e.target.value)} />
                    <input type="text" name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
                    <input type="file" name="image" value={image} onChange={(e) => setImage(e.target.value)} /> */}

                    <button type="submit">Add categorie</button>
                </form>

            </div>


            <div className='mt-36'>
                <h2>Add Product</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={handleChange} /> <br />

                    <label>qnt_dispo:</label>
                    <input type="text" name="qnt_dispo" onChange={handleChange} /> <br />

                    <label>prix_vent:</label>
                    <input type="text" name="prix_vent" onChange={handleChange} /> <br />

                    <label>kcal:</label>
                    <input type="number" name="kcal" onChange={handleChange} /> <br />


                    <label>Image:</label>
                    <input type="file" name="image" onChange={handleChange} /> <br />

                    <label>categorie:</label>
                    <input type="number" name="category_id" onChange={handleChange} /> <br />

                    <label>description:</label>
                    <input type="text" name="description" onChange={handleChange} /> <br />

                    <button type="submit">Add Product</button>
                </form>

            </div>



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
