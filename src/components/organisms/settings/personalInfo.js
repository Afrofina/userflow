import React from 'react'
import { Text, Button } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
export default function personalInfo({refInfo,handleClick}) {
    return (
        <div ref={refInfo}>
            <Text className="custom-font !text-[16px] !tracking-widest text-[#333333]" align="left">
                Personal Information
            </Text>
            <Text className="sf-pro !text-[16px] text-[#575757] pt-1" align="left">
                This information would be used to contact you
            </Text>
            <div className='flex lg:flex-row flex-col gap-12 items-start pt-10'>
                <div className='grid lg:grid-cols-2 grid-cols-1 w-full gap-5'>
                    <div className='flex lg:flex-col flex-row lg:justify-start justify-between'>
                        <Text className="sf-pro !text-[16px] text-[#575757]" align="left">
                            First name
                        </Text>
                        <Text className="sf-pro !text-[18px] text-black pt-1" align="left">
                            John Rahul
                        </Text>
                    </div>
                    <div className='flex lg:flex-col flex-row lg:justify-start justify-between'>
                        <Text className="sf-pro !text-[16px] text-[#575757]" align="left">
                            Last name
                        </Text>
                        <Text className="sf-pro !text-[18px] text-black pt-1" align="left">
                            Mendenz
                        </Text>
                    </div>
                    <div className='flex lg:flex-col flex-row lg:justify-start justify-between'>
                        <Text className="sf-pro !text-[16px] text-[#575757]" align="left">
                            Email address
                        </Text>
                        <Text className="sf-pro !text-[18px] text-black pt-1" align="left">
                            Johnrahul@gmail.com
                        </Text>
                    </div>
                    <div className='flex lg:flex-col flex-row lg:justify-start justify-between'>
                        <Text className="sf-pro !text-[16px] text-[#575757]" align="left">
                            Phone number
                        </Text>
                        <Text className="sf-pro !text-[18px] text-black pt-1" align="left">
                            +233-559-256-3001
                        </Text>
                    </div>
                </div>

                <Button className="lg:w-auto w-full " onClick={handleClick}>
                    <TextIcon iconSrc="/settings/edit.svg" iconWidth={24} text="Edit" textClass="text-[#333333] sf-pro !text-[18px] pr-3" mainClass="flex flex-row-reverse  items-center justify-center space-x-3 border border-black px-4 rounded py-1 lg:w-auto w-full" />
                </Button>
            </div>
        </div>
    )
}
