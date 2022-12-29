import React from 'react'
import { RiMailSendLine } from 'react-icons/ri'
import {MdOutlineBubbleChart} from 'react-icons/md'

const Schedule = () => {
    return (
        <section>
            <div className="bg-primary">
                <div className="container mx-auto py-10 relative">
                    <MdOutlineBubbleChart className='hiddem md:block absolute -top-[38%] left-[50%] text-[30rem] text-white/5 -z-[0]'/>
                    <div className="flex flex-wrap gap-4 justify-center items-center">
                        <div className="">
                            <p className='p text-white'>Gostaria de agradecê-lo por ter tirado um pouco do seu tempo e ter chegado até aqui. Estou muito empolgado com o potencial desse relacionomento agora gostaria de lhe enviar uma proposta, um pouco mais detalhada. Gostaria de recebe-lá para darmos continuidade ?</p>
                            <h1 className='h1 text-white'>Temos uma condição especial para você.</h1>
                        </div>
                        <div className="flex justify-end w-full">
                            <button className='flex justify-center items-center h4 text-black p-4 bg-secondary rounded-2xl'>
                                <RiMailSendLine className='inline mr-2 text-2xl'/>
                                Solicitar Orçamento
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Schedule