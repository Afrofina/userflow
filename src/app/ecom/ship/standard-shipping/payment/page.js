'use client'
import React from 'react'
import { MainLayout } from '@/components/layouts'
import { ShipSidebar, StepperShipping,PaymentForm } from '@/components/organisms'
import { Text } from '@/components/atoms'
export default function page() {
    return (
        <MainLayout pageTitle={'Your Quote'}>
            <div className='h-full flex'>
                <ShipSidebar />
                <div className='w-full h-full overflow-auto flex justify-center'>
                    <div className='lg:w-1/2 w-full'>
                        <Text className="!text-[24px] text-black custom-font !tracking-widest lg:block hidden" align="center">
                            Your Quote
                        </Text>
                        <div className='flex justify-center py-6'>
                            <div className='lg:w-1/2 w-2/3 -ml-8'>
                                <StepperShipping steppers={['Route', 'Review', 'Billing']} currentIndex={1} />
                            </div>
                        </div>
                        <PaymentForm/>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
