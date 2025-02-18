import { Text, Image, Button } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
import React from 'react'

export default function profile({ref}) {
    return (
        <div className='w-full' ref={ref}>
            <Text className="custom-font !text-[16px] !tracking-widest text-[#333333]" align="left">
                My Profile
            </Text>
            <div className='flex lg:flex-row flex-col justify-between items-center w-full pt-10'>
                <div className='flex lg:flex-row flex-col lg:space-x-8 space-x-0 lg:space-y-0 space-y-5 lg:w-auto w-full'>
                    <Image src={'/header/avatar.svg'} width={112} height={112} className={' rounded-full'} />
                    <div className='w-full flex flex-col lg:space-y-0 space-y-2 justify-between'>
                        <div className='flex justify-between items-center'>
                            <Text className="text-[#333333] sf-pro !text-[18px] !font-medium">
                                John Rahul Mendenz
                            </Text>
                            <TextIcon iconSrc="/settings/verified.svg" iconWidth={24} text="Verified" textClass="text-[#039A00] sf-pro !text-[18px]" mainClass="flex items-center space-x-3" />
                        </div>
                        <div className='lg:space-y-0 space-y-2'>
                            <Text className="text-[#333333] sf-pro !text-[18px] !font-medium" align="left">
                                21st street oyarifa accra, madina , ghana
                            </Text>
                            <div className='flex lg:flex-row flex-col lg:items-center items-start justify-between lg:space-x-16 space-x-0 lg:space-y-0 space-y-2'>
                                <TextIcon iconSrc="/settings/message.svg" iconWidth={24} text="Johnrahul@gmail.com" textClass="text-[#333333] sf-pro !text-[18px]" mainClass="flex items-center space-x-3" />
                                <TextIcon iconSrc="/settings/phone.svg" iconWidth={24} text="+233-559-256-3001" textClass="text-[#333333] sf-pro !text-[18px]" mainClass="flex items-center space-x-3" />
                            </div>
                        </div>
                    </div>
                </div>
                <Button className="lg:w-auto w-full ">
                    <TextIcon iconSrc="/settings/edit.svg" iconWidth={24} text="Edit" textClass="text-[#333333] sf-pro !text-[18px] pr-3" mainClass="flex flex-row-reverse  items-center justify-center space-x-3 border border-black px-4 rounded py-1 lg:w-auto w-full" />
                </Button>
            </div>
        </div>
    )
}
