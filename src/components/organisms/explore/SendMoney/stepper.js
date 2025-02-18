import React from 'react'

export default function Stepper({ steppers, current,currentIndex }) {
    return (
        <ul className=" flex flex-row overflow-hiden pb-12">
            {
                steppers?.map((val,index) => (
                    <li className={` group flex ${steppers?.length-1===index?'w-3':'w-full'}  md:block relative`}>
                        <div className={`min-w-7 min-h-7 flex flex-col items-center ${steppers?.length-1===index?'w-3':'w-full'} md:inline-flex md:flex-wrap md:flex-row text-xs align-middle`}>
                            <span className={`w-[8px] h-[8px] flex justify-center items-center flex-shrink-0 font-medium ${index <= currentIndex ? 'bg-[#039A00]' : 'bg-[#D9D9D9]'} rounded-full`}>

                            </span>
                            {steppers?.length-1===index?<></>:<div className={`mt-2 w-px h-full md:mt-0 md:w-full md:h-px md:flex-1 ${index <= currentIndex ? 'bg-[#039A00]' : 'bg-[#D9D9D9]'} group-last:hidden`}></div>}
                        </div>
                        <div className=" md:mt-3 pb-5 w-full absolute -ml-[48%] flex justify-center">
                            <span className="block text-sm font-medium text-[#039A00] sf-pro">
                                {val}
                            </span>
                        </div>
                    </li>
                ))
            }

        </ul>
    )
}
