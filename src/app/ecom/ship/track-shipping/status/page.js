'use client'
import React from 'react'
import { MainLayout } from '@/components/layouts'
import { ShipSidebar, StepperTrackingShipping, PaymentForm } from '@/components/organisms'
import { Text, Image, Button } from '@/components/atoms'
import Link from 'next/link'
export default function page() {
    return (
        <MainLayout>
            <div className='h-full flex'>
                <ShipSidebar />
                <div className='w-full h-full overflow-auto grid lg:grid-cols-9 grid-cols-1'>
                    <div className='col-span-5 px-6 lg:h-full h-auto lg:overflow-auto overflow-visible border-r border-black pt-10'>
                        <div className='flex items-end space-x-3 pb-6'>
                            <Text className="text-[#333333] lg:!text-[16px] !text-[16px] custom-font !tracking-widest " align="center">
                                Tracking Number:
                            </Text>
                            <Text className="text-black lg:!text-[19px] !text-[16px] custom-font !tracking-widest " align="center">
                                DG145WF4
                            </Text>
                        </div>
                        <StepperTrackingShipping steppers={[
                            {
                                title: 'Pick-up',
                                description: 'Your packaged has been picked-up by afrofina at Abena creek  block 6 Oyarifa, Accra Ghana ',
                                status: 'Successful',
                                icon: '/ship/ship.svg'
                            },
                            {
                                title: 'Shipped Out',
                                description: 'Your packaged has been Shipped out of Accra, Ghana at 10:00am, 26th July 2023.',
                                status: 'Successful',
                                icon: '/ship/flightBlue.svg'
                            },
                            {
                                title: 'Out for delivery',
                                description: 'Package has reached our facility in Dallas Texas',
                                status: 'Successful',
                                icon: '/ship/ship.svg'
                            },
                            {
                                title: 'Estimated time for delivery',
                                description: '',
                                status: 'Successful',
                                icon: '/ship/ship.svg'
                            },
                            {
                                title: 'Pick-up',
                                description: 'Your packaged has been picked-up by afrofina at Abena creek  block 6 Oyarifa, Accra Ghana ',
                                status: 'Successful',
                                icon: '/ship/ship.svg'
                            }
                        ]} />
                    </div>
                    <div className='col-span-4 flex flex-col  px-6  lg:h-full h-auto lg:overflow-auto overflow-visible pt-10 relative'>
                        <div className='flex-grow'>
                            <Text className="text-[#333333] lg:!text-[16px] !text-[16px] custom-font !tracking-widest pb-8" align="center">
                                Tracking Number:
                            </Text>
                            <div className='flex space-x-4'>
                                <Text className="sf-pro !text-[18px] text-black" align="left">
                                    #1
                                </Text>
                                <div className='w-full'>
                                    <Text className="sf-pro !text-[18px] text-black" align="left">
                                        3 canned coke packets
                                    </Text>
                                    <div className='!w-[136px] !h-[136px] px-3 pt-2 mt-4' style={{ backgroundImage: `url('/ship/package.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
                                        <div className='flex space-x-1 justify-end'>
                                            <Image src={"/ship/subtractWhite.svg"} width={20} />
                                            <Image src={"/ship/addWhite.svg"} width={20} />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-4 gap-4 border-t border-black pt-4 mt-4'>
                                        <div className='!w-full !h-[74px]' style={{ backgroundImage: `url('/ship/package.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                                        </div>
                                        <div className='!w-full !h-[74px]' style={{ backgroundImage: `url('/ship/package.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                                        </div>
                                        <div className='!w-full !h-[74px]' style={{ backgroundImage: `url('/ship/package.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                                        </div>
                                        <div className='!w-full !h-[74px]' style={{ backgroundImage: `url('/ship/package.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                                        </div>
                                    </div>
                                    <div className='flex justify-center pt-6' >
                                        <Link href={'/ecom/ship/track-shipping/view-images'}>
                                        <Button className='text-black text-[18px] sf-pro border border-black py-2 px-8 rounded-sm'>
                                            View images
                                        </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full px-6 space-y-4 pb-10'>
                            <div className='flex justify-between'>
                                <Text className="text-black lg:!text-[20px] !text-[16px] custom-font !tracking-widest" align="center">
                                    Number or packages
                                </Text>
                                <Text className="text-black lg:!text-[20px] !text-[16px] custom-font !tracking-widest" align="center">
                                    1
                                </Text>
                            </div>
                            <div className='flex justify-between'>
                                <Text className="text-black lg:!text-[20px] !text-[16px] custom-font !tracking-widest " align="center">
                                    Package weight
                                </Text>
                                <Text className="text-black lg:!text-[20px] !text-[16px] custom-font !tracking-widest" align="center">
                                    60kg
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
