import React from 'react'
import { Text, Image, Button } from '@/components/atoms'
import { TextIcon } from "@/components/molecules"
export default function withdrawMethods({refWithDraw,handleClick}) {
    return (
        <div ref={refWithDraw}>
            <Text className="custom-font !text-[16px] !tracking-widest text-[#333333] lg:block hidden" align="left">
                U-cargo withdraw methods
            </Text>
            <Text className="sf-pro !text-[16px] text-[#575757] pt-1" align="left">
                Add a your bank for withdrawals.
            </Text>
            <div className='flex lg:flex-row flex-col justify-between items-start mt-10'>
                <div className='p-1 rounded-md border border-[#F9EAFF] lg:w-1/2 w-full'>
                    <div className='flex justify-between py-2 border-b border-[#EFEFEF]'>
                        <Text className="sf-pro !text-[14px] text-[#333333]">
                            Bank Country
                        </Text>
                        <Text className="sf-pro !text-[14px] text-[#333333]">
                            Bank Country
                        </Text>
                    </div>
                    <div className='flex justify-between py-2 border-b border-[#EFEFEF]'>
                        <Text className="sf-pro !text-[14px] text-[#333333]">
                            Routing Number
                        </Text>
                        <Text className="sf-pro !text-[14px] text-[#333333]">
                            002-544-203
                        </Text>
                    </div>
                    <div className='flex justify-between py-2 border-b border-[#EFEFEF]'>
                        <Text className="sf-pro !text-[14px] text-[#333333]">
                            Bank Name
                        </Text>
                        <Text className="sf-pro !text-[14px] text-[#333333]">
                            Access bank Gh
                        </Text>
                    </div>
                    <div className='flex justify-between py-2 border-b border-[#EFEFEF]'>
                        <Text className="sf-pro !text-[14px] text-[#333333]">
                            Bank Branch
                        </Text>
                        <Text className="sf-pro !text-[14px] text-[#333333]">
                            Madina
                        </Text>
                    </div>
                    <div className='flex justify-between py-2 border-b border-[#EFEFEF]'>
                        <Text className="sf-pro !text-[14px] text-[#333333]">
                            Name on Account
                        </Text>
                        <Text className="sf-pro !text-[14px] text-[#333333]">
                            Jonathan Majors
                        </Text>
                    </div>
                    <div className='flex justify-between py-2'>
                        <Text className="sf-pro !text-[14px] text-[#333333]">
                            Account Number
                        </Text>
                        <Text className="sf-pro !text-[14px] text-[#333333]">
                            0020-5440-2030
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
