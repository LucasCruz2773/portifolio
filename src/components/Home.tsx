import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'
const Home = () => {
    return (
        <div id='home' className='flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I'm a Full Stack Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I have 4 years of experience developing softwares.
                        Currently, I work on web application using technologies like
                        React, Tailwind, Next JS and also with back-end applications like NodeJS and NestJS.
                    </p>

                    <div>
                        <Link to='portfolio' smooth duration={500}>
                            <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group'>
                                Portfolio
                                <span className='group-hover:rotate-90 duration-300'>
                                    <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='h-72 w-72 mb-2'>
                    <img src={HeroImage} alt="My Profile" className='rounded-2xl mx-auto object-cover w-full h-full' />
                </div>
            </div>
        </div>
    )
}

export default Home