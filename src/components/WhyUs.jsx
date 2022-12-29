import React from 'react'
import { MdLanguage, MdOutlineStars, MdMyLocation } from "react-icons/md"
import Itau from '../assets/partners/Itau'

const WhyUs = () => {
  return (
    <section id='about'>
      <div className="bg-white">
        <div className="container mx-auto py-10">
          <div className="header-section">
            <h4 className='h4 text-secondary'>—— Sobre nós</h4>
            <h2 className='h2'>Porquê nos escolher?</h2>
            <p className='p text-black  max-w-[480px]'>O propósito do nosso negócio é conquistar clientes que conquistam clientes. Profissionais altamente qualificados, motivados e treinados a entregar o seu melhor.</p>
          </div>
          <div className="grid md:grid-cols-3 w-full h-max gap-8 mt-8 mb-14">
            <div className="bg-primary/90 text-white p-3 rounded-2xl duration-300 transition-colors">
              <div className="flex flex-col justify-center items-center">
                <div className="w-max p-2 mb-2">
                  <MdMyLocation className='text-6xl text-secondary filter:shadow-box' />
                </div>
                <div className="header">
                  <h4 className='h4 text-center'>Missão</h4>
                  <p className='p text-left'>Prestar serviços de qualidade, com excelência e transparência, garantindo aos clientes a comodidade nas atividades condominiais e patrimoniais, propondo e oferendo soluções.</p>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 p-3 rounded-2xl border border-primary/10">
              <div className="flex flex-col justify-center items-center">
                <div className="w-max p-2 mb-2">
                  <MdLanguage className='text-6xl text-secondary' />
                </div>
                <div className="header">
                  <h4 className='h4 text-center'>Visão</h4>
                  <p className='p text-left'>Ser líder do mercado de administração de condomínios em Belo Horizonte e região metropolitana, garantindo a qualidade dos serviços prestados, estabelecendo relações</p>
                </div>
              </div>
            </div>
            <div className="bg-primary/90 text-white p-3 rounded-2xl duration-300 transition-colors">
              <div className="flex flex-col justify-center items-center">
                <div className="w-max p-2 mb-2">
                  <MdOutlineStars className='text-6xl text-secondary' />
                </div>
                <div className="header">
                  <h4 className='h4 text-center'>Valores</h4>
                  <p className='p text-left'>Ética, transparência, eficiência, valorização dos colaboradores, fornecedores e parceiros, foco na satisfação do cliente através de parcerias duradouras.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className='h4'>Nossos parceiros</h4>
            <p className='p'>Através do zelo e transparência, firmamos parcerias duradouras e sólidas.</p>
          </div>
          <div className="w-full h-[1px] bg-gray mb-10 mt-2" />
          <div className="flex justify-center items-center gap-4 overflow-x-auto">
            <Itau className="text" />
            <Itau className="text" />
            <Itau className="text" />
            <Itau className="text" />
            <Itau className="text" />
          </div>
          <div className="w-full h-[1px] bg-gray my-10" />
        </div>
      </div>
    </section>
  )
}

export default WhyUs