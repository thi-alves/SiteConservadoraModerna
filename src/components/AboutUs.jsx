import React from 'react'
import { welcome_02,welcome_03 } from '../assets'

const AboutUs = () => {
  return (
    <section id='services'>
      <div className="container mx-auto py-10">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <img src={welcome_02} alt="" className='max-w-[55%] rounded-2xl shadow-box z-[3] float-left -rotate-6 ml-2' />
            <img src={welcome_03} alt="" className='max-w-[55%] rounded-2xl shadow-box z-[4] float-right -mt-[250px] rotate-3 mr-1' />
          </div>
          <div className="w-full">
            <div className="flex flex-col items-end text-end mb-8">
              <h4 className='h4 text-secondary'>—— Sobre nós</h4>
              <h2 className='h2'>Quem somos?</h2>
              <p className='p max-w-[480px] mb-8'>Somos a conservadora Moderna, nós temos mais de 15 Anos de experiência Nacional e Internacional.</p>
              <p className='p max-w-[480px]'> A conservadora Moderna preza pela satisfação de seus clientes trabalhando com eficiência e agilidade em cada atendimento. Dispomos de mão de obra especializada e treinada para limpezas em geral, conservação e higienização, atuando sempre com as técnicas mais modernas. Estamos preparados para atender comércios, empresas, instituições bancárias e condomínios. Entre em contato agora mesmo conosco e solicite um orçamento personalizado, estamos à disposição. Nossa sede está localizada em Contagem.</p>
            </div>
            <div className="flex justify-end">
              <button className='flex  items-center justify-center font-semibold shadow-box px-12 py-4 bg-primary   text-white rounded-md'>
                <div className='text-2xl mr-2' />
                <p className='p !font-bold'>Orçamento</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs