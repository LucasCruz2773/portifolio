import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-2 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    I'm a versatile full stack JavaScript developer. 
                    I have specialized in front-end development, with excellent performance in back-end dev as well.
                    I have strong skills in frameworks like React and NestJS. I stay up to date with the
                    latest industry trends and technologies to create high-performance web applications. I have a strong
                    dedication to learning and developing new solutions.
                </p>

                <br />

                <p className='text-xl'>
                I've been deep into data science, exploring data analysis, visualization, and machine learning. 
                Currently, I'm working in my postgraduate with various ML models, diving into Python, TensorFlow, and scikit-learn. 
                The mix of theory and hands-on work is incredibly exciting. Eager to connect with others passionate 
                about data science and share experiences!
                </p>
            </div>
        </div>
    )
}

export default About