import { MainLayout } from '@/components/layouts'
import { ChangePassword } from '@/components/organisms'
import React from 'react'

export default function page() {
    return (
        <MainLayout pageTitle={'Change Password'}>
            <div className='p-5'>
                <ChangePassword />
            </div>
        </MainLayout>
    )
}
