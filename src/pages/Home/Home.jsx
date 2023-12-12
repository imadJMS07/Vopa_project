import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pic_6 from '../../images/Bg4.png';
import '../Home/Home.scss'
const Home = () => {
    const navigate = useNavigate();


    return (
        <>

            {/* <div className="container">
                <div class="grid grid-cols-2  " >
                    <div className=' w-full mt-96 col1 '>
                        <p>Healthy & Testy Food</p>
                        <p>Enjoy Healthy Life Testy Food</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Varius sed pharetra dictum neque massa congue</p>

                        <button >Testb1</button>
                        <button>Testb1</button>


                    </div>
                    <div className='w-full relative top-[102px] left-[64.49px]   '>
                        <img src={pic_6} alt="" className='sm:w-[1230px]' />
                    </div>
                </div>
            </div> */}

            <div>
                Home
            </div>
        </>
    );
};

export default Home;
