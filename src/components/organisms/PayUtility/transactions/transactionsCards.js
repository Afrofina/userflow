"use client"
import React from 'react'
import { TextIcon } from '@/components/molecules'
import { Text } from '@/components/atoms'
export default function TransactionsCards() {
  
  return (
    <div className='w-full grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 px-5 pt-8 gap-4 '>
      <div className='border border-[#F9EAFF] rounded py-3 space-y-2 shadow'>
        <TextIcon iconSrc="/explore/tv.svg" text="TV" textClass="text-black !font-medium" mainClass="flex flex-col items-center space-y-4" iconWidth={24} />
        <Text className="text-[#333333] !text-sm !pt-3">
          Total amount paid
        </Text>
        <Text className="text-[#04B200] !pt-2 ">
          $500
        </Text>
      </div>
      <div className='border border-[#F9EAFF] rounded py-3 space-y-2 shadow'>
        <TextIcon iconSrc="/explore/school.svg" text="School" textClass="text-black !font-medium" mainClass="flex flex-col items-center space-y-4" iconWidth={24} />
        <Text className="text-[#333333] !text-sm !pt-3">
          Total amount paid
        </Text>
        <Text className="text-[#04B200] !pt-2 ">
          $500
        </Text>
      </div>
      <div className='border border-[#F9EAFF] rounded py-3 space-y-2 shadow'>
        <TextIcon iconSrc="/explore/airtime.svg" text="Airtime" textClass="text-black !font-medium" mainClass="flex flex-col items-center space-y-4" iconWidth={24} />
        <Text className="text-[#333333] !text-sm !pt-3">
          Total amount paid
        </Text>
        <Text className="text-[#04B200] !pt-2 ">
          $500
        </Text>
      </div>
      <div className='border border-[#F9EAFF] rounded py-3 space-y-2 shadow'>
        <TextIcon iconSrc="/explore/hospital.svg" text="Hospital" textClass="text-black !font-medium" mainClass="flex flex-col items-center space-y-4" iconWidth={24} />
        <Text className="text-[#333333] !text-sm !pt-3">
          Total amount paid
        </Text>
        <Text className="text-[#04B200] !pt-2 ">
          $500
        </Text>
      </div>
      <div className='border border-[#F9EAFF] rounded py-3 space-y-2 shadow'>
        <TextIcon iconSrc="/explore/electricity.svg" text="Electricity" textClass="text-black !font-medium" mainClass="flex flex-col items-center space-y-4" iconWidth={24} />
        <Text className="text-[#333333] !text-sm !pt-3">
          Total amount paid
        </Text>
        <Text className="text-[#04B200] !pt-2 ">
          $500
        </Text>
      </div>
      <div className='border border-[#F9EAFF] rounded py-3 space-y-2 shadow'>
        <TextIcon iconSrc="/explore/internet.svg" text="Internet" textClass="text-black !font-medium" mainClass="flex flex-col items-center space-y-4" iconWidth={24} />
        <Text className="text-[#333333] !text-sm !pt-3">
          Total amount paid
        </Text>
        <Text className="text-[#04B200] !pt-2 ">
          $500
        </Text>
      </div>
    </div>
  )
}
