import React from 'react'
import { Text, Image } from '@/components/atoms'
export default function ReviewCard() {
    return (
        <div className='bg-[#FFF9D1] h-full p-5 rounded'>
            <div className='flex items-center space-x-3'>
                <Image src="/shop/product/avatar.svg" width={52} className={"rounded-full"} />
                <div >
                    <Text align="left" className="!text-[14px] text-black">
                        Julia,
                    </Text>
                    <div className='flex items-center space-x-1'>
                        <Text className="text-[#05B201] !text-[12px] sf-pro" align="left">
                            4.7
                        </Text>
                        <div className='flex items-center'>
                            {[0, 1, 2, 3].map(() => (<Image src={'/shop/product/starFill.svg'} width={16} />))}
                            <Image src={'/shop/product/starOutline.svg'} width={16} />
                        </div>
                    </div>
                </div>
            </div>
            <Text className="!text-18 sf-pro text-black py-4" align="left">
                Fast delivery
            </Text>
            <Text className="!text-[14px] sf-pro text-black" align="left">
            I recently had the opportunity to experience the fast delivery service offered by Afrofina, and I must say, it completely exceeded my expectations. From start to finish, their commitment to delivering packages swiftly and efficiently was nothing short of remarkable. Here's why I believe their service deserves a glowing review:
            </Text>
        </div>
    )
}
