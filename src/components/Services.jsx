import React from 'react'
import { InternalCleaning } from '../assets/services'

const Services = () => {
    return (
        <section id='services'>
            <div className="bg-white">
                <div className="container mx-auto py-10">
                    <div className="flex flex-col justify-center items-center mb-8">
                        <h4 className='h4 text-secondary'>—— Nossos serviços</h4>
                        <h2 className='h2'>Podemos te ajudar?</h2>
                        <p className='p text-black text-center max-w-[768px]'>Conheça um pouco mais dos serviços oferecidos por nossa equipe de facilites.</p>
                    </div>
                    <div className="grid md:grid-cols-3 justify-items-center gap-8">
                        <div className="border-b-8 border-primary  p-4 ">
                            <div className="flex justify-center items-center">
                            {/* <div className="w-20 h-20 mb-4 bg-primary rounded-2xl p-3">
                                <InternalCleaning/>
                            </div> */}
                            </div>
                            <h4 className='h4 text-center'>Limpeza Interna</h4>
                            <p className='p text-left'>Limpeza de área interna consiste na organização e remoção dos sujos das áreas fechadas de um condominio ex: Elevador, Recepção, Escadas e etc..</p>
                        </div>
                        <div className="border-b-8 border-primary  p-4 ">
                            <div className="flex justify-center items-center">
                            {/* <div className="w-20 h-20 mb-4 bg-primary rounded-2xl p-3">
                                <InternalCleaning/>
                            </div> */}
                            </div>
                            <h4 className='h4 text-center'>Limpeza Externa</h4>
                            <p className='p text-left'>Limpeza de área externa consiste na remoção de impurezas das áreas abertas do condominio ex: Estacionamentos, Calçadas, Corredores e etc... </p>
                        </div>
                        <div className="border-b-8 border-primary  p-4 ">
                            <div className="flex justify-center items-center">
                            {/* <div className="w-20 h-20 mb-4 bg-primary rounded-2xl p-3">
                                <InternalCleaning/>
                            </div> */}
                            </div>
                            <h4 className='h4 text-center'>Jateação Pisos e Paredes</h4>
                            <p className='p text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id placeat quod.it ullam quisquam nisi labore voluptate libero saepe earum maxime</p>
                        </div>
                        <div className="border-b-8 border-primary  p-4 ">
                            <div className="flex justify-center items-center">
                            {/* <div className="w-20 h-20 mb-4 bg-primary rounded-2xl p-3">
                                <InternalCleaning/>
                            </div> */}
                            </div>
                            <h4 className='h4 text-center'>Higienização Resérvatorios</h4>
                            <p className='p text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id placeat quod.it ullam quisquam nisi labore voluptate libero saepe earum maxime</p>
                        </div>
                        <div className="border-b-8 border-primary  p-4 ">
                            <div className="flex justify-center items-center">
                            {/* <div className="w-20 h-20 mb-4 bg-primary rounded-2xl p-3">
                                <InternalCleaning/>
                            </div> */}
                            </div>
                            <h4 className='h4 text-center'>Higienização Esgoto</h4>
                            <p className='p text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id placeat quod.it ullam quisquam nisi labore voluptate libero saepe earum maxime</p>
                        </div>
                        <div className="border-b-8 border-primary  p-4 ">
                            <div className="flex justify-center items-center">
                            {/* <div className="w-20 h-20 mb-4 bg-primary rounded-2xl p-3">
                                <InternalCleaning/>
                            </div> */}
                            </div>
                            <h4 className='h4 text-center'>Jardinagem</h4>
                            <p className='p text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id placeat quod.it ullam quisquam nisi labore voluptate libero saepe earum maxime</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services