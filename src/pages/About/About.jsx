import React from 'react'
import '../About/About.scss'
import data from '../../data/About.json'
import image1 from '../../images/Team.png'
import image2 from '../../images/img2.png'
import image3 from '../../images/img3.png'
import image4 from '../../images/img4.png'
import hero1 from '../../images/hero1.png'
import hero2 from '../../images/hero2.png'
import hero3 from '../../images/hero3.png'










export default function About() {

    const { teams, clients, values, vision } = data

    teams.map((i) => {
        console.log(i.title)
    })
    return (
        <>
            <div className="bg-cover bg-center mt-[100px] bg-image">
                <div className="flex   justify-center relative top-[120px]">
                    <p className="about font-bold  text-9xl sm:text-7xl">About Us </p>
                </div>
                <img src={hero1} alt="" className='circle-image ml-11' />
                <img src={hero2} alt="" className='circle-image ml-96 mt-10' />
                <div className='flex justify-end mr-11'>

                    <img src={hero3} alt="" className='circle-image ml-11' />
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-[90px] flex justify-center">
                <div className="flex justify-center md:col-span-2 lg:col-span-1">
                    <img src={image3} alt="" className="img3 ml-4 md:ml-[180px] mt-4 md:mt-16 lg:mt-0 hidden lg:flex xl:block 2xl:block" />
                </div>
                <div className="flex flex-col space-y-4 mt-8 md:mt-[60px]">
                    <img src={image2} alt="" className="img" />
                    <img src={image4} alt="" className="img" />
                </div>
                <div className="paghar relative mt-8 md:mt-[100px] lg:right-[150px]">
                    {teams.map((item, index) => (
                        <React.Fragment key={index}>
                            <h1 className="miniver text-2xl">{item.title} <hr className='miniver inline-block w-20 h-1' /> </h1>
                            <h6 className="inter text-4xl "><span className='t' style={{ color: '#195A00' }}>{item.let1}</span><span className='relative '>{item.grand1}</span></h6>
                            <h6 className="inter text-4xl" style={{ color: '#195A00' }}>{item.grand2}</h6>
                            <h6 className="inter text-4xl">{item.grand3} <span className='tracking-tight relative right-2' style={{ color: '#195A00' }}>{item.let2}</span></h6>
                            <p className="kalam w-full mt-5" style={{ fontSize: '20px' }}>{item.pharagraph}</p>
                        </React.Fragment>
                    ))}
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-[90px] ">

                <div className="paghar relative mt-8 md:mt-[150px] md:left-[210px] ">
                    {clients.map((item, index) => (
                        <React.Fragment key={index}>
                            <h1 className="miniver text-2xl">{item.title} <hr className='miniver inline-block w-20 h-1' /> </h1>
                            <h6 className="inter text-4xl "><span className='t' style={{ color: '#195A00' }}>{item.let1}</span><span className='relative '>{item.grand1}</span></h6>
                            <h6 className="inter text-4xl" style={{ color: '#195A00' }}>{item.grand2}</h6>
                            <h6 className="inter text-4xl">{item.grand3} <span className='tracking-tight relative right-2' style={{ color: '#195A00' }}>{item.let2}</span></h6>
                            <p className="kalam w-full mt-9" style={{ fontSize: '20px' }}>{item.pharagraph}</p>
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex flex-col  space-y-4 mt-8 md:mt-[80px] md:ml-[250px]">
                    <img src={image2} alt="" className="img" />
                    <img src={image4} alt="" className="img" />
                </div>
                <div className="flex justify-center md:col-span-2 lg:col-span-1">
                    <img src={image3} alt="" className="img3 ml-4 md:mr-[150px] mt-4 md:mt-16 lg:mt-0 hidden lg:flex xl:block 2xl:block" />
                </div>

            </div>





            <div className=" space-x-12 flex justify-center items-center h-screen mt-[-100px]" >
                <div className='w-[600px] mb-9'>
                    {values.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className='mt-16 '>

                                <h1 className='kalam flex justify-center text-4xl '>{item.title}</h1>
                                <p className='kalam font-bold ' style={{ zIndex: '99999999' }} >{item.pharagraph}</p>
                            </div>
                            <img src={hero1} alt="" className=' circle-image ml-11 relative bottom-12' />
                            {/* <img src={hero2} alt="" className='circle-image ml-96 mt-10' /> */}

                            {/* <img src={hero3} alt="" className='circle-image ml-11' /> */}
                        </React.Fragment>
                    ))}
                </div>

                <div className='w-[600px]'>
                    {vision.map((item, index) => (
                        <React.Fragment key={index}>
                            <h1 className='kalam flex justify-center text-4xl'>{item.title}</h1>
                            <p className='kalam text-xl font-bold'>{item.pharagraph}</p>
                        </React.Fragment>
                    ))}
                </div>
            </div>










            <div className='h-96'>

            </div>

        </>
    )
}
;




