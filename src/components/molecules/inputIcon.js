import React from 'react'
import { Input, Image } from "@/components/atoms"
export default function InputIcon({ placeholder, iconSrc, inputClass, mainClass }) {
    return (
        <div className={mainClass}>
            <Image src={iconSrc} width={24}/>
            <Input className={inputClass} placeholder={placeholder} />
        </div>
    )
}
InputIcon.defaultProps = {
    mainClass: 'border border-[#929292] rounded-lg p-2 py-3 flex items-center space-x-6',
    inputClass: 'bg-transparent w-full focus:outline-none placeholder-black text-[14px]'
}