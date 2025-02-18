'use client'
import React from 'react'
import { MainLayout } from '@/components/layouts'
import { Image, Text,Button } from '@/components/atoms'
import { ShipSidebar, MyListings, Messages } from '@/components/organisms'
import Link from 'next/link'
export default function page() {
    return (
        <MainLayout pageTitle={'My listing '}>
            <div className='h-full flex'>
                <ShipSidebar />
                <div className='grid lg:grid-cols-3 grid-cols-1 w-full h-full'>
                    <div className='col-span-2 border-r border-black h-full overflow-auto'>
                        <MyListings/>
                        <div className='w-full h-full flex flex-col justify-center items-center'>
                            <Image src={'/ship/noListing.svg'} width={293} height={304} />
                            <Text className="sf-pro text-black !text-[18px] pt-8">
                                You have no listing create a new listing to start earning
                            </Text>
                            <Link href={'/ecom/ship/u-cargo-agent/new-listings'}>
                                <Button className="text-white border text[18px] bg-black px-12 py-2 rounded mt-5 w-auto">
                                    Add new listing
                                </Button>
                            </Link>
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
