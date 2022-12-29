import React from 'react'
import { MdOutlineLens, MdCleaningServices, MdOutlineReceiptLong, MdOutlineStar, MdSmartDisplay,MdOutlineContacts,MdAccessTime } from "react-icons/md"
import { user, welcome } from '../assets'
import { FcGoogle } from 'react-icons/fc'

const Hero = () => {
  return (
    <section id='hero' className='relative'>
      <MdOutlineLens className='absolute text-[40rem] text-primary/5 left-0 top-0 -z-[0]'/>
      <MdOutlineLens className='absolute text-[40rem] text-primary/5 right-0 bottom-0 -z-[0] hidden md:block'/>
      <div className='container mx-auto'>
        <div className="flex flex-col-reverse md:flex-row content-center gap-4 md:h-screen">
          <div className="flex flex-col items-start justify-center max-w-[568px]">
            <div className="flex flex-col mb-10">
              <h1 className='h1'>Qualidade em <span className='text-secondary'>Limpeza</span> para seu condomínio.</h1>
              <p className='p'>Fundada em 1995 pela Maria I. Ferreira, fornecemos serviços no ramo de facilities com foco na qualidade e eficiência, atuando na conservação e limpeza especializada de espaços comerciais, industriais e condomínios. Nosso ideal é propiciar ambientes limpos, organizados e ideais para o uso, levando em consideração a otimização de tempo e custos coerentes com o mercado.</p>
            </div>
            <div className="flex flex-col w-full md:w-max md:flex-row gap-4">
              <button className='flex  items-center justify-center font-semibold shadow-box px-12 py-4 bg-primary   text-secondary rounded-md'>
                <MdOutlineReceiptLong className='text-2xl mr-2' />
                <p className='p !font-bold'>Orçamento</p>
              </button>
              <button className='flex items-center justify-center font-semibold shadow-box px-12 py-4 bg-white  text-primary rounded-md'>
                <MdCleaningServices className='text-2xl mr-2' />
                <p className='p !font-bold'>Serviços</p>
              </button>
            </div>
            <div className="self-center w-[100%] h-[1px] bg-gray my-8"></div>
            <div className="flex justify-start items-center gap-4 mb-4">
              <div className="flex -space-x-4">
                <div className="w-16 h-16 rounded-full bg-primary border-2 border-white overflow-hidden">
                  <img src={user} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className="w-16 h-16 rounded-full bg-primary border-2 border-white overflow-hidden">
                  <img src={user} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className="w-16 h-16 rounded-full bg-primary border-2 border-white overflow-hidden">
                  <img src={user} alt="" className='w-full h-full object-cover'/>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <MdOutlineStar className='text-xl' />
                  <MdOutlineStar className='text-xl' />
                  <MdOutlineStar className='text-xl' />
                  <MdOutlineStar className='text-xl' />
                  <MdOutlineStar className='text-xl' />
                </div>
                <h4 className='h4'>5 de 5 pelo google <FcGoogle className='inline' /></h4>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center relative">
            <div className="absolute  bg-lightgray p-2 rounded-full animate-pulse shadow-box cursor-pointer hover:scale-125 duration-200 ease-in-out">
              <MdSmartDisplay className='text-5xl text-gray' />
            </div>
            <img src={welcome} alt="" className='max-w-[100%] rounded-3xl' />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full md:max-w-[70%] lg:max-w-[80%] min-h-40 bg-white rounded-2xl md:-mt-[50px] shadow-box">
            <div className="flex flex-col md:flex-row justify-around p-4 w-full h-full gap-y-2">

              <div className="flex gap-x-4 items-center">
                <div className="self-start bg-secondary rounded-xl p-3">
                  <MdOutlineContacts className='text-5xl text-primary' />
                </div>
                <div className="">
                  <h4 className='h4 text-black'>Contato</h4>
                  <p className='p text-black'>(31) 3333-3333</p>
                  <p className='p text-black'>(31) 99650-5644</p>
                </div>
              </div>
              <div className="hidden md:block bg-gray w-[1px]"></div>
              <div className="flex gap-x-4 items-center">
                <div className="self-start bg-secondary rounded-xl p-3">
                  <MdAccessTime className='text-5xl text-primary' />
                </div>
                <div className="">
                  <h4 className='h4 text-black'>Hórario</h4>
                  <p className='p text-black'><span className='font-bold'>Seg - Sex</span>: 07:00h às 18:00h</p>
                  <p className='p text-black'><span className='font-bold'>Sábado:</span> 07:00h às 13:00h</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero