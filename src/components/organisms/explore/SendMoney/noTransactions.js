import React from 'react'
import { Image, Text, Button } from '@/components/atoms'
import Link from 'next/link'
export default function NoTransactions() {
    return (
        <div className='h-full flex flex-col justify-center space-y-6'>
            <Image src={'/sendMoney/images/coins.png'} width={349} />
            <Text>
                You don’t have any transactions yet.
            </Text>
            <Link href="/ecom/explore/send-money/amount">
                <Button className='bg-black w-full py-3 rounded mt-3 !font-light'>
                    Send Money
                </Button>
            </Link>
        </div>
    )
}
