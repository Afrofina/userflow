import React from 'react'
import { Text, Image } from '@/components/atoms'
export default function ChooseAPlan() {
  return (
    <div className='pt-10'>
      <Text className="text-black lg:!text-[24px] !text-[20px] custom-font !tracking-widest " align="center">
        Choose A Plan
      </Text>
      <Text className="text-black lg:!text-[18px] !text-[10px] sf-pro pt-2 pb-10" align="center">
        Choose a plan that fits your budget.

      </Text>

      <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
        <div className='p-8 border border-black flex items-center space-x-12 rounded'>
          <Image src={'/explore/royal/plan.svg'} width={40} />
          <div>
            <Text className="text-black lg:!text-[24px] !text-[20px] custom-font !tracking-widest " align="left">
              Monthly
            </Text>
            <Text className="text-black lg:!text-[18px] !text-[10px] sf-pro pt-1" align="left">
              $5/ monthly

            </Text>
          </div>
        </div>
        <div className='p-8 border border-black bg-black flex items-center space-x-12 rounded'>
          <Image src={'/explore/royal/plan.svg'} width={40} />
          <div>
            <Text className="text-white lg:!text-[24px] !text-[20px] custom-font !tracking-widest " align="left">
              Yearly
            </Text>
            <Text className="text-white lg:!text-[18px] !text-[10px] sf-pro pt-1" align="left">
              $50/ monthly

            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}
