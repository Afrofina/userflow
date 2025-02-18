'use client'
import { MainLayout } from '@/components/layouts'
import { PaymentSettings, EditPayment } from '@/components/organisms'
import React, { useState } from 'react'

export default function page() {
    const [isEdit, setIsEdit] = useState(false)
    return (
        <MainLayout pageTitle={'Payment Method'}>
            <div className='p-5'>
                {!isEdit ? <PaymentSettings handleClick={() => setIsEdit(true)} />
                    : <EditPayment />}
            </div>
        </MainLayout>
    )
}
