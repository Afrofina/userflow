import React from 'react'
import { Text } from '@/components/atoms'
export default function itemsDetail() {
  return (
    <div>
      <div className='px-10 pt-10 space-y-2 !h-[430px] overflow-auto border-b border-black'>
        <div className='grid grid-cols-3'>
          <Text className="custom-font !text-[16px] text-black !tracking-widest cursor-pointer" align="left">
            item name
          </Text>
          <Text className="custom-font !text-[16px] text-black !tracking-widest cursor-pointer">
            Quantity
          </Text>
          <Text className="custom-font !text-[16px] text-black !tracking-widest cursor-pointer">
            Weight
          </Text>
        </div>
        <div className='grid grid-cols-3'>
          <Text className="sf-pro !text-[20px] text-black cursor-pointer" align="left">
            1.
            Man scrub
          </Text>
          <Text className="sf-pro !text-[20px] text-black cursor-pointer">
            5
          </Text>
          <Text className="sf-pro !text-[20px] text-black cursor-pointer">
            5kb
          </Text>
        </div>
        <div className='grid grid-cols-3'>
          <Text className="sf-pro !text-[20px] text-black cursor-pointer" align="left">
            1.
            Man scrub
          </Text>
          <Text className="sf-pro !text-[20px] text-black cursor-pointer">
            5
          </Text>
          <Text className="sf-pro !text-[20px] text-black cursor-pointer">
            5kb
          </Text>
        </div>
      </div>
      <div className='px-10 pt-10 space-y-2 !h-[430px] overflow-auto'>
        <div className='flex justify-between'>
          <Text className="custom-font !text-[16px] text-black !tracking-widest cursor-pointer" align="left">
            Number of items
          </Text>
          <Text className="custom-font !text-[16px] text-black !tracking-widest cursor-pointer">
            2
          </Text>
        </div>
        <div className='flex justify-between'>
          <Text className="custom-font !text-[16px] text-black !tracking-widest cursor-pointer" align="left">
            Total weight
          </Text>
          <Text className="custom-font !text-[16px] text-black !tracking-widest cursor-pointer">
            10kg
          </Text>
        </div>
      </div>
    </div>
  )
}
