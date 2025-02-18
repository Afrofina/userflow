'use client'
import React from 'react'
import { MainLayout } from '@/components/layouts'
import { ShipSidebar, FaqShipping, PaymentForm } from '@/components/organisms'
import { Text, Input, Button } from '@/components/atoms'
export default function page() {
    return (
        <MainLayout pageTitle={'Track Your Shipment'}>
            <div className='h-full flex'>
                <ShipSidebar />
                <div className='w-full h-full overflow-auto'>
                    <div className='border-b border-black pb-6 pl-6 pr-6 pt-12 '>
                        <Text className="!text-[16px] text-[#333333] custom-font !tracking-widest" align="left">
                            Package Images
                        </Text>
                        <div className='lg:!w-[227px] w-full lg:!h-[227px] !h-[354px] px-3 pt-2 mt-4' style={{ backgroundImage: `url('/ship/package.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}></div>
                    </div>
                    <div className='grid grid-cols-4 gap-4 px-5'>
                        <div className='!w-full lg:!h-[227px] !h-[89px] px-3 pt-2 mt-4' style={{ backgroundImage: `url('/ship/package.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}></div>
                        <div className='!w-full lg:!h-[227px] !h-[89px] px-3 pt-2 mt-4' style={{ backgroundImage: `url('/ship/package.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}></div>
                        <div className='!w-full lg:!h-[227px] !h-[89px] px-3 pt-2 mt-4' style={{ backgroundImage: `url('/ship/package.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}></div>
                        <div className='!w-full lg:!h-[227px] !h-[89px] px-3 pt-2 mt-4' style={{ backgroundImage: `url('/ship/package.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}></div>

                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
