'use client'
import React from 'react'
import { TextIcon } from '@/components/molecules'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function SidebarSendMoney() {
    const pathname = usePathname()
    // console.log("Current route:", pathname);
    return (
        <div className='w-[187px] bg-white border-r border-black pt-4 lg:block hidden'>
            <Link href={'/ecom/explore/send-money'}>
                <TextIcon iconClasses=''
                    mainClass={`${!pathname?.includes('transactions') && pathname?.includes('/send-money') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center space-x-1 px-2 py-2 rounded-full `}
                    text="send money"
                    textClass="text-black  text-sm pl-1"
                    textVariant="subtitle2"
                    iconSrc="/explore/pay.svg"
                />

            </Link>
            <Link href={'/ecom/explore/send-money/transactions'}>
                <TextIcon iconClasses=''
                    mainClass={`${pathname?.includes('transactions') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center space-x-1 px-2 py-2 rounded-full `}
                    text="transactions"
                    textClass="text-black  text-sm pl-1"
                    textVariant="subtitle2"
                    iconSrc="/sendMoney/transactions.svg"
                />

            </Link>
        </div>
    )
}
