'use client'
import React from 'react'
import { TextIcon } from '@/components/molecules'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function ShipSidebar() {
    const pathname = usePathname()
    // console.log("Current route:", pathname);
    return (
        <div className='w-[214px] bg-[#FEFBFF] border-r border-black pt-4 lg:block hidden'>
            <Link href={'/ecom/ship/u-cargo-agent'}>
                <TextIcon iconClasses=''
                    mainClass={`${pathname?.includes('/u-cargo-agent') && pathname?.includes('/ship') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center  pl-5 space-x-1 px-2 py-2 rounded-full `}
                    text="u-cargo agent"
                    textClass="text-black  text-sm pl-1"
                    textVariant="subtitle2"
                    iconSrc="/ship/agent.svg"
                />

            </Link>
            <Link href={'/ecom/ship/u-cargo-shipper'}>
                <TextIcon iconClasses=''
                    mainClass={`${pathname?.includes('/u-cargo-shipper') && pathname?.includes('/ship') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center  pl-5 space-x-1 px-2 py-2 rounded-full `}
                    text="u-cargo shipper"
                    textClass="text-black  text-sm pl-1"
                    textVariant="subtitle2"
                    iconSrc="/ship/shipper.svg"
                />

            </Link>
            <Link href={'/ecom/ship/standard-shipping'}>
                <TextIcon iconClasses=''
                    mainClass={`${pathname?.includes('/standard-shipping') && pathname?.includes('/ship') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center  pl-5 space-x-1 px-2 py-2 rounded-full `}
                    text="standard shipping"
                    textClass="text-black  text-sm pl-1"
                    textVariant="subtitle2"
                    iconSrc="/ship/standard.svg"
                />

            </Link>
            <Link href={'/ecom/ship/track-shipping'}>
                <TextIcon iconClasses=''
                    mainClass={`${pathname?.includes('/track-shipping') && pathname?.includes('/ship') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center  pl-5 space-x-1 px-2 py-2 rounded-full `}
                    text="Track Shipping"
                    textClass="text-black  text-sm pl-1"
                    textVariant="subtitle2"
                    iconSrc="/ship/track.svg"
                />

            </Link>
        </div>
    )
}
