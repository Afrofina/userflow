import { Text } from '@/components/atoms'
import React from 'react'

export default function cardOrganism() {
    return (
        <div>
            <div className='grid lg:grid-cols-12 grid-cols-1 border-b border-black'>
                <div className='flex items-center justify-end col-span-5 '>
                    <Text className="text-black lg:!text-[32px] !text-[20px] custom-font !tracking-widest pb-2 pt-4 lg:pl-12 pl-4" align="left">
                        Benefits our royal members enjoy
                    </Text>
                    <div className='!h-[206px] !w-[199px] px-24' style={{ backgroundImage: `url('/explore/royal/benifit.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                    </div>
                </div>
                <div className='col-span-3 flex flex-col justify-center space-y-4 px-10 lg:border-x border-x-0 lg:border-y-0 border-y lg:py-0 py-3 border-black'>
                    <Text className="font-outline-2 text-white !text-[23px]" align="left">
                        01
                    </Text>
                    <Text className="text-black lg:!text-[24px] !text-[20px] custom-font !tracking-widest " align="left">
                        Endless Discount
                    </Text>
                    <Text className="text-black lg:!text-[18px] !text-[10px] sf-pro " align="left">
                        Get endless discounts on all your
                        purchases when you join our royal
                        family.
                    </Text>
                </div>
                <div className='col-span-4 flex flex-col justify-center space-y-4 px-10 lg:py-0 py-3'>
                    <Text className="font-outline-2 text-white !text-[23px]" align="left">
                        02
                    </Text>
                    <Text className="text-black lg:!text-[24px] !text-[20px] custom-font !tracking-widest " align="left">
                        Royal Points
                    </Text>
                    <Text className="text-black lg:!text-[18px] !text-[10px] sf-pro " align="left">
                        On all your purchases you get points<br />
                        which can later be used to purchase<br />
                        items or pay for u-cargo services.
                    </Text>
                </div>
            </div>
            <div className='grid lg:grid-cols-12 grid-cols-1 border-b border-black'>
                <div className='col-span-4 flex flex-col justify-center space-y-4 px-10 py-5'>
                    <Text className="font-outline-2 text-white !text-[23px]" align="left">
                        03
                    </Text>
                    <Text className="text-black lg:!text-[24px] !text-[20px] custom-font !tracking-widest " align="left">
                        Pay with Crypto
                    </Text>
                    <Text className="text-black lg:!text-[18px] !text-[10px] sf-pro " align="left">
                        Purchase products from Afrofina and
                        <br />
                        make payments for services with
                        <br />
                        crypto.
                    </Text>
                </div>
                <div className='col-span-4 flex flex-col justify-center space-y-4 py-5 px-10 lg:border-x border-x-0 lg:border-y-0 border-y border-black'>
                    <Text className="font-outline-2 text-white !text-[23px]" align="left">
                        04
                    </Text>
                    <Text className="text-black lg:!text-[24px] !text-[20px] custom-font !tracking-widest " align="left">
                        Buy Groceries for loved
                        ones
                    </Text>
                    <Text className="text-black lg:!text-[18px] !text-[10px] sf-pro " align="left">
                        Buy groceries for your friends and
                        <br />
                        family in different cities..
                    </Text>
                </div>
                <div className='col-span-4 flex flex-col justify-center space-y-4 py-5 px-10'>
                    <Text className="font-outline-2 text-white !text-[23px] !font-extrabold" align="left">
                        05
                    </Text>
                    <Text className="text-black lg:!text-[24px] !text-[20px] custom-font !tracking-widest " align="left">
                        Digital Coupon Book
                    </Text>
                    <Text className="text-black lg:!text-[18px] !text-[10px] sf-pro " align="left">
                        On all your purchases you get points<br />
                        which can later be used to purchase<br />
                        items or pay for u-cargo services.

                    </Text>
                </div>
            </div>
            <div className='grid lg:grid-cols-12 grid-cols-1 border-b border-black'>
                <div className='col-span-6  py-6 px-10 flex lg:flex-row flex-col-reverse justify-between lg:items-center items-start lg:border-r border-r-0 lg:border-b-0 border-b border-black'>
                    <div className='flex flex-col justify-center space-y-4'>
                        <Text className="font-outline-2 text-white !text-[23px] !font-extrabold" align="left">
                            06
                        </Text>
                        <Text className="text-black lg:!text-[24px] !text-[20px] custom-font !tracking-widest " align="left">
                            Express Shippinhg
                        </Text>
                        <Text className="text-black lg:!text-[18px] !text-[10px] sf-pro " align="left">
                            On all your purchases you get points<br />
                            which can later be used to purchase<br />
                            items or pay for u-cargo services.

                        </Text>
                    </div>
                    <div className='!h-[206px] !w-[199px] px-24 rounded-2xl' style={{ backgroundImage: `url('/explore/royal/express.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                    </div>
                </div>
                <div className='col-span-6  py-6 px-10 flex lg:flex-row flex-col-reverse justify-between lg:items-center items-start border-r border-black'>
                    <div className='flex flex-col justify-center space-y-2'>
                        <Text className="font-outline-2 text-white !text-[23px] !font-extrabold" align="left">
                            07
                        </Text>
                        <Text className="text-black lg:!text-[24px] !text-[20px] custom-font !tracking-widest " align="left">
                            Free Groceries delivery
                        </Text>
                        <Text className="text-black lg:!text-[18px] !text-[10px] sf-pro " align="left">
                            Get free delivery for all your groceries<br />
                            over $200 to your desired address.

                        </Text>
                    </div>
                    <div className='!h-[206px] !w-[199px] px-24 rounded-full' style={{ backgroundImage: `url('/explore/royal/delivery.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-12 grid-cols-1 border-b border-black'>
                <div className='col-span-4 flex flex-col justify-center space-y-4 px-10 py-5'>
                    <Text className="font-outline-2 text-white !text-[23px]" align="left">
                        08
                    </Text>
                    <Text className="text-black lg:!text-[24px] !text-[20px] custom-font !tracking-widest " align="left">
                        Mystery Gifts
                    </Text>
                    <Text className="text-black lg:!text-[18px] !text-[10px] sf-pro " align="left">
                        Purchase products from Afrofina and<br />
                        make payments for services with <br />
                        crypto.
                    </Text>
                </div>
                <div className='col-span-4 flex flex-col justify-center space-y-4 py-5 px-10 lg:border-x border-x-0 lg:border-y-0 border-y border-black'>
                    <Text className="font-outline-2 text-white !text-[23px]" align="left">
                        09
                    </Text>
                    <Text className="text-black lg:!text-[24px] !text-[20px] custom-font !tracking-widest " align="left">
                        Special Partner discounts
                    </Text>
                    <Text className="text-black lg:!text-[18px] !text-[10px] sf-pro " align="left">
                        Buy groceries for your friends and
                        <br />
                        family in different cities.
                    </Text>
                </div>
                <div className='col-span-4 flex flex-col justify-center space-y-4 py-5 px-10'>
                    <Text className="font-outline-2 text-white !text-[23px] !font-extrabold" align="left">
                        10
                    </Text>
                    <Text className="text-black lg:!text-[24px] !text-[20px] custom-font !tracking-widest " align="left">
                        Royal Day
                    </Text>
                    <Text className="text-black lg:!text-[18px] !text-[10px] sf-pro " align="left">
                        Get free delivery for all your groceries<br />
                        over $200 to your desired address.

                    </Text>
                </div>
            </div>
        </div>
    )
}
