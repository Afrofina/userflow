import React from 'react'
import { Text,Button } from '@/components/atoms'
import Link from 'next/link'
export default function Review() {
    return (
        <div>
            <Text variant="h6" className="text-black custom-font !tracking-widest">
                Amount to send
            </Text>
            <div className='border border-gray-900 px-5 rounded pb-6 pt-1 mt-6'>
                <Text className="text-[#333333]" align="left">
                    You are sending
                </Text>
                <div className='flex items-center justify-between'>
                    <Text variant="body1" className="!text-xl custom-font text-black !tracking-widest">
                        1000
                    </Text>
                    <Text variant="body1" className="!text-xl custom-font text-black !tracking-widest">
                        USD
                    </Text>
                </div>
            </div>
            <div className='border border-gray-900 px-5 rounded pb-6 pt-1 mt-4'>
                <Text className="text-[#333333]" align="left">
                    You are sending
                </Text>
                <div className='flex items-center justify-between'>
                    <Text variant="body1" className="!text-xl custom-font text-black !tracking-widest">
                        1100
                    </Text>
                    <Text variant="body1" className="!text-xl custom-font text-black !tracking-widest">
                        Ghc
                    </Text>
                </div>
            </div>
            <Text variant="h6" className="text-black custom-font !tracking-widest py-6">
                Recipient Details
            </Text>
            <div className='md:p-3 p-2 rounded border border-gray-300 flex md:flex-row flex-col items-center'>
                <div className='grid grid-cols-2 w-full'>
                    <div className='space-y-1 flex flex-col items-start'>
                        <Text align="left" className="text-[#707070] md:!text-[18px] !text-[14px]">
                            Email  :
                        </Text>
                        <Text align="left" className="text-[#707070] md:!text-[18px] !text-[14px]">
                            Legal Name :
                        </Text>
                        <Text align="left" className="text-[#707070] md:!text-[18px] !text-[14px]">
                            ACH Routing Number:
                        </Text>
                        <Text align="left" className="text-[#707070] md:!text-[18px] !text-[14px]">
                            Account Number :
                        </Text>
                        <Text align="left" className="text-[#707070] md:!text-[18px] !text-[14px]">
                            Account Type :
                        </Text>
                    </div>
                    <div className='space-y-1 flex flex-col md:items-start items-end'>
                        <Text align="left" className="text-[#707070] md:!text-[18px] !text-[14px]">
                            Lenaablahgmail.com
                        </Text>
                        <Text align="left" className="text-[#707070] md:!text-[18px] !text-[14px]">
                            Lena Ablah
                        </Text>
                        <Text align="left" className="text-[#707070] md:!text-[18px] !text-[14px]">
                            20457894121
                        </Text>
                        <Text align="left" className="text-[#707070] md:!text-[18px] !text-[14px]">
                            546321120
                        </Text>
                        <Text align="left" className="text-[#707070] md:!text-[18px] !text-[14px]">
                            Checking
                        </Text>
                    </div>
                </div>

                <Text className="border-b border-black text-black md:!text-[18px] !text-[14px]">
                    Edit
                </Text>
            </div>
            <Text variant="h6" className="text-black custom-font !tracking-widest py-6">
                Recipient Address
            </Text>
            <div className='p-3 rounded border border-gray-300 flex md:flex-row flex-col items-center justify-between'>
                <Text align="left" className="text-[#707070] md:!text-[18px] !text-[14px]">
                    Abena creek  block 6 Oyarifa, accra ghana
                </Text>
                <Text className="border-b border-black text-black md:!text-[18px] !text-[14px]">
                    Edit
                </Text>
            </div>
            <Link href="/ecom/explore/send-money/confirm-payment">
            <Button className='bg-black w-full py-3 rounded mt-6 !font-light'>
                Send Money
            </Button>
            </Link>
        </div>
    )
}
