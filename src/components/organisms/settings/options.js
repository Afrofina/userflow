import React from 'react'
import { Image, Text } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
import Link from 'next/link'
export default function options() {
    return (
        <div className='px-4 pt-8'>
            <div className='flex space-x-4'>
                <Image src={'/header/avatar.svg'} width={88} height={88} className={' rounded-full'} />
                <div className='flex flex-col justify-between py-2'>
                    <Text className="text-[#333333] sf-pro !text-[18px] !font-medium">
                        John Rahul Mendenz
                    </Text>
                    <TextIcon iconSrc="/settings/verified.svg" iconWidth={24} text="Verified" textClass="text-[#039A00] sf-pro !text-[18px]" mainClass="flex items-center space-x-3" />
                </div>
            </div>
            <div className='space-y-3 pt-10'>
                <Link href={'/ecom/settings/profile'}>
                    <div className='flex justify-between items-center pb-3 border-b border-[#333333] pt-3'>
                        <TextIcon iconClasses=''
                            mainClass={`flex items-center cursor-pointer space-x-1 rounded-full `}
                            text="Profile"
                            textClass="text-black !text-[18px]  text-sm pl-1"
                            textVariant="subtitle2"
                            iconSrc="/settings/profile.svg"
                            onClick={() => handleClick('profile')}
                        />
                        <Image src={'/settings/right.svg'} width={20} />
                    </div>
                </Link>
                <Link href={'/ecom/settings/address'}>
                    <div className='flex justify-between items-center pb-3 border-b border-[#333333] pt-3'>
                        <TextIcon iconClasses=''
                            mainClass={`flex items-center cursor-pointer space-x-1 rounded-full `}
                            text="Address"
                            textClass="text-black !text-[18px]  text-sm pl-1"
                            textVariant="subtitle2"
                            iconSrc="/settings/address.svg"
                            onClick={() => handleClick('profile')}
                        />
                        <Image src={'/settings/right.svg'} width={20} />
                    </div>
                </Link>
                <Link href={'/ecom/settings/payment-method'}>
                    <div className='flex justify-between items-center pb-3 border-b border-[#333333] pt-3'>
                        <TextIcon iconClasses=''
                            mainClass={`flex items-center cursor-pointer space-x-1 rounded-full `}
                            text="Payment"
                            textClass="text-black !text-[18px]  text-sm pl-1"
                            textVariant="subtitle2"
                            iconSrc="/settings/payment.svg"
                            onClick={() => handleClick('profile')}
                        />
                        <Image src={'/settings/right.svg'} width={20} />
                    </div>
                </Link>
                <Link href={'/ecom/settings/u-cargo-withdraw'}>
                    <div className='flex justify-between items-center pb-3 border-b border-[#333333] pt-3'>
                        <TextIcon iconClasses=''
                            mainClass={`flex items-center cursor-pointer space-x-1 rounded-full `}
                            text="Bank"
                            textClass="text-black !text-[18px]  text-sm pl-1"
                            textVariant="subtitle2"
                            iconSrc="/settings/bank.svg"
                            onClick={() => handleClick('profile')}
                        />
                        <Image src={'/settings/right.svg'} width={20} />
                    </div>
                </Link>
                <Link href={'/ecom/settings/change-password'}>
                    <div className='flex justify-between items-center pb-3 border-b border-[#333333] pt-3'>
                        <TextIcon iconClasses=''
                            mainClass={`flex items-center cursor-pointer space-x-1 rounded-full `}
                            text="Security"
                            textClass="text-black !text-[18px]  text-sm pl-1"
                            textVariant="subtitle2"
                            iconSrc="/settings/security.svg"
                            onClick={() => handleClick('profile')}
                        />
                        <Image src={'/settings/right.svg'} width={20} />
                    </div>
                </Link>
                <Link href={'/ecom/settings/royal'}>
                    <div className='flex justify-between items-center pb-3 border-b border-[#333333] pt-3'>
                        <TextIcon iconClasses=''
                            mainClass={`flex items-center cursor-pointer space-x-1 rounded-full `}
                            text="Royal"
                            textClass="text-black !text-[18px]  text-sm pl-1"
                            textVariant="subtitle2"
                            iconSrc="/settings/royal.svg"
                            onClick={() => handleClick('profile')}
                        />
                        <Image src={'/settings/right.svg'} width={20} />
                    </div>
                </Link>
            </div>
        </div>
    )
}
