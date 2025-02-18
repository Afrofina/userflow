import React from 'react'
import { MainLayout } from '@/components/layouts'
import { DeliveryDetails, PaymentDetails } from "@/components/organisms"
export default function Checkout() {
    return (
        <MainLayout pageTitle={'Delivery details '}>


            <div className='grid grid-cols-12 h-full'>
                <div className='lg:col-span-7 col-span-12 lg:px-16 px-3 lg:pt-12 pt-3 lg:border-r border-r-0 border-black h-full pb-6 lg:overflow-auto overflow-visible'>
                    <DeliveryDetails />
                </div>
                <div className='lg:col-span-5 col-span-12 lg:px-8 px-3 pt-12 h-full lg:overflow-auto overflow-visible'>
                    <PaymentDetails />
                </div>
            </div>

        </MainLayout>
    )
}
