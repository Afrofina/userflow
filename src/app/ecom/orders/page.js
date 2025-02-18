import React from 'react'
import { MainLayout } from '@/components/layouts'
import { Text, Button, Image, Input } from '@/components/atoms'
import { OrdersOrganism } from '@/components/organisms'
export default function page() {
    return (
        <MainLayout pageTitle={'My Order'}>
            <div className='lg:grid flex flex-col-reverse grid-cols-11 h-full '>
                <div className='border-r border-black pt-6 lg:pl-8 pl-3 lg:pr-12 pr-3 overflow-auto lg:h-full h-auto col-span-6'>
                    <Text className="!tracking-widest text-black !text-[18px] custom-font pb-6" align="left">
                        current orders
                    </Text>
                    <OrdersOrganism isOrderId={true} />
                    <div className='grid lg:grid-cols-3 grid-cols-1'>
                        <div>

                        </div>
                        <Button className="w-full col-span-2 bg-black  py-3 !text-[18px] rounded font-extralight lg:mt-0 mt-4" >
                            Track Order
                        </Button>
                    </div>
                    <div className='flex justify-between items-center pt-6 pb-6'>
                        <Text className="!tracking-widest text-black !text-[18px] custom-font" align="left">
                            Order History
                        </Text>
                        <Text className="sf-pro text-black !text-[16px] custom-font" align="left">
                            Clear History
                        </Text>
                    </div>
                    <div className='space-y-4'>
                        {[0, 1, 2].map(() => <OrdersOrganism />)}
                    </div>
                    <div className='lg:flex hidden items-center space-y-4 justify-between px-5 pb-12 pt-6 w-full'>
                        <Button className="bg-dark px-5 text-white rounded-full py-2 flex flex-row-reverse items-center"
                            isIcon="true"
                            iconSrc="/explore/left.svg"
                        >
                            Previous
                        </Button>
                        <div className='flex '>
                            <Button className="bg-white text-black py-1.5 rounded-lg">
                                1
                            </Button>
                            <Button className="bg-black py-1.5 rounded-lg">
                                2
                            </Button>
                            <Button className="bg-white text-black py-1.5 rounded-lg">
                                3
                            </Button>
                            <Image src={'/explore/dots.svg'} width={24} />
                            <Button className="bg-white text-black py-1.5 rounded-lg">
                                4
                            </Button>
                            <Button className="bg-white text-black py-1.5 rounded-lg">
                                5
                            </Button>
                            <Button className="bg-white text-black py-1.5 rounded-lg">
                                6
                            </Button>
                        </div>
                        <Button className="bg-dark px-5 text-white rounded-full py-2 flex items-center"
                            isIcon="true"
                            iconSrc="/explore/right.svg"
                        >
                            Next
                        </Button>
                    </div>
                </div>
                <div className='col-span-5  pt-6 pl-8 pr-12 overflow-auto h-full '>
                    <Text className="!tracking-widest text-black !text-[18px] custom-font pb-3" align="center">
                        Track Your Order
                    </Text>
                    <Text className="text-[#575757] !text-[16px] sf-pro pb-12">
                        Enter order Id to track your order
                    </Text>
                    <Input placeholder="Order ID here" />
                    <Button className="w-full col-span-2 bg-black  py-3 !text-[18px] rounded font-extralight mt-4" >
                        Track
                    </Button>
                </div>
            </div>
        </MainLayout>
    )
}
