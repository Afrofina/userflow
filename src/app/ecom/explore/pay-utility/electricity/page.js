import React from 'react'
import { MainLayout } from '@/components/layouts'
import { ElectricityForm } from '@/components/organisms'
export default function Page() {
    return (
        <MainLayout pageTitle={'Electricity'}>
           <div className='flex justify-center w-full h-full overflow-auto px-4'>
                <div className='lg:w-1/3 w-full'>
                    <ElectricityForm />
                </div>
            </div>
        </MainLayout>
    )
}
