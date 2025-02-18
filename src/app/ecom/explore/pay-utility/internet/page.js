import React from 'react'
import { MainLayout } from '@/components/layouts'
import { InternetForm } from '@/components/organisms'
export default function Page() {
    return (
        <MainLayout pageTitle={'Internet'}>
           <div className='flex justify-center w-full h-full overflow-auto px-4'>
                <div className='lg:w-1/3 w-full'>
                    <InternetForm />
                </div>
            </div>
        </MainLayout>
    )
}
