'use client'
import React from 'react'
import { MainLayout } from '@/components/layouts'
import { ShipSidebar, ShippingOptions } from '@/components/organisms'
import { Button } from '@/components/atoms'
export default function page() {
    return (
        <MainLayout pageTitle={'Your delivery options'}>
            <div className='h-full flex'>
                <ShipSidebar />
                <div className='w-full h-full overflow-auto'>
                    <ShippingOptions />
                    <div className='flex justify-start space-x-5 px-10 pt-10 pb-6'>

                        <Button className=" bg-black py-3 w-[283px] !text-[20px] rounded ">
                            Email Quote
                        </Button>
                        <Button className="border border-black w-[283px] text-black py-3 !text-[20px] rounded ">

                            Print Quote
                        </Button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
