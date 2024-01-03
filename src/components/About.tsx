import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-2 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quae ipsum natus. 
                    Temporibus maxime debitis nisi, perspiciatis repudiandae adipisci sit! Corrupti, 
                    sit deleniti beatae earum praesentium fugit sunt nulla provident cupiditate. Distinctio 
                    unde nesciunt quia sit magnam harum illo id, dicta dolor laborum eveniet rem saepe 
                    tempore, assumenda, labore facilis?
                </p>

                <br />

                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quae ipsum natus. 
                    Temporibus maxime debitis nisi, perspiciatis repudiandae adipisci sit! Corrupti, 
                    sit deleniti beatae earum praesentium fugit sunt nulla provident cupiditate. Distinctio 
                    unde nesciunt quia sit magnam harum illo id, dicta dolor laborum eveniet rem saepe 
                    tempore, assumenda, labore facilis?
                </p>
            </div>
        </div>
    )
}

export default About