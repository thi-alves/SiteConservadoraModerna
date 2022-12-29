import React from 'react'
import { FaRegSadCry,FaRegSmileBeam } from "react-icons/fa"
const WhySolution = () => {
  return (
    <section id='whysolution'>
      <div className="">
        <div className="container mx-auto py-10 rounded-2xl">
          <div className="box">
            <div className="bg-white border border-gray/50  rounded-2xl p-4 grid grid-rows-2 relative">
              <FaRegSadCry className='left-0 top-0 absolute m-4 text-[12rem] text-gray/20 hidden md:block' />
              <FaRegSmileBeam className='right-0 bottom-0 absolute m-4 text-[12rem] text-secondary/20 hidden md:block' />
              <div className="flex flex-col justify-center items-center text-center border-b border-gray/50 py-10 ">
                <h3 className='h3 text-gray mb-2'>Isso te aborrece?</h3>
                <p className='p'>Ambientes desorganizados, sujos e em desarmonia.</p>
                <p className='p'>Equipe desajustada e sem treinamento adequado.</p>
                <p className='p'>Atividade mal feita e sem padrão de qualidade.</p>
                <p className='p'>Desgaste emocional por falta de profissionais competentes.</p>
              </div>

              <div className="flex flex-col justify-center items-center text-center">
                <h3 className='h3 text-secondary mb-2'>Isso te alegra !</h3>
                <p className='p'>Sem problemas com desorganização e falta de harmonia de equipe.</p>
                <p className='p'>Entrosamento total da equipe, garantindo os resultados que você precisa.</p>
                <p className='p'>Todos os serviços feitos com a máxima qualidade, eficiência e garantia.</p>
                <p className='p'>Tempo livre, garantia de serviços bem feitos, evitar preocupações.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhySolution