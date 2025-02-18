import { Button, Text, Select, Input, Image } from '@/components/atoms'
import { LabelInput } from '@/components/molecules'
import React from 'react'
import Link from 'next/link'
export default function NewListings() {
    return (
        <div className='px-5 pt-8 pb-8'>
            <div className='lg:block hidden'>
                <Text className="!text-[20px] text-black custom-font !tracking-widest" align="center">
                    New Listing
                </Text>
                <Text className="!text-[16px] text-[#575757] sf-pro " align="center">
                    add new listing to start earning
                </Text>
            </div>
            <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-4 w-full justify-between items-center pb-8'>
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
                    <Button className="text-black text[18px] bg-[#CDCDCD] w-full py-2 rounded mt-8">
                        Electrical Gadgets
                    </Button>
                    <Button className="text-black text[18px] bg-[#CDCDCD] w-full py-2 rounded mt-5">
                        Clothes
                    </Button>

                    <div className='flex w-full justify-center items-center text-black border text[18px] border-black py-2 rounded mt-5 cursor-pointer space-x-3'>
                        <Image src="/ship/addStroke.svg" /><p> Add support package</p>
                    </div>
                    <Text className="!text-[16px] text-black custom-font !tracking-widest py-6" align="left">
                        Package range
                    </Text>
                    <div className='flex justify-between'>
                        <div className='w-6/12'>
                            <div className='flex justify-between pb-3'>
                                <Text className="text-black !text-[18px] sf-pro !font-medium">
                                    Weight
                                </Text>
                            </div>
                            <Text icon="/ship/down.svg" className="px-3 !rounded w-full !text-[16.5px] bg-[#CDCDCD] text-black py-4" align="left"  >
                                0KG
                            </Text>
                        </div>
                        <div className='w-5/12'>
                            <div className='flex justify-between pb-3'>
                                <Text className="text-black !text-[18px] sf-pro !font-medium">
                                    Price
                                </Text>
                            </div>
                            <Text icon="/ship/down.svg" className="px-3 !rounded w-full !text-[16.5px] bg-[#CDCDCD] text-black py-4" align="left"  >
                                0KG
                            </Text>
                        </div>
                    </div>
                    <div className='flex justify-between pt-6'>
                        <div className='w-6/12'>
                            <div className='flex justify-between pb-3'>
                                <Text className="text-black !text-[18px] sf-pro !font-medium">
                                    Weight
                                </Text>
                                <Text className="text-black !text-[18px] sf-pro !font-medium">
                                    Lb/Kg
                                </Text>
                            </div>
                            <Select icon="/ship/down.svg" className="pr-3 pl-1 !rounded w-full !text-[16.5px]" placeholderValue="0KG" />
                        </div>
                        <LabelInput text="Price" textClass="text-black !text-[18px] sf-pro !font-medium" placeholder="5$" mainClass="space-y-3 w-5/12" />
                    </div>
                    <div className='flex w-full justify-center items-center text-black border text[18px] border-black py-2 rounded mt-5 cursor-pointer space-x-3'>
                        <Image src="/ship/addStroke.svg" /><p>Add new package range</p>
                    </div>
                    <Button className="text-white border text[18px] bg-black w-full py-3 rounded mt-5">
                        Save
                    </Button>
                </div>
            </div>
            <div className='space-y-6 pt-12'>
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    <div className='space-y-3 col-span-2'>
                        <Text className="text-[#575757] !text-[16px] custom-font !tracking-widest" align="left">
                            Departure location
                        </Text>
                        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-4'>
                            <Select icon="/ship/down.svg" className="px-3 !rounded-lg w-full !text-[16.5px]" placeholderValue="Select Country" />
                            <Select icon="/ship/down.svg" className="px-3 !rounded-lg w-full !text-[16.5px]" placeholderValue="Select City" />
                        </div>
                    </div>
                    <div className='space-y-3 col-span-2 pt-4'>
                        <Text className="text-[#575757] !text-[16px] custom-font !tracking-widest" align="left">
                            Destination
                        </Text>
                        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-4'>
                            <Select icon="/ship/down.svg" className="px-3 !rounded-lg w-full !text-[16.5px]" placeholderValue="Select Country" />
                            <Select icon="/ship/down.svg" className="px-3 !rounded-lg w-full !text-[16.5px]" placeholderValue="Select Country" />

                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-20'>


                    <div className='space-y-3'>
                        <Text className="text-[#575757] !text-[16px] custom-font !tracking-widest" align="left">
                            Departure date
                        </Text>
                        <Select icon="/ship/calendar.svg" className="px-3 !rounded-lg w-full !text-[16.5px]" placeholderValue="07/07/2023" />

                    </div>
                    <div className='space-y-3'>
                        <Text className="text-[#575757] !text-[16px] custom-font !tracking-widest" align="left">
                            Departure time
                        </Text>
                        <Select icon="/ship/down.svg" className="px-3 !rounded-lg w-full !text-[16.5px]" placeholderValue="00:00" />

                    </div>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1gap-20'>
                    <div className='space-y-3'>
                        <Text className="text-[#575757] !text-[16px] custom-font !tracking-widest" align="left">
                            Arrival Time
                        </Text>
                        <Select icon="/ship/down.svg" className="px-3 !rounded-lg w-full !text-[16.5px]" placeholderValue="00:00" />

                    </div>
                </div>
                <Button className="text-white border text[18px] bg-black w-full py-3 rounded mt-5">
                    Save
                </Button>
            </div>
            <Text className="text-[#575757] !text-[16px] custom-font !tracking-widest pt-8" align="left">
                Pick up methods
            </Text>
            <Text className="text-[#969696] !text-[16px] sf-pro" align="left">
                Add supported pickup method
            </Text>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-5 py-6'>
                <div className='grid grid-cols-3 col-span-2 items-center'>
                    <Text className="text-black !text-[18px] sf-pro !font-medium" align="left">
                        Pickup within
                    </Text>
                    <Select icon="/ship/down.svg" className="px-3 !rounded-lg w-full !text-[16.5px] col-span-2" placeholderValue="Accra" />
                </div>
                <LabelInput text="Price" textClass="text-black !text-[18px] sf-pro !font-medium" placeholder="5$" mainClass="flex items-center space-x-10" />
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
                <div className='grid grid-cols-3 col-span-2 items-center'>
                    <Text className="text-black !text-[18px] sf-pro !font-medium lg:w-48 w-auto" align="left">
                        Drop-off Location
                    </Text>
                    <Select icon="/ship/down.svg" className="px-3 !rounded-lg w-full !text-[16.5px] col-span-2" placeholderValue="Available drop off" />
                </div>
            </div>
            <Button className="text-white border text[18px] bg-black w-full py-3 rounded mt-5">
                Save
            </Button>
        </div>
    )
}
