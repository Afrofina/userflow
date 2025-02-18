import React from 'react'
import { Text, Image } from '@/components/atoms'
export default function payment({ refPayment,handleClick }) {
  return (
    <div ref={refPayment}>
      <Text className="custom-font !text-[16px] !tracking-widest text-[#333333] lg:block hidden" align="left">
        Payment Method
      </Text>
      <Text className="sf-pro !text-[16px] text-[#575757] pt-1" align="left">
        Add your bank credit card for billing and making purchases
      </Text>
      <div className='lg:w-2/3 w-full pt-10'>
        <div className='flex items-center justify-between border border-gray-300 px-3 py-4 rounded cursor-pointer'>
          <div className='flex items-center space-x-6'>
            <Image src={'/shop/checkout/add.svg'} width={24} />
            <div>
              <Text align="left" className="text-[#707070] !text-[18px] sf-pro" onClick={handleClick}>
                Add a new credit card
              </Text>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between border border-gray-300 px-3 py-1 rounded mt-3'>
          <div className='flex items-center space-x-4'>
            <Image src={'/shop/checkout/card.svg'} width={30} />
            <div>
              <Text align="left" className="text-[#707070] !text-[18px] sf-pro">
                **********4860
              </Text>
              <Text align="left" className="text-[#707070] !text-[14px] sf-pro">
                Visa card
              </Text>
            </div>
          </div>
          <Text className="text-black !text-[18px] border-b border-black " onClick={handleClick}>
            Edit
          </Text>
        </div>
      </div>
    </div>
  )
}
