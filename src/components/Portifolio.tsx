import React from 'react'
import Itau from '../assets/portfolio/itau.png'
import Healthy from '../assets/portfolio/healthy.png'
import SolarPower from '../assets/portfolio/solarpower.png'
import Doceo from '../assets/portfolio/doceo.png'
import TimeSeries from '../assets/portfolio/time_series.png'

const Portifolio = () => {

    const portifolios = [
        {
            id: 1,
            src: Itau,
            view: 'https://itau-next.netlify.app',
            code: 'https://github.com/LucasCruz2773/itau-nextjs'
        },
        {
            id: 2,
            src: Healthy,
            view: 'https://cheery-genie-0aa094.netlify.app',
            code: 'https://github.com/LucasCruz2773/healthy-food'
        },
        {
            id: 3,
            src: Doceo,
            view: 'https://doceo-platform.netlify.app/',
            code: 'https://github.com/LucasCruz2773/doceo'
        },
        {
            id: 4,
            src: SolarPower,
            code: 'https://github.com/LucasCruz2773/solarpower'
        },
        {
            id: 5,
            src: TimeSeries,
            code: 'https://github.com/LucasCruz2773/eletricity_generated'
        },
    ]

    return (
        <div id='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-2 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portifolios.map(({id, src,view, code}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt={`Portifolio-${id}`} className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                {view && <a target='_blank' rel='noreferrer' href={view} className='text-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>View</a>}
                                {code && <a target='_blank' rel='noreferrer' href={code} className='text-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>}
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