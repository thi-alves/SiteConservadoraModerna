import { useState } from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'

const CardFaq = ({questions,answers}) => {
    const [expand, setExpand] = useState(true);
    const hidden = expand ? "hidden" : "display";
    return (
        <div className="h-max flex flex-col bg-white rounded-2xl p-4 border border-primary/[15%]  cursor-pointer" onClick={(() => setExpand(!expand))}>
            <div className="flex justify-between items-center">
                <p className='p block'>{questions}</p>
                <div className=" bg-primary rounded-full">
                    {expand ?
                        <MdArrowDropDown className="text-secondary text-3xl" />
                        :
                        <MdArrowDropUp className="text-secondary text-3xl" />
                    }
                </div>
            </div>
            <div className={`flex flex-col justify-center items-center ${hidden}`}>
                <div className="w-[98%] h-[1px] bg-gray/50 m-2"></div>
               <p className='ml-4'>{answers}</p>
            </div>
        </div>
    )
}

export default CardFaq