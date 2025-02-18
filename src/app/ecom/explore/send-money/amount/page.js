"use client"
import { useState } from 'react';
import { MainLayout } from '@/components/layouts'
import { NoTransactions, SidebarSendMoney, Stepper, AmountForm } from '@/components/organisms'
import { TextIcon } from '@/components/molecules';

export default function Page() {
    const [steppers, setSteppers] = useState(['Amount', 'Recipient details', 'Review', 'Pay'])
    return (
        <MainLayout pageTitle={'Amount'}>
            <div className='flex h-full'>
                <SidebarSendMoney /> <div className='flex justify-center w-full h-full overflow-auto px-4'>
                    <div className='lg:w-1/2 w-full pt-10'>
                        <div className='lg:block hidden'>
                            <Stepper steppers={steppers} current={'Amount'} currentIndex={0}/>
                        </div>
                        <div className='px-4 pt-6'>
                            <AmountForm />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
