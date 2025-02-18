'use client'
import React from 'react'
import { MainLayout } from '@/components/layouts'
import { ShipSidebar, FaqShipping, PaymentForm } from '@/components/organisms'
import { Text, Input, Button } from '@/components/atoms'
import Link from 'next/link'
export default function page() {
    return (
        <MainLayout pageTitle={'Track Your Shipment'}>
            <div className='h-full flex'>
                <ShipSidebar />
                <div className='w-full h-full overflow-auto flex justify-center'>
                    <div className='lg:w-1/2 w-full lg:px-0 px-5'>
                        <Text className="!text-[24px] text-black custom-font !tracking-widest pt-12 lg:block hidden" align="center">
                            Track Your Shipment
                        </Text>
                        <Text className="!text-[20px] text-black sf-pro pb-8" align="center">
                            To track your shipment please enter your tracking number
                        </Text>
                        <Input placeholder="Enter tracking number" />
                        <Link href={'/ecom/ship/track-shipping/status'}>
                            <Button className=" bg-black py-3 w-full !text-[20px] rounded mt-4 ">
                                Track
                            </Button>
                        </Link>
                        <FaqShipping />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
