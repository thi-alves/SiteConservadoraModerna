import React from 'react'
import { welcome } from '../assets'

const AboutUs = () => {
  return (
    <section id='services'>
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <img src={welcome} alt="" className='max-w-[100%]' />
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