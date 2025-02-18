'use client'
import React from 'react'
import { MainLayout } from '@/components/layouts'
import { ShipSidebar, ShippingOptions } from '@/components/organisms'
import { Text } from '@/components/atoms'
export default function page() {
    return (
        <MainLayout pageTitle={'Your delivery Options'}>
            <div className='h-full flex'>
                <ShipSidebar />
                <div className='w-full h-full overflow-auto'>
                    <ShippingOptions />
                </div>
            </div>
        </MainLayout>
    )
}
