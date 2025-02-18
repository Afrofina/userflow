
'use client'
import React from 'react';
import { MainLayout } from '@/components/layouts'
import { PayUtilityForm, UtilitySidebar } from '@/components/organisms'
import { TextIcon } from '@/components/molecules';

export default function Page() {
  

    return (
        <MainLayout pageTitle={'Pay utility'}>
            <div className='flex h-full'>
                <UtilitySidebar />
                <div className='flex justify-center w-full h-full overflow-auto px-4'>
                    <div className='lg:w-1/3 w-full'>
                        <PayUtilityForm />
                    </div>
                </div>
                {/* <div className='w-full'>
                        <div className='w-full h-full flex items-center space-x-3 px-4'>
                            <TextIcon iconSrc="/explore/pay.svg" text="pay utilities" mainClass="bg-primary flex flex-col items-center w-full space-y-3 w-full rounded-xl py-10 cursor-pointer" textClass="text-black" onClick={()=>{setIsShow(!isShow), setShowUtility(true)}}/>
                            <TextIcon iconSrc="/explore/pay.svg" text="Transactions" mainClass="bg-primary flex flex-col items-center w-full space-y-3 w-full rounded-xl py-10 cursor-pointer" textClass="text-black" />
                        </div>
                    </div> */}

            </div>
        </MainLayout>
    )
}
