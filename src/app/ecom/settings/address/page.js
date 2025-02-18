'use client'
import { MainLayout } from '@/components/layouts'
import React, { useState } from 'react'
import { AddressSettings, EditAddress } from '@/components/organisms'
export default function page() {
    const [isEditAddress, setIsEditAddress] = useState(false)
    return (
        <MainLayout pageTitle={'Address'}>
            <div className='p-5'>
                {!isEditAddress ? <AddressSettings handleClick={() => setIsEditAddress(true)} /> : <EditAddress />}

            </div>
        </MainLayout>
    )
}
