'use client'
import React from 'react'
import { MainLayout } from '@/components/layouts'
import { ShipSidebar, BookingStatus, Messages } from '@/components/organisms'
import { Text } from '@/components/atoms'
export default function page() {
    return (
        <MainLayout pageTitle={'Booking status'}>
            <div className='h-full flex'>
                <ShipSidebar />
                <div className='grid lg:grid-cols-3 grid-cols-1 w-full h-full'>
                    <div className='col-span-2 lg:border-r border-r-0 border-black h-full overflow-auto flex justify-center'>
                        <div className='lg:w-8/12 w-full lg:px-0 px-4 h-full pt-8'>
                            <BookingStatus />
                            
                        </div>
                    </div>
                    <div className='lg:block hidden'>
                        <Messages />
                        
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
