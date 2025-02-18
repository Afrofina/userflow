import React from 'react'
import { Text, Button } from '@/components/atoms'
import Link from 'next/link'
export default function sectionOne() {
    return (
        <div className='!h-[555px] w-full grid lg:grid-cols-2 grid-cols-1' style={{ backgroundImage: `url('/explore/royal/royal.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
            <div className='flex flex-col justify-center lg:px-24 md:px-12 px-4 items-start space-y-4'>
                <Text className="text-white lg:!text-[40px] !text-[20px] custom-font !tracking-widest pb-2 pt-4 " align="left">
                    Join The royal Family
                    and enjoy amazing benefits
                </Text>
                <Text className="text-white lg:!text-20px] !text-[16px] sf-pro pb-2 !font-extralight" align="left">
                    Endless discounts, Royal points, Pay with crypto,<br />
                    Free delivery for groceries, Express shipping and more.
                </Text>
                <Link href={'/ecom/explore/royal/subscribe'}>
                    <Button className="!text-[#63257B] !text-[20px] px-8 bg-white rounded py-2 transition-transform transform-gpu hover:-translate-y-1">
                        Join Now
                    </Button>
                </Link>
            </div>
            <div>

            </div>
        </div>
    )
}
