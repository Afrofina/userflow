import React from 'react'
import { Image,Text } from '@/components/atoms'
export default function CardInfo() {
  return (
    <div className='p-3 border border-gray-200 rounded-xl flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <div className='p-1.5 rounded-full bg-primary'>
            <Image src={'/sendMoney/card.svg'} width={20}/>
          </div>
          <div>
            <Text className="text-[#707070] !text-[18px]" align="left">
            **********4860
            </Text>
            <Text className="text-[#707070] !text-[14px]" align="left">
            Visa card
            </Text>
          </div>
        </div>
        <Image src={'/sendMoney/check.svg'} width={20}/>
    </div>
  )
}
