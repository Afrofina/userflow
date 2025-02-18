'use client'
import React from 'react'
import { MainLayout } from '@/components/layouts'
import { ShipSidebar, OptionCard } from '@/components/organisms'
import { Text, Select, Button } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
import Link from 'next/link'
export default function page() {
    return (
        <MainLayout pageTitle={'Select shipping service'}>
            <div className='h-full flex'>
                <ShipSidebar />
                <div className='w-full h-full overflow-auto'>
                    <Text className="!text-[20px] text-black custom-font !tracking-widest py-8 border-b border-black lg:block hidden" align="center">
                        Select shipping service
                    </Text>
                    <Text className="!text-[18px] text-black sf-pro py-3 !font-medium" align="center">
                        Pallets, Containers & Cargo
                    </Text>
                    <div className='flex justify-center border-b border-black pb-5'>
                        <div className='grid lg:grid-cols-3 grid-cols-2 lg:px-0 items-center px-4 gap-5 lg:w-8/12 w-full'>
                            <OptionCard icon={"/ship/flight.svg"} title={'Air Freight'} description={'send packages to all countries and on the same day'} link={'/ecom/ship/standard-shipping/shipping-service'} />
                            <OptionCard icon={"/ship/occean.svg"} title={'Ocean Freight  '} description={'Send heavy cargo and containers internationally with ease'} link={'/'} />
                            <OptionCard icon={"/ship/road.svg"} title={'Road Freight '} description={'Send heavy cargo and containers domestically with ease '} link={'/'} />
                        </div>
                    </div>
                    <Text className="!text-[20px] text-black custom-font !tracking-widest py-4 pt-8" align="center">
                        Ship now
                    </Text>
                    <Text className="!text-[16px] text-[#575757] sf-pro lg:px-36 px-5" align="center">
                        We offer instant delivery of all package sizes  (containers, cargo, pallet size cargo, box packages ) to both domestic addresses/locations and international address/locations.  Fill in your shipment details below and we’ll provide services tailored to your specific requirements, simply pick options that suits you best and continue to book.
                    </Text>
                    <div className='grid lg:grid-cols-4 grid-cols-2 lg:px-8 lg:gap-0 gap-4 px-4 pt-16 pb-6'>
                        <TextIcon text="Origin and Destination " iconSrc="/ship/rightIcon.svg" iconWidth={23} textClass="lg:!text-[20px] !text-[14px] text-black custom-font !tracking-widest pr-3" mainClass="flex flex-row-reverse justify-center" />
                        <TextIcon text="Describe your shipment " iconSrc="/ship/rightIcon.svg" iconWidth={23} textClass="lg:!text-[20px] !text-[14px] text-black custom-font !tracking-widest pr-3" mainClass="flex flex-row-reverse justify-center" />
                        <TextIcon text="Get delivery price" iconSrc="/ship/rightIcon.svg" iconWidth={23} textClass="lg:!text-[20px] !text-[14px]] text-black custom-font !tracking-widest pr-3" mainClass="flex flex-row-reverse justify-center" />
                        <Text className="lg:!text-[20px] !text-[14px] text-black custom-font !tracking-widest" align="center">
                            Proceed with online booking
                        </Text>
                    </div>
                    <div className='lg:px-14 px-4'>
                        <Text className="!text-[24px] text-black sf-pro py-3 !font-medium" align="left">
                            From
                        </Text>
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                            <Select placeholderValue="Select country" className="pr-4" />
                            <Select placeholderValue="City" className="pr-4" />
                        </div>
                        <Text className="!text-[14px] text-black sf-pro pt-3" align="left">
                            This is your billing country/region
                        </Text>
                        <Text className="!text-[24px] text-black sf-pro py-3 !font-medium pt-14" align="left">
                            To
                        </Text>
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                            <Select placeholderValue="Select country" />
                            <div className='grid lg:grid-cols-7 grid-cols-1 lg:gap-8 gap-0 space-y-8 lg:space-y-0'>
                                <div className='col-span-4'>
                                    <Select placeholderValue="City" className="pr-4 w-full" />
                                </div>
                                <div className='col-span-3'>
                                    <Select placeholderValue="Postal code" className="pr-4 w-full" />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center pt-12 pb-8'>
                            <Link href={'/ecom/ship/standard-shipping/recepient-details'} className=' lg:w-auto w-full'>
                                <Button className="text-white border text[14px] px-16 bg-black py-2 lg:w-auto w-full rounded mt-5">
                                    Enter full details
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
