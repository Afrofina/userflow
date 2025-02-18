'use client'
import React from 'react'
import { MainLayout } from '@/components/layouts'
import { ShipSidebar, NewListings, Messages } from '@/components/organisms'
export default function page() {
    return (
        <MainLayout pageTitle={'New Listing'}>
            <div className='h-full flex'>
                <ShipSidebar />
                <div className='grid lg:grid-cols-3 grid-cols-1 w-full h-full'>
                    <div className='col-span-2 border-r border-black h-full overflow-auto'>
                        <NewListings/>
                    </div>
                    <div className='lg:block hidden'>
                        <Messages />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
