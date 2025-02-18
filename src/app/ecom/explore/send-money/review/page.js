"use client"
import { useState } from 'react';
import { MainLayout } from '@/components/layouts'
import { SidebarSendMoney, Stepper, Review } from '@/components/organisms'


export default function Page() {
    const [steppers, setSteppers] = useState(['Amount', 'Recipient details', 'Review', 'Pay'])
    return (
        <MainLayout pageTitle={'Amount'}>
            <div className='flex h-full'>
                <SidebarSendMoney /> <div className='flex justify-center w-full h-full overflow-auto px-4'>
                    <div className='lg:w-1/2 w-full pt-10'>
                        <div className='lg:block hidden'>
                            <Stepper steppers={steppers} current={'Recipient details'} currentIndex={2} />
                        </div>
                        <div className='lg:px-4 px-1 pt-6 pb-16'>
                            <Review />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
