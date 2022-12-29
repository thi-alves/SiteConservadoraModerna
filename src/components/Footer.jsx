import React from 'react'
import { MdOutlineLocationSearching } from 'react-icons/md'

const Footer = () => {
    return (
        <section id='location'>
            <div className=" bg-primary">
                <div className="container mx-auto text-white">
                    <div className="flex flex-1 flex-wrap p-4 justify-between">
                        <div className="1">
                            <div className="">
                                <h4 className='h4 mb-4'>Moderna</h4>
                                <p className=' max-w-[380px]'>Com a redução/eliminação de gastos referentes a processos trabalhistas, substituição de funcionários e coberturas de férias, a terceirização ainda promove melhor planejamento aos condomínios e empresas.</p>
                            </div>
                        </div>
                        <div className="2">
                            <div className="">
                                <h4 className='h4 mb-4'>Navigations</h4>
                                <ul>
                                    <li>Inicio</li>
                                    <li>Sobre</li>
                                    <li>Serviços</li>
                                    <li>Vantagens</li>
                                </ul>
                            </div>
                        </div>
                        <div className="3">
                            <div className="">
                                <h4 className='h4 mb-4'>Navigations</h4>
                                <ul>
                                    <li>Orçamento</li>
                                    <li>Localização</li>
                                    <li>Contato</li>
                                    <li>Artigos e Blogs</li>
                                </ul>
                            </div>
                        </div>
                        <div className="4">
                            <div className="">
                                <h4 className='h4 mb-4'>Redes Sociais</h4>
                                <ul>
                                    <li>Google</li>
                                    <li>Instagram</li>
                                    <li>Facebook</li>
                                    <li>Whatsapp</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-64 relative shadow-box">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15001.378336986707!2d-44.04073441335876!3d-19.95200576544885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81032af4ed5dd2d4!2sConservadora%20MODERNA!5e0!3m2!1spt-PT!2sbr!4v1671819478536!5m2!1spt-PT!2sbr" width="100%" height="100%" className='mix-blend-multiply'></iframe>
            </div>
        </section>
    )
}

export default Footer