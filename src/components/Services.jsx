import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/animate'


const Services = () => {
    return (
        <section id='services'>
            <div className="bg-white">
                <div className="container mx-auto py-10">
                    <motion.div variants={fadeIn("down")} initial="initial" whileInView="whileInView" className="flex flex-col justify-center items-center mb-8">
                        <h4 className='h4 text-secondary'>—— Nossos serviços</h4>
                        <h2 className='h2'>Podemos te ajudar?</h2>
                        <p className='p text-black text-center max-w-[768px]'>Conheça um pouco mais dos serviços oferecidos por nossa equipe de facilites.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 justify-items-center gap-8">
                        <div className="border-b-8 border-primary  p-4 ">
                            <div className="flex justify-center items-center">
                            {/* <div className="w-20 h-20 mb-4 bg-primary rounded-2xl p-3">
                                <InternalCleaning/>
                            </div> */}
                            </div>
                            <h4 className='h4 text-center'>Limpeza Interna</h4>
                            <p className='p text-left'>Limpeza de área interna consiste na organização e limpeza áreas fechadas de um condominio ex: Elevador, Recepção, Escadas e etc..</p>
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
                            <p className='p text-left'>Em áreas externas é recomendado a lavagem com lavadora de alta pressão com jato leque e detergente alcalino, que remove a sujeira com mais...</p>
                        </div>
                        <div className="border-b-8 border-primary  p-4 ">
                            <div className="flex justify-center items-center">
                            {/* <div className="w-20 h-20 mb-4 bg-primary rounded-2xl p-3">
                                <InternalCleaning/>
                            </div> */}
                            </div>
                            <h4 className='h4 text-center'>Higienização Resérvatorios</h4>
                            <p className='p text-left'>A limpeza é essencial e deve ser feita a cada seis meses. Por profissional especializado e com produtos certificados pela ANVISA.</p>
                        </div>
                        <div className="border-b-8 border-primary  p-4 ">
                            <div className="flex justify-center items-center">
                            {/* <div className="w-20 h-20 mb-4 bg-primary rounded-2xl p-3">
                                <InternalCleaning/>
                            </div> */}
                            </div>
                            <h4 className='h4 text-center'>Higienização Esgoto</h4>
                            <p className='p text-left'>A limpeza do esgoto é manutenção obrigatoria dos condomínios. Nossos técnicos atuam com os devidos cuidados para que a operação ocorra de forma segura e ágil.</p>
                        </div>
                        <div className="border-b-8 border-primary  p-4 ">
                            <div className="flex justify-center items-center">
                            {/* <div className="w-20 h-20 mb-4 bg-primary rounded-2xl p-3">
                                <InternalCleaning/>
                            </div> */}
                            </div>
                            <h4 className='h4 text-center'>Jardinagem</h4>
                            <p className='p text-left'>Os jardins são áreas importantes para o convívio e valorização do patrimônio. Através do paisagismo conseguimos criar ambientes bonitos e agradáveis que impactam a todos.</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services