import { Button, Text, Select, Input } from '@/components/atoms'
import { LabelInput } from '@/components/molecules'
import Link from 'next/link'
import React from 'react'

export default function myListings() {
    return (
        <div className='px-5 pt-8'>
            <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-4 w-full justify-between items-center pb-8'>
                <Text className="!text-[20px] text-black custom-font !tracking-widest lg:block hidden">
                    My Listings
                </Text>
                <Link href={'/ecom/ship/u-cargo-agent/order-requests'} className='lg:w-auto w-full'>
                    <Button className="text-black border text[18px] border-black px-6 py-2 rounded lg:w-auto w-full">
                        View request(s)
                    </Button>
                </Link>
                <Link href={'/ecom/ship/u-cargo-agent/messages'} className='lg:w-auto w-full  lg:hidden block'>
                    <Button className="text-black border text[18px] border-black px-6 py-2 rounded lg:w-auto w-full">
                        Messages
                    </Button>
                </Link>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1'>
                <div className='col-span-2'>
                    <Text className="!text-[16px] text-black custom-font !tracking-widest" align="left">
                        Package Supported
                    </Text>
                    <Button className="text-black border text[18px] border-black w-full py-2 rounded mt-8">
                        Electrical Gadgets
                    </Button>
                    <Button className="text-black border text[18px] border-black w-full py-2 rounded mt-5">
                        Clothes
                    </Button>
                    <Button className="text-white border text[18px] bg-black w-full py-2 rounded mt-5">
                        Edit
                    </Button>
                    <Text className="!text-[16px] text-black custom-font !tracking-widest py-6" align="left">
                        Package range
                    </Text>
                    <div className='flex justify-between'>
                        <div className='w-6/12'>
                            <div className='flex justify-between pb-3'>
                                <Text className="text-black !text-[18px] sf-pro !font-medium">
                                    Weight
                                </Text>
                                <Text className="text-black !text-[18px] sf-pro !font-medium">
                                    Lb/Kg
                                </Text>
                            </div>
                            <Select icon="/ship/down.svg" className="px-3 !rounded w-full !text-[16.5px]" placeholderValue="0KG" />
                        </div>
                        <LabelInput text="Price" textClass="text-black !text-[18px] sf-pro !font-medium" placeholder="5$" mainClass="space-y-3 w-5/12" />
                    </div>
                    <Button className="text-white border text[18px] bg-black w-full py-2 rounded mt-5">
                        Edit
                    </Button>
                </div>
            </div>
            <div className='space-y-6 pt-12'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-20'>
                    <div className='space-y-3'>
                        <Text className="text-[#575757] !text-[16px] custom-font !tracking-widest" align="left">
                            Departure location
                        </Text>
                        <div className='flex justify-between border border-[#CDCDCD] py-2 px-4 rounded-md'>
                            <Text className="!text-[#707070] !text-[18px]">
                                Accra, Ghana
                            </Text>
                            <Text className="text-black border-b border-black">
                                Edit
                            </Text>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <Text className="text-[#575757] !text-[16px] custom-font !tracking-widest" align="left">
                            Departure date
                        </Text>
                        <div className='flex justify-between border border-[#CDCDCD] py-2 px-4 rounded-md'>
                            <Text className="!text-[#707070] !text-[18px]">
                                07/07/2023
                            </Text>
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-20'>
                    <div className='space-y-3'>
                        <Text className="text-[#575757] !text-[16px] custom-font !tracking-widest" align="left">
                            Destination
                        </Text>
                        <div className='flex justify-between border border-[#CDCDCD] py-2 px-4 rounded-md'>
                            <Text className="!text-[#707070] !text-[18px]">
                                Tx, United States
                            </Text>
                            <Text className="text-black border-b border-black">
                                Edit
                            </Text>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <Text className="text-[#575757] !text-[16px] custom-font !tracking-widest" align="left">
                            Departure time
                        </Text>
                        <div className='flex justify-between border border-[#CDCDCD] py-2 px-4 rounded-md'>
                            <Text className="!text-[#707070] !text-[18px]">
                                00:30am
                            </Text>
                            <Text className="text-black border-b border-black">
                                Edit
                            </Text>
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-20'>
                    <div className='space-y-3'>
                        <Text className="text-[#575757] !text-[16px] custom-font !tracking-widest" align="left">
                            Arrival Time
                        </Text>
                        <div className='flex justify-between border border-[#CDCDCD] py-2 px-4 rounded-md'>
                            <Text className="!text-[#707070] !text-[18px]">
                                04:30am
                            </Text>
                            <Text className="text-black border-b border-black">
                                Edit
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
            <Text className="text-[#575757] !text-[16px] custom-font !tracking-widest pt-8" align="left">
                Pick up methods
            </Text>
            <Text className="text-[#969696] !text-[16px] sf-pro" align="left">
                Add supported pickup method
            </Text>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-0 lg:space-y-0 space-y-5 py-6'>
                <div className='grid grid-cols-3 col-span-2 items-center'>
                    <Text className="text-black !text-[18px] sf-pro !font-medium" align="left">
                        Pickup within
                    </Text>
                    <Select icon="/ship/down.svg" className="px-3 !rounded-lg w-full !text-[16.5px] col-span-2" placeholderValue="Accra" />
                </div>
                <LabelInput text="Price" textClass="text-black !text-[18px] sf-pro !font-medium" placeholder="5$" mainClass="flex items-center lg:space-x-10 space-x-16 lg:justify-start justify-between" />
            </div>
            <div className='lg:flex hidden items-center space-x-6 pr-12'>
                <Text className="text-black !text-[18px] sf-pro !font-medium w-48" align="left">
                    Drop-off Location
                </Text>
                <Select icon="/ship/down.svg" className="px-3 !rounded-lg w-full !text-[16.5px] col-span-2" placeholderValue="Afrofina head office accra" />
            </div>
            <Button className="text-white border text[18px] bg-black w-full py-2 rounded mt-5">
                Edit
            </Button>
            <div className='flex justify-center py-8'>
                <Link href={'/ecom/ship/u-cargo-agent/new-listings'}>
                    <Button className="text-white border text[18px] bg-black px-12 py-2 rounded mt-5">
                        Add new listing
                    </Button>
                </Link>
            </div>
        </div>
    )
}
