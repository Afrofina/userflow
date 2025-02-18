'use client'
import React from 'react'
import { MainLayout } from '@/components/layouts'
import { ShipSidebar, OptionCard } from '@/components/organisms'
import { Text, Input, Dropdown, Image, Select, Button } from '@/components/atoms'
import Link from 'next/link'

export default function page() {
    return (
        <MainLayout pageTitle={' Send and Recipient details'}>
            <div className='h-full flex'>
                <ShipSidebar />
                <div className='flex justify-center w-full h-full'>
                    <div className='lg:w-9/12 w-full h-full overflow-auto lg:px-10 px-4'>
                        <div className='lg:pt-8 pt-0'>
                            <Text className="!text-[20px] text-black custom-font !tracking-widest lg:block hidden" align="center">
                                Send and Recipient details
                            </Text>
                            <Text className="!text-[16px] text-[#575757] sf-pro pt-3" align="center">
                                Please fill in the forms below to start processing you shipment
                            </Text>
                        </div>
                        <div className='space-y-5 pt-12'>
                            <Text className="!text-[20px] text-black custom-font !tracking-widest" align="left">
                                Senders details
                            </Text>
                            <Input placeholder="Legal Name" className="border border-black rounded w-full placeholder-black text-black px-10 py-3 sf-pro text-[18px]" />
                            <div className='flex justify-between border border-black rounded w-full  px-10 py-3'>
                                <Input placeholder="Legal Name" className=" placeholder-black text-black  sf-pro text-[18px] w-full focus:outline-none" />
                                <Text className="text-black  sf-pro text-[18px] w-48" align="right">
                                    if applicable
                                </Text>
                            </div>
                            <div className='flex justify-between border border-black rounded w-full  px-10 py-3'>
                                <Input placeholder="Email " className=" placeholder-black text-black  sf-pro text-[18px] w-full focus:outline-none" />
                                <Text className="text-black  sf-pro lg:!text-[18px] !text-[14px] w-48" align="right">
                                    Use account email
                                </Text>
                            </div>
                            <div className='flex justify-between items-center border border-black rounded w-full  px-10 py-3 space-x-3'>

                                <Dropdown button={<div className='flex space-x-3 cursor-pointer'>
                                    <Image src="/ship/uganda.svg" width={24} />
                                    <Image src="/ship/downSmall.svg" width={20} />
                                </div>} />
                                <Input placeholder="+233 " className=" placeholder-black text-black  sf-pro text-[18px] w-full focus:outline-none" />

                            </div>
                        </div>
                        <div className='space-y-5 pt-6'>
                            <Text className="!text-[20px] text-black custom-font !tracking-widest" align="left">
                                Senders Address
                            </Text>
                            <Input placeholder="Address" className="border border-black rounded w-full placeholder-black text-black px-10 py-3 sf-pro text-[18px]" />
                            <Input placeholder="Accra" className="border border-black rounded w-full placeholder-black text-black px-10 py-3 sf-pro text-[18px]" />
                            <Input placeholder="State/Province" className="border border-black rounded w-full placeholder-black text-black px-10 py-3 sf-pro text-[18px]" />
                            <Input placeholder="Postal code" className="border border-black rounded w-full placeholder-black text-black px-10 py-3 sf-pro text-[18px]" />
                            <Select placeholderValue="Ghana" className="px-6 w-full" />
                            <div className='flex justify-center pt-4 pb-8'>
                                <Link href={'/ecom/ship/standard-shipping/item-details'} className='lg:w-auto w-full'>
                                    <Button className="text-white border text[14px] px-16 bg-black py-2 lg:w-auto w-full rounded mt-5">
                                        Continue
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
