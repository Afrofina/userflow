'use client'
import React from 'react'
import { MainLayout } from '@/components/layouts'
import { ShipSidebar, Messages,RequestForm } from '@/components/organisms'
export default function page() {
    return (
        <MainLayout>
            <div className='h-full flex'>
                <ShipSidebar />
                <div className='grid lg:grid-cols-3 grid-cols-1 w-full h-full'>
                    <div className='col-span-2 lg:border-r border-0 border-black h-full overflow-auto lg:px-20 px-4 pt-12'>
                        <RequestForm/>
                    </div>
                    <div className='lg:block hidden'>
                        <Messages />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
