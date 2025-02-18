import React from 'react'
import { Button, Text, Input, Image } from '@/components/atoms'
import Link from 'next/link'
export default function AmountForm() {
    return (
        <div className=''>
            <div className='flex'>
                <Button className="custom-font text-black !tracking-widest border-b-[2px] border-black w-full pb-2">
                    International
                </Button>
                <Button className="custom-font text-[#575757] !tracking-widest border-b-[2px] border-[#D9D9D9] w-full pb-2">
                    Same Currency
                </Button>
            </div>
            <div className='pt-12'>
                <Text align="left" className="text-[#575757] !font-light">
                    Amount to send
                </Text>
                <div className='border border-[#929292] flex items-center  px-2 py-[16px] rounded'>

                    <Input className="bg-transparent text-black placeholder-black w-full focus:outline-none" placeholder="0" />
                    <div className='flex items-center'>
                        <Text>
                            USD
                        </Text>
                        <Image src="/explore/down.svg" />
                    </div>
                </div>
                <Text align="left" className="text-[#575757] !font-light pt-8">
                    Recipient receives
                </Text>
                <div className='border border-[#929292] flex items-center  px-2 py-[16px] rounded'>

                    <Input className="bg-transparent text-black placeholder-black w-full focus:outline-none" placeholder="0" />
                    <div className='flex items-center'>
                        <Text>
                            GHC
                        </Text>
                        <Image src="/explore/down.svg" />
                    </div>
                </div>
                <Link href="/ecom/explore/send-money/recepient-details">
                    <Button className='bg-black w-full py-3 rounded mt-6 !font-light'>
                        Send Money
                    </Button>
                </Link>
            </div>
        </div>
    )
}
