'use client'
import React from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('@/components/atoms/chart'), { ssr: false });
// import  Chart  from '@/components/atoms/chart'
import { Text } from "@/components/atoms"
import { TextIcon } from '@/components/molecules'
import CardFillPrimary from './cardFillPrimary'
import CardFillBlack from './cardFillBlack'
export default function cardOrganism() {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-0'>
            <CardFillBlack/>
            <CardFillPrimary/>
            <div className='shadow-md lg:rounded-md rounded-0 pr-5'>
                <div className='flex items-center justify-between pl-6 pt-4'>
                    <Text align="left" className="text-black custom-font !tracking-widest !text-[16px] ">
                        Earnings
                    </Text>
                    <TextIcon iconSrc="/wallets/dropDown.svg" text="yearly" iconWidth={14} textClass="!text-[10px] text-black sf-pro pr-3" mainClass="flex items-center flex-row-reverse space-x-2 " />

                </div>

                <div className='flex items-center space-x-4 px-6 pt-'>
                    <TextIcon iconSrc="/wallets/dotBrown.svg" text="Amount Generated " iconWidth={8} textClass="!text-[10px] text-black sf-pro " mainClass="flex items-center space-x-2 " />
                    <TextIcon iconSrc="/wallets/dotBlue.svg" text="Amount Generated " iconWidth={8} textClass="!text-[10px] text-black sf-pro " mainClass="flex items-center space-x-2 " />

                </div>
                <Chart />
            </div>
        </div>
    )
}
