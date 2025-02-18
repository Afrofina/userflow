'use client'
import React from 'react'
import { MainLayout } from '@/components/layouts'
import { ShipSidebar, OptionCard } from '@/components/organisms'
import { Text } from '@/components/atoms'
export default function page() {
    return (
        <MainLayout pageTitle={'Afrofina Shipping'}>
            <div className='h-full flex'>
                <ShipSidebar />
                <div className='flex justify-center w-full h-full'>
                    <div className='lg:w-5/12 w-full h-full overflow-auto lg:px-10 px-4'>
                        <div className='pt-8'>
                            <Text className="!text-[20px] text-black custom-font !tracking-widest lg:block hidden" align="center">
                                Afrofina shipping
                            </Text>
                            <Text className="!text-[16px] text-[#575757] sf-pro pt-3" align="center">
                                Want to send a package right way or get a quote for your packages ?
                            </Text>
                        </div>
                        <Text className="!text-[20px] text-black custom-font !tracking-widest pb-4 lg:pt-24 pt-48" align="center">
                            Select shipping service
                        </Text>
                        <div className='grid grid-cols-2 gap-5'>
                            <OptionCard icon={"/ship/shipBlackStroke.svg"} title={'Ship Now '} description={'Get an estimate and ship your package right way.'} link={'/ecom/ship/standard-shipping/shipping-service'} />
                            <OptionCard icon={"/ship/quote.svg"} title={'Get a Quote '} description={'Get an estimated cost for your package '} link={'/ecom/ship/standard-shipping/get-quote'} />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
