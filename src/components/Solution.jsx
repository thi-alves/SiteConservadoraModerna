import React from 'react'
import { us_01, us_02, us_03, us_04 } from '../assets'

const Solution = () => {
    return (
        <section id='solution'>
            <div className="bg-white">
                <div className='container mx-auto py-10'>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                        <div className="flex flex-1 flex-wrap gap-4 justify-center items-center">
                        <img src={us_01} alt="" className='max-w-[46%] rounded-2xl shadow-sm' />
                        <img src={us_02} alt="" className='max-w-[46%] rounded-2xl shadow-sm'/>
                        <img src={us_03} alt="" className='max-w-[46%] rounded-2xl shadow-sm'/>
                        <img src={us_04} alt="" className='max-w-[46%] rounded-2xl shadow-sm'/>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className='h4 text-secondary'>—— Sobre nós</h4>
                            <h2 className='h2 mb-4'>Atuamos exclusivamente na prestação de serviços.</h2>
                            <p className='text-end text-base mb-4'>Atualmente com prestação de serviços em Belo Horizonte e Região Metropolitana, envolvendo as cidades de Betim, Nova Lima, Contagem</p>
                            <p className='p text-justify'>Pensando em sempre oferecer os melhores serviços de conservadora de condomínios, nós da Conservadora Moderna oferecemos os serviços que descomplicam sua vida e otimizam os assuntos referentes a  limpeza e conservação do condomínios.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solution