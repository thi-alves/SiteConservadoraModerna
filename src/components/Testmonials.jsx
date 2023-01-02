import React from 'react'
import { MdOutlineFormatQuote, MdStarRate,MdOutlineStarHalf,MdOutlineStarBorder } from 'react-icons/md'
import { user } from '../assets'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/animate'
const Testmonials = () => {
    return (
        <section id='testmonials'>
            <div className="relative flex flex-col justify-center items-center">
                <MdOutlineFormatQuote className='absolute z-[-0] right-0 m-8 top-0 text-[10rem] text-primary/20 hidden md:block'/>
                <MdOutlineFormatQuote className='absolute z-[-0] left-0 m-8 bottom-0 text-[10rem] text-primary/20 hidden md:block'/>
                <div className="container mx-auto py-10">
                    <div className="flex justify-center text-center mb-12">
                        <motion.div variants={fadeIn("down")} initial="initial" whileInView="whileInView" className="flex flex-col items-center">
                            <h4 className='h4 text-secondary'>—— Depoimentos</h4>
                            <h2 className='h2'>Veja o que nossos clientes tem a dizer sobre nós!</h2>
                            <p className='p text-black  max-w-[768px] mb-8'>Nossa empresa é reflexo dos resultados que colhem cada um de nossos clientes.</p>
                        </motion.div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="bg-white rounded-2xl shadow-box p-4 max-w-max relative space-y-2">
                            <div className="rounded-full overflow-hidden w-20 h-20 absolute right-0 mr-6 -mt-10 shadow-sm">
                                <img src={user} alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className="flex flex-col items-center">
                                <h4 className='h4 text-primary self-start'>Augusto Felipe</h4>
                                <p className='p max-w-[380px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere quas voluptate. Praesentium quibusdam quasi voluptatibus quae, accusantium, saepe, deleniti dolo</p>
                                <p></p>
                                <div className="bg-cente w-[80%] bg-gray h-[1px] hidden md:block mt-4 mb-2" />
                            </div>
                            <div className="flex justify-center items-center bg-primary rounded-2xl">
                                oi
                                <div className="flex gap-1">
                                    <MdStarRate className='text-secondary' />
                                    <MdStarRate className='text-secondary' />
                                    <MdStarRate className='text-secondary' />
                                    <MdStarRate className='text-secondary' />
                                    <MdStarRate className='text-secondary' />
                                </div>

                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-box p-4 max-w-max relative space-y-2">
                            <div className="rounded-full overflow-hidden w-20 h-20 absolute right-0 mr-6 -mt-10 shadow-sm">
                                <img src={user} alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className="flex flex-col items-center">
                                <h4 className='h4 text-primary self-start'>Augusto Felipe</h4>
                                <p className='p max-w-[380px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere quas voluptate. Praesentium quibusdam quasi voluptatibus quae, accusantium, saepe, deleniti dolo</p>
                                <p></p>
                                <div className="bg-cente w-[80%] bg-gray h-[1px] hidden md:block mt-4 mb-2" />
                            </div>
                            <div className="flex justify-center items-center bg-primary rounded-2xl">
                                oi
                                <div className="flex gap-1">
                                    <MdStarRate className='text-secondary' />
                                    <MdStarRate className='text-secondary' />
                                    <MdStarRate className='text-secondary' />
                                    <MdOutlineStarHalf className='text-secondary' />
                                    <MdOutlineStarBorder className='text-secondary' />
                                </div>

                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-box p-4 max-w-max relative space-y-2">
                            <div className="rounded-full overflow-hidden w-20 h-20 absolute right-0 mr-6 -mt-10 shadow-sm">
                                <img src={user} alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className="flex flex-col items-center">
                                <h4 className='h4 text-primary self-start'>Augusto Felipe</h4>
                                <p className='p max-w-[380px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere quas voluptate. Praesentium quibusdam quasi voluptatibus quae, accusantium, saepe, deleniti dolo</p>
                                <p></p>
                                <div className="bg-cente w-[80%] bg-gray h-[1px] hidden md:block mt-4 mb-2" />
                            </div>
                            <div className="flex justify-center items-center bg-primary rounded-2xl">
                                oi
                                <div className="flex gap-1">
                                    <MdStarRate className='text-secondary' />
                                    <MdStarRate className='text-secondary' />
                                    <MdStarRate className='text-secondary' />
                                    <MdStarRate className='text-secondary' />
                                    <MdOutlineStarHalf className='text-secondary' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[80%] h-[1px] bg-gray mt-12"></div>
            </div>
        </section>
    )
}

export default Testmonials