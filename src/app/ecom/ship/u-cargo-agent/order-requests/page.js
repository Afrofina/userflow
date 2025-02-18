'use client'
import React from 'react'
import { MainLayout } from '@/components/layouts'
import { Text ,Button} from '@/components/atoms'
import { ShipSidebar, Messages, OrderRequestCard } from '@/components/organisms'
import Link from 'next/link'
export default function page() {
    return (
        <MainLayout pageTitle={' Order Requests'}>
            <div className='h-full flex'>
                <ShipSidebar />
                <div className='grid lg:grid-cols-3 grid-cols-1 w-full h-full'>
                    <div className='col-span-2 border-r border-black h-full overflow-auto lg:px-12 px-4 pt-10'>
                        <Text className="!text-[16px] text-black custom-font !tracking-widest pl-10 lg:block hidden" align="left">
                            Order Requests
                        </Text>
                        <Link href={'/ecom/ship/u-cargo-agent/messages'} className='lg:w-auto w-full  lg:hidden block'>
                            <Button className="text-black border text[18px] border-black px-6 py-2 rounded lg:w-auto w-full">
                                Messages
                            </Button>
                        </Link>
                        <div className='space-y-12 pt-12'>
                            <OrderRequestCard />
                            <OrderRequestCard />
                        </div>
                    </div>
                    <div className='lg:block hidden'>
                        <Messages />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
