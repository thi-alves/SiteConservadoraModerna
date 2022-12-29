import React from 'react'
import { MdPermPhoneMsg, MdEmail, MdLocationOn, MdForwardToInbox, MdPersonPin } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'

const Contact = () => {
    return (
        <section id='contact'>
            <div className="bg-white">
                <div className="container mx-auto py-10">
                    <div className="box">
                        <div className="flex flex-col gap-4">
                            <div className="grid md:grid-cols-2 mb-4 md:mb-12 gap-4">
                                <div className="flex flex-col justify-between">
                                    <div className="flex flex-col justify-center">
                                        <h4 className='h4 text-secondary'>—— Contate nós</h4>
                                        <h2 className='h2 mb-4'> Fale conosco</h2>
                                        <p className='p text-left'>Disponibilizamos o fale conosco para o esclarecimento de duvidas, registro de sugestoes e demais demandas.<br/>
                                            Aqui nós amamos o que fazemos, e acreditamos que pessoas felizes entregam resultados incríveis, venha fazer parte dessa família.</p>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div className="flex items-end gap-4 border-b border-gray/30 mb-2 pb-2">
                                            <MdPermPhoneMsg className='text-[2.5rem] text-gray' />
                                            <div className="">
                                                <p className=''>Telefone de contato</p>
                                                <h4 className='h4'>(31) 3333-3333</h4>
                                            </div>
                                        </div>
                                        <div className="flex items-end gap-4 border-b border-gray/30 mb-2 pb-2">
                                            <RiWhatsappFill className='text-[2.5rem] text-gray' />
                                            <div className="">
                                                <p className=''>Whatsapp</p>
                                                <h4 className='h4'>(31) 3333-3333</h4>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 border-b border-gray/30 mb-2 pb-2">
                                            <MdLocationOn className='text-[2.5rem] text-gray' />
                                            <div className="">
                                                <p className=''>Localização</p>
                                                <h4 className='h4'>R. R, 116 - Jardim Vera Cruz</h4>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <MdEmail className='text-[2.5rem] text-gray' />
                                            <div className="">
                                                <p className=''>E-mail</p>
                                                <h4 className='h4'>dp.conservadoramoderna@gmail.com</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-primary rounded-3xl text-white px-4 py-6 flex flex-col gap-4 relative shadow-box -bottom-12 md:bottom-0">
                                    <div className="absolute bg-secondary p-2 rounded-2xl right-[44%] -top-14 shadow-md">
                                        <MdPersonPin className='text-5xl text-black' />
                                    </div>

                                    <div className="flex flex-col gap-2 items-center justify-center">
                                        <label className='flex-none p'>Nome Completo:</label>
                                        <input className='rounded-md w-full p-2'></input>
                                    </div>
                                    <div className="flex flex-col gap-2 items-center justify-center">
                                        <label className='flex-none p'>Telefone:</label>
                                        <input className='rounded-md w-full p-2'></input>
                                    </div>
                                    <div className="flex flex-col gap-2 items-center justify-center">
                                        <label className='flex-none p'>E-mail:</label>
                                        <input className='rounded-md w-full p-2'></input>
                                    </div>
                                    <div className="flex flex-col gap-2 items-center justify-center">
                                        <label className='flex-none p'>Mensagem:</label>
                                        <textarea rows="4" className='rounded-md w-full p-2'></textarea>
                                    </div>
                                    <div className="flex p-4 bg-secondary rounded-2xl text-black justify-center items-center gap-x-2">
                                        <button className='h4'>
                                            Enviar
                                        </button>
                                        <MdForwardToInbox className='text-3xl' />
                                    </div>

                                </div>
                            </div>
                            <div className="flex justify-around items-center gap-4">

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact