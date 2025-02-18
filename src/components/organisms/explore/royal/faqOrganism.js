'use client'
import React, { useState } from 'react'
import { Text, Image } from '@/components/atoms'


export default function faqOrganism({ title, descriptiom }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='py-3 px-3 rounded border border-black'>
      <div className='flex justify-between items-center'>
        <Text className="text-black lg:!text-[18px] !text-[14px] sf-pro" align="left">
          {title}
        </Text>
        {isOpen ? <Image src={'/explore/royal/close.svg'} width={24} className={'cursor-pointer'} onClick={()=>setIsOpen(false)} /> : <Image src={'/explore/royal/open.svg'} width={24} className={'cursor-pointer'} onClick={()=>setIsOpen(true)}  />}
      </div>
      {isOpen && <Text className="text-black lg:!text-[16px] !text-[14px] sf-pro pt-6" align="left">
       {descriptiom}
      </Text>}
    </div>
  )
}
