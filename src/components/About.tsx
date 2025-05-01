import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-2 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    I'm a versatile full-stack JavaScript developer with a strong focus on front-end development 
                    and solid performance on the back end. I have deep expertise in frameworks like React and NestJS, 
                    and I'm committed to staying up to date with the latest industry trends to build high-performance web applications. 
                    I'm passionate about continuous learning and always eager to develop innovative solutions.
                </p>

                <br />

                <p className='text-xl'>
                    Lately, I’ve been diving into data science—exploring data analysis, visualization, and machine learning. 
                    In my current postgraduate studies, I work with various ML models using Python, TensorFlow, and scikit-learn. 
                    The combination of theoretical knowledge and hands-on experience has been incredibly rewarding. 
                    I’m always open to connecting with fellow data science enthusiasts to exchange insights and experiences!
                </p>
            </div>
        </div>
    )
}

export default About