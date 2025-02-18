'use client'
import React, { useState } from 'react'
import { MainLayout } from '@/components/layouts'
import { Text } from '@/components/atoms'
import { StepperTracking, MapOrder, ItemsDetail } from '@/components/organisms'
export default function page() {
    const [selectedOption, setSelectedOption] = useState('delivery status')
    return (
        <MainLayout pageTitle={'My Order'}>
            <div className='lg:grid flex flex-col-reverse grid-cols-11 h-full lg:overflow-visible overflow-auto'>
                <div className='col-span-6 h-full border-r border-black  lg:overflow-auto overflow-visible'>
                    <div className='flex items-end space-x-2 px-10 py-4 border-b border-black'>
                        <Text className="custom-font !text-[16px] text-black !tracking-widest">
                            Order ID:
                        </Text>
                        <Text className="custom-font !text-[19px] text-black !tracking-widest">
                            DG145WF4
                        </Text>
                    </div>
                    <div className=' px-10 py-5 border-b border-black grid grid-cols-4'>
                        <Text className="custom-font !text-[16px] text-[#63257B] !tracking-widest cursor-pointer" onClick={() => setSelectedOption('delivery status')}>
                            Delivery status
                        </Text>
                        <Text className="custom-font !text-[16px] text-black !tracking-widest cursor-pointer" onClick={() => setSelectedOption('items detail')}>
                            Item Details
                        </Text>
                    </div>

                    {selectedOption === 'delivery status' ? <div className='lg:px-14 px-3 pt-12'>
                        <StepperTracking steppers={['Shipped out', 'Out for delivery', 'Estimated time for delivery', 'Package Delivered']} />
                    </div> : <ItemsDetail />}
                </div>
                <div className='col-span-5'>
                    <MapOrder />
                </div>
            </div>
        </MainLayout>
    )
}
