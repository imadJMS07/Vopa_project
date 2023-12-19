// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import pic_6 from '../../images/Bg4.png';
// import '../Home/Home.scss'
// const Home = () => {
//     const navigate = useNavigate();


//     return (
//         <>

//             <div className="container">
//                 <div class="grid grid-cols-2  " >
//                     <div className=' w-full mt-96 col1 '>
//                         <p>Healthy & Testy Food</p>
//                         <p>Enjoy Healthy Life Testy Food</p>

//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Varius sed pharetra dictum neque massa congue</p>

//                         <button >Testb1</button>
//                         <button>Testb1</button>


//                     </div>
//                     <div className='w-full relative top-[102px] left-[64.49px]   '>
//                         <img src={pic_6} alt="" className='sm:w-[1230px]' />
//                     </div>
//                 </div>
//             </div>

//             <div>
//                 Home
//             </div>
//         </>
//     );
// };

// export default Home;










// resources/js/components/AddProduct.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [product, setProduct] = useState({
        name: '',
        category_id: '',
        image: null,
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
        formData.append('prix', 35);
        formData.append('image', product.image);
        formData.append('category_id', 4);

        try {
            await axios.post('http://127.0.0.1:8000/api/products', formData);
            console.log('Product added successfully!');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    // const [products, setProducts] = useState([])
    // useEffect(() => {
    //     fetchProducts();
    // }, [])
    // const fetchProducts = async () => {
    //     await axios.get('http://127.0.0.1:8000/api/products').then(({ data }) => { setProducts(data) })
    // }



    return (
        <div className='mt-96'>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={product.name} onChange={handleChange} />



                <label>Image:</label>
                <input type="file" name="image" onChange={handleChange} />

                <button type="submit">Add Product</button>
            </form>

            {/* <table className="table">
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">prix</th>
                        <th scope="col">categorie</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length > 0 && (
                            products.map((row, key) => (
                                <tr key={key}>
                                    <td>{row.name}</td>
                                    <td>{row.prix}</td>
                                    <td>{row.category_id}</td>
                                    <td>
                                        <img width="800px" src={`http://127.0.0.1:8000/storage/product/image/${row.image}`} />
                                    </td>
                                </tr>
                            ))
                        )
                    }

                </tbody>
            </table> */}


        </div>
    );
};

export default Home;

