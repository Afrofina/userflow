import React from 'react'
import { Text } from '@/components/atoms'
export default function orderOrganism({isOrderId}) {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
            <div className={`lg:w-full !w-[162px] rounded-lg !h-[148px]`} style={{ backgroundImage: `url('/shop/images/product.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

            </div>
            <div className='col-span-2'>
                <div className='flex justify-between items-center'>
                    <Text className="!tracking-widest text-black !text-[16px] custom-font" align="left">
                        Man scrub
                    </Text>
                    <div className='flex space-x-6 items-center'>
                        <Text className="!tracking-widest text-black !text-[16px] custom-font" align="left">
                            Order total:
                        </Text>
                        <Text className="!tracking-widest text-black !text-[16px] custom-font" align="left">
                            $115
                        </Text>
                    </div>
                </div>
                {isOrderId&&<Text align="left" className="text-[#575757] sf-pro !text-[16px] pt-4 ">
                    Order ID #236502


                </Text>}
                <Text align="left" className="text-[#575757] sf-pro !text-[16px] ">
                    2 items purchased,
                </Text>
                <Text align="left" className="text-[#575757] sf-pro !text-[16px] ">

                    Delivery by U-Cargo
                </Text>
                <Text align="left" className="text-[#575757] sf-pro !text-[16px] ">

                    Delivery Details: Abena creek  block 6 Oyarifa, accra ghana
                </Text>
            </div>
        </div>
    )
}
