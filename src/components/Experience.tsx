import React from 'react'

import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactImage from '../assets/react.png';
import Nextjs from '../assets/nextjs.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Nodejs from '../assets/nodejs.png';
import Nestjs from '../assets/nestjs.png';

const Experience = () => {

    const experiences = [
        {
            id: 1,
            title: 'HTML',
            image: Html,
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            title: 'CSS',
            image: Css,
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            title: 'JavaScript',
            image: Javascript,
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            title: 'React',
            image: ReactImage,
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            title: 'Tailwind',
            image: Tailwind,
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            title: 'NextJS',
            image: Nextjs,
            style: 'shadow-white'
        },
        {
            id: 7,
            title: 'GitHub',
            image: Github,
            style: 'shadow-gray-400'
        },
        {
            id: 8,
            title: 'NodeJS',
            image: Nodejs,
            style: 'shadow-green-400'
        },
        {
            id: 9,
            title: 'NestJS',
            image: Nestjs,
            style: 'shadow-red-400'
        }
    ]

    return (
        <div id='experience' className='bg-gradient-to-b from-gray-800 to-black w-full md:h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-2 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {experiences.map(({id, image, title, style}) => (
                        <div key={id} className={`shadow hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={image} alt={title} className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience