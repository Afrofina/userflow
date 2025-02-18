'use client'
import React from 'react'
import { MainLayout } from '@/components/layouts'
import { ShipSidebar, Details, Messages } from '@/components/organisms'
import { Text } from '@/components/atoms'
export default function page() {
    return (
        <MainLayout>
            <div className='h-full flex'>
                <ShipSidebar />
                <div className='grid grid-cols-3 w-full h-full'>
                    <div className='col-span-2 border-r border-black h-full overflow-auto flex justify-center'>
                        <div className='w-7/12 h-full pt-8'>
                            <Details />
                        </div>
                    </div>
                    <div>
                        <Messages />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
