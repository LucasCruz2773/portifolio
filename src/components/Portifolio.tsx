import React from 'react'
import ArrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import InstallNode from '../assets/portfolio/installNode.jpg'
import Navbar from '../assets/portfolio/navbar.jpg'
import ReactParallax from '../assets/portfolio/reactParallax.jpg'
import ReactSmooth from '../assets/portfolio/reactSmooth.jpg'
import ReactWeather from '../assets/portfolio/reactWeather.jpg'

const Portifolio = () => {

    const portifolios = [
        {
            id: 1,
            src: ArrayDestruct,
        },
        {
            id: 2,
            src: ReactParallax,
        },
        {
            id: 3,
            src: Navbar,
        },
        {
            id: 4,
            src: ReactSmooth,
        },
        {
            id: 5,
            src: InstallNode,
        },
        {
            id: 6,
            src: ReactWeather,
        },
    ]

    return (
        <div id='portifolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-2 border-gray-500'>Portifolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portifolios.map(({id, src}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt={`Portifolio-${id}`} className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Portifolio