import React, { useEffect } from 'react'
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aos from 'aos';


import '../../pages/Home/Home.scss'
import data from '../../data/About.json'

import image2 from '../../images/img2.png'
import image3 from '../../images/img3.png'
import image4 from '../../images/img4.png'
import Bg from '../../images/Bg3.png'
import Pic_2 from '../../images/pic_2.png'
import Stars from '../../images/stars.png'
import bgWelcome from '../../images/hero_bg2.png'
// import No9at from '../../images/'

gsap.registerPlugin(ScrollTrigger);
export default function Home() {


    useEffect(() => {
        Aos.init({ duration: 3000 });
    });
    useEffect(() => {
        const matches = document.querySelectorAll("p");
        matches.forEach((target) => {
            gsap.to(target, {
                backgroundPositionX: "0%",
                stagger: 9,
                scrollTrigger: {
                    trigger: target,
                    scrub: true,
                    start: "top center",
                    end: "bottom 40%",
                },
            });
        });
        return () => { };
    }, []);

    return (
        <>
            <div className="mt-24 mb-96 gridHome">
                <div className='gridHome grid grid-cols-1 sm:grid-cols-2 gap-4'>

                    <div className='space-y-5 relative xl:left-36 xl:top-20'>
                        <p className='miniver' style={{}}>
                            Healthy & Testy Food <hr className='ml-6 w-9 inline-block' />
                        </p>
                        <p className='inter text-6xl  opacity-[0.7]' >
                            Enjoy Healthy Life <br /> & Testy Food. <img src={Stars} className='inline-block' alt="" />
                        </p>
                        <p className='kalam'>
                            Indulge in a life of wellness with the perfect fusion of health and tasty delights. <br /> Enjoy a healthy life and delicious food, making every moment a celebration of well-being
                        </p>

                        <div className='flex flex-row gap-5'>
                            <button type="button" className="kalamButton w-44  h-11  text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 ">Show More</button>
                            <button type="button" className="kalam border-green-800 border-[1.5px] text-green-800 w-44  h-11  text-[17px] placeholder-gray-800 mt-3 rounded-md  ">Reserve Now</button>

                        </div>
                    </div>

                    <div className="relative">
                        <img src={Bg} alt="" className="absolute inset-0  object-cover " />
                        <img src={Pic_2} className='circle-image-pic2 xl:max-w-[60vh] xl:ml-32 xl:mt-28 absolute top-0 left-0 ' alt="" />
                    </div>

                </div>
            </div>

            <div
                className='maw-w-[90vh]'
                style={{
                    backgroundImage: `url(${bgWelcome})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundPepeat: "no-repeat",
                }}
            >
                <div className='h-[550px] sm:h-[680px] flex  flex-col space-y-8'>
                    <div className='flex justify-center mx-auto flex-col  '>
                        <p className='miniver text-6xl mt-32 flex justify-center '>Welcome</p>
                        <Text>
                            <p className='kalam text-2xl mt-6'>Discover healthy and delicious cuisine at VOPA in Tangier, favoring freshness and diversity. Our balanced menu offers</p>
                            <p className='kalam text-2xl mt-3'>unique dishes for all tastes. With quality ingredients, our passionate team guarantees you an exceptional culinary</p>
                            <p className='kalam text-2xl mt-3'>experience, combining health and pleasure. Join us in redefining your diet at VOPA.</p>
                        </Text>
                        <div className="flex justify-center mt-12">
                            <button type="button" className=" kalamButton w-44  h-11  text-[17px] placeholder-gray-800 mt-3 rounded-md bg-slate-300 ">Show More</button>
                        </div>
                    </div>
                </div>
            </div >


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-[90px] flex justify-center">
                <div className="space-x-2 flex justify-center md:col-span-2 lg:col-span-1 " data-aos="fade-left" >
                    <img src={image3} alt="" className="img3 ml-4 md:ml-[180px] mt-4 md:mt-16 lg:mt-0 hidden lg:flex xl:block 2xl:block" />
                </div>
                <div className="twoimage flex justify-center flex-col space-y-4 mt-8 md:mt-[60px]" data-aos="fade-up" >
                    <img src={image2} alt="" className="img" data-aos="fade-left" />
                    <img src={image4} alt="" className="img" data-aos="fade-up" />
                </div>
                <div className="paghar relative mt-8 md:mt-[100px] lg:right-[150px]">
                    <React.Fragment >
                        <h1 className="miniver text-2xl" data-aos="fade-right">Healthy Food <hr className='miniver inline-block w-20 h-1' /> </h1>
                        <h6 className="inter text-4xl" data-aos="fade-right"><span className='t' style={{ color: '#195A00' }}>Food </span><span className='relative '>is an important</span></h6>
                        <h6 className="inter text-4xl" data-aos="fade-right"><span className='t' style={{ color: '#195A00' }}>part of a balanced  </span><span className='relative '>Diet</span></h6>
                        <Text>
                            <p className="kalam w-full mt-5" style={{ fontSize: '20px' }} data-aos="fade-right">A well-rounded diet is crucial for overall health, providing  </p>
                            <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-left">essential nutrients that support bodily functions.  </p>
                            <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-right"> Beyond physical benefits, food also carries cultural and </p>
                            <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-left">social significance, contributing to a balanced and </p>
                            <p className="kalam w-full " style={{ fontSize: '20px' }} data-aos="fade-right"> fulfilling lifestyle.</p>
                        </Text>
                    </React.Fragment>
                </div>
            </div>


            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}




const Text = styled.div`


                p {
                    background: linear-gradient(to right,  #195A00 50%, black 50%);
                background-size: 200% 100%;
                background-position-x: 100%;
                color: transparent;
                background-clip: text;
                -webkit-background-clip: text;
                // margin-left: 50px;
                // margin-top: 20px;
                // margin-bottom: -6px;
                user-select: none;
                line-height:1.5

  }
                `;
















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import StepWizard from 'react-step-wizard';
// const Home = () => {
//     const [product, setProduct] = useState({
//         name: '',
//         category_id: '',
//         image: null,
//         desc: '',
//         prix: 0
//     });

//     const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         setProduct((prevProduct) => ({
//             ...prevProduct,
//             [name]: name === 'image' ? files[0] : value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('name', product.name);
//         formData.append('prix', product.prix);
//         formData.append('image', product.image);
//         formData.append('description', product.desc);
//         formData.append('category_id', 1);

//         try {
//             await axios.post('http://127.0.0.1:8000/api/products', formData);
//             console.log('Product added successfully!');
//         } catch (error) {
//             console.error('Error adding product:', error);
//         }
//     };




// const [product, setProduct] = useState({
//     name: '',
//     image: null,
// });

// const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setProduct((prevProduct) => ({
//         ...prevProduct,
//         [name]: name === 'image' ? files[0] : value,
//     }));
// };

// const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('name', product.name);
//     formData.append('image', product.image);

//     try {
//         await axios.post('http://127.0.0.1:8000/api/categories', formData);
//         console.log('category added successfully!');
//     } catch (error) {
//         console.error('Error adding category:', error);
//     }
// };








//     return (
//         <>

//             <div className='mt-96'>
//                 <h2>Add Product</h2>
//                 <form onSubmit={handleSubmit}>
//                     <label>Name:</label>
//                     <input type="text" name="name" value={product.name} onChange={handleChange} /> <br />


//                     <label>categorie:</label>
//                     <input type="text" name="category_id" value={product.category_id} onChange={handleChange} /> <br />
//                     <label>prix:</label>
//                     <input type="text" name="prix" value={product.prix} onChange={handleChange} /> <br />



//                     <label>Image:</label>
//                     <input type="file" name="image" onChange={handleChange} /> <br />
//                     <label>desc:</label>
//                     <input type="text" name="desc" onChange={handleChange} /> <br />

//                     <button type="submit">Add Product</button>
//                 </form>

//             </div>
//         </>



//     )
// };

// export default Home;



