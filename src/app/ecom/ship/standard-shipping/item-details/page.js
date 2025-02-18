'use client'
import React from 'react'
import { MainLayout } from '@/components/layouts'
import { ShipSidebar, ItemDetails } from '@/components/organisms'
import { Text } from '@/components/atoms'
export default function page() {
    return (
        <MainLayout pageTitle={'item details'}>
            <div className='h-full flex'>
                <ShipSidebar />
                <div className='w-full h-full overflow-auto'>
                    <Text className="!text-[20px] text-black custom-font !tracking-widest lg:block hidden" align="center">
                        item details
                    </Text>
                    <Text className="!text-[16px] text-[#575757] sf-pro pt-3 px-4" align="center">
                        Please describe how your package looks or what it contains also provide the exact dimensions and weight of your package
                    </Text>
                    <ItemDetails/>
                </div>
            </div>
        </MainLayout>
    )
}
