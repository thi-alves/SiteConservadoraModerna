import { useState } from 'react';
import CardFaq from './CardFaq';
import { faq } from '../constants';
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/animate'
const Faq = () => {
    return (
        <section>
            <div className="container mx-auto my-10">
                <div className="flex flex-col justify-start w-full h-full">
                    <motion.div variants={fadeIn("down")} initial="initial" whileInView="whileInView" className="flex flex-col text-center mb-8 space-y-2">
                        <h1 className='h1'>F A Q</h1>
                        <p className='p'>Confira abaixo algumas perguntas frequentes, em caso de dúvidas e questionamentos entre em contato conosco.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {faq.map((faq,index)=>(
                            <CardFaq key={index} questions={faq.questions} answers={faq.answers} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq