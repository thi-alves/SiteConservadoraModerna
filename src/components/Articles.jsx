import React from 'react'
import { article,article_01, article_03 } from '../assets'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/animate'
const Articles = () => {
  return (
    <section id='articles'>
      <div className="bg-white">
        <div className="container mx-auto py-10">

          <motion.div variants={fadeIn("down")} initial="initial" whileInView="whileInView" className="box">
            <div className="flex flex-col justify-center items-center mb-8">
              <h4 className='h4 text-secondary'>—— Artigos e Postagens</h4>
              <h2 className='h2'>Novidades e Blog's</h2>
              <p className='p text-black text-center max-w-[768px]'>Novidades e todas as matérias especiais do Moderna você confere nesta seção. Novos equipamentos, novos métodos tudo em primeira mão.</p>
            </div>
          </motion.div>

          <div className="box md:mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="shadow-box rounded-2xl flex flex-col  flex-1 border border-gray/50 overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="absolute z-[2] bg-secondary p-2 left-0 bottom-0 m-4 rounded-md font-bold shadow-sm">Novidades</div>
                  <img src={article_01} alt="" className='z-[1] w-full h-full ease-in-out duration-300 hover:scale-105' />
                </div>
                <div className="info p-2">
                  <h4 className='h4 mb-1'>10 Produtos corretos para limpeza</h4>
                  <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit, qui molestias adipisci ipsam labore expedita sit amet consectetur adipisicing elit. Esse fugitid dolore ali</p>
                </div>
              </div>
              <div className="shadow-box rounded-2xl flex flex-col  flex-1 border border-gray/50 overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="absolute z-[2] bg-secondary p-2 left-0 bottom-0 m-4 rounded-md font-bold shadow-sm">Regras</div>
                  <img src={article} alt="" className='z-[1] w-full h-full ease-in-out duration-300 hover:scale-105' />
                </div>
                <div className="info p-2">
                  <h4 className='h4 mb-1'>Novas regras CPC</h4>
                  <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit, qui molestias adipisci ipsam labore expedita sit amet consectetur adipisicing elit. Esse fugitid dolore ali</p>
                </div>
              </div>
              <div className="shadow-box rounded-2xl flex flex-col  flex-1 border border-gray/50 overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="absolute z-[2] bg-secondary p-2 left-0 bottom-0 m-4 rounded-md font-bold shadow-sm">Alertas</div>
                  <img src={article_03} alt="" className='z-[1] w-full h-full ease-in-out duration-300 hover:scale-105' />
                </div>
                <div className="info p-2">
                  <h4 className='h4 mb-1'>Coronavírus COVID-19</h4>
                  <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit, qui molestias adipisci ipsam labore expedita sit amet consectetur adipisicing elit. Esse fugitid dolore ali</p>
                </div>
              </div>
         
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Articles