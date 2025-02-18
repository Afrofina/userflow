import React from 'react'
import { MainLayout } from '@/components/layouts'
import { PatientDetailForm } from '@/components/organisms'
export default function Page() {
    return (
        <MainLayout pageTitle="Patient Details ">
            <div className='flex justify-center w-full h-full overflow-auto px-4'>
                <div className='lg:w-1/3 w-full'>
                    <PatientDetailForm />
                </div>
            </div>
        </MainLayout>
    )
}
