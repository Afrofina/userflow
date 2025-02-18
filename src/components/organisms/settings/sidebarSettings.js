'use client'
import React from 'react'
import { TextIcon } from '@/components/molecules'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function SidebarSendMoney({ handleClick }) {
    const pathname = usePathname()
    // console.log("Current route:", pathname);
    return (
        <div className='w-[151px] bg-white border-r border-black pt-4 lg:block hidden'>

            <TextIcon iconClasses=''
                mainClass={`${!pathname?.includes('transactions') && pathname?.includes('/send-money') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center cursor-pointer space-x-1 pl-6 py-2 rounded-full `}
                text="Profile"
                textClass="text-black  text-sm pl-1"
                textVariant="subtitle2"
                iconSrc="/settings/profile.svg"
                onClick={()=>handleClick('profile')}
            />

            <TextIcon iconClasses=''
                mainClass={`${pathname?.includes('transactions') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center cursor-pointer space-x-1 pl-6 py-2 rounded-full `}
                text="Address"
                textClass="text-black  text-sm pl-1"
                textVariant="subtitle2"
                iconSrc="/settings/address.svg"
                onClick={()=>handleClick('address')}
            />

            <TextIcon iconClasses=''
                mainClass={`${pathname?.includes('transactions') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center cursor-pointer space-x-1 pl-6 py-2 rounded-full `}
                text="Payment"
                textClass="text-black  text-sm pl-1"
                textVariant="subtitle2"
                iconSrc="/settings/payment.svg"
                onClick={()=>handleClick('payment')}
            />

            <TextIcon iconClasses=''
                mainClass={`${pathname?.includes('transactions') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center cursor-pointer space-x-1 pl-6 py-2 rounded-full `}
                text="Bank"
                textClass="text-black  text-sm pl-1"
                textVariant="subtitle2"
                iconSrc="/settings/bank.svg"
                onClick={()=>handleClick('withdraw')}
            />

            <TextIcon iconClasses=''
                mainClass={`${pathname?.includes('transactions') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center cursor-pointer space-x-1 pl-6 py-2 rounded-full `}
                text="Security"
                textClass="text-black  text-sm pl-1"
                textVariant="subtitle2"
                iconSrc="/settings/security.svg"
                onClick={()=>handleClick('password')}
            />
            <TextIcon iconClasses=''
                mainClass={`${pathname?.includes('transactions') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center cursor-pointer space-x-1 pl-6 py-2 rounded-full `}
                text="Royal"
                textClass="text-black  text-sm pl-1"
                textVariant="subtitle2"
                iconSrc="/settings/royal.svg"
                onClick={()=>handleClick('royal')}
            />

        </div>
    )
}
