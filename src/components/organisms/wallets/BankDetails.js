import React from 'react'
import { Button, Text } from '@/components/atoms'
export default function BankDetails({handleClick}) {
    return (
        <div>
            <Text align="center" className="text-black custom-font !tracking-widest !text-[24px] lg:block hidden" >
                Withdraw
            </Text>
            <Text align="center" className="text-black sf-pro !text-[14px] pb-8 lg:block hidden">
                Withdraw your earnings
            </Text>
            <div>
                <Text align="center" className="text-black custom-font !tracking-widest !text-[16px] lg:!text-left !text-center pb-4" >
                    Bank Details
                </Text>
                <div className='border border-[#F9EAFF] rounded-md  px-1'>
                    <div className='flex justify-between py-4 px-1 border-b border-[#F9EAFF]'>
                        <Text align="center" className="text-black sf-pro !text-[14px]">
                            Bank Country
                        </Text>
                        <Text align="center" className="text-black sf-pro !text-[14px]">
                            Ghana
                        </Text>
                    </div>
                    <div className='flex justify-between py-4 px-1 border-b border-[#F9EAFF]'>
                        <Text align="center" className="text-black sf-pro !text-[14px]">
                            Routing Number
                        </Text>
                        <Text align="center" className="text-black sf-pro !text-[14px]">

                            002-544-203
                        </Text>
                    </div>
                    <div className='flex justify-between py-4 px-1 border-b border-[#F9EAFF]'>
                        <Text align="center" className="text-black sf-pro !text-[14px]">
                            Bank Name
                        </Text>
                        <Text align="center" className="text-black sf-pro !text-[14px]">
                            Access bank Gh
                        </Text>
                    </div>
                    <div className='flex justify-between py-4 px-1 border-b border-[#F9EAFF]'>
                        <Text align="center" className="text-black sf-pro !text-[14px]">
                            Bank Branch
                        </Text>
                        <Text align="center" className="text-black sf-pro !text-[14px]">
                            Madina
                        </Text>
                    </div>
                    <div className='flex justify-between py-4 px-1 border-b border-[#F9EAFF]'>
                        <Text align="center" className="text-black sf-pro !text-[14px]">
                            Name on Account
                        </Text>
                        <Text align="center" className="text-black sf-pro !text-[14px]">
                            Jonathan Majors
                        </Text>
                    </div>
                    <div className='flex justify-between py-4 px-1'>
                        <Text align="center" className="text-black sf-pro !text-[14px]">
                            Account Number
                        </Text>
                        <Text align="center" className="text-black sf-pro !text-[14px]">
                            0020-5440-2030
                        </Text>
                    </div>
                </div>
            </div>
            <Button className="w-full bg-black  py-3 !text-[18px] rounded mt-16 font-extralight" onClick={handleClick}>
                Proceed
            </Button>
            <Button className="w-full border border-black  py-3 !text-[18px] rounded mt-4 font-extralight text-black" onClick={handleClick}>
            Add bank
            </Button>
        </div>
    )
}
