'use client'
import React, { useState } from 'react'
import { Text, Image } from '@/components/atoms'


export default function faqOrganism({ title, descriptiom }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={`' py-3 px-3 rounded border ${isOpen ? 'border-primary bg-white' : 'border-black bg-black'}`}>
            <div className={`flex justify-between items-center ${isOpen ? 'border-b border-primary pb-3':''}`}>
                <Text className={`${isOpen ? 'text-black' : 'text-white'} lg:!text-[18px] !text-[14px] sf-pro `} align="left">
                    {title}
                </Text>
                {isOpen ? <Image src={'/landing/subtract.svg'} width={24} className={'cursor-pointer'} onClick={() => setIsOpen(false)} /> : <Image src={'/landing/add.svg'} width={24} className={'cursor-pointer'} onClick={() => setIsOpen(true)} />}
            </div>
            {isOpen && <Text className={`${isOpen ? 'text-black' : 'text-white'} lg:!text-[16px] !text-[14px] sf-pro pt-6`}align="left">
                {descriptiom}
            </Text>}
        </div>
    )
}
