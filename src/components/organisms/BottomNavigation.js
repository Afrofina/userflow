'use client'
import React from 'react'
import { Image, Button } from '../atoms'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export default function BottomNavigation() {
    const pathname = usePathname()
    return (
        <div className='w-full border-t border-black flex justify-between items-center px-5'>
            <Link href="/ecom/explore">
                <Button className>
                    <Image src={'/sidebar/explore.svg'} width={18} height={18} className={`${pathname?.includes('/explore') ? 'bg-primary' : ''} h-[34px] w-[34px] flex justify-center items-center p-1.5 rounded-full`} />
                </Button>
            </Link>
            <Link href="/ecom/shop">
                <Button className="">
                    <Image src={'/sidebar/shop.svg'} width={18} height={18} className={`${pathname?.includes('/shop') ? 'bg-primary' : ''} h-[34px] w-[34px] flex justify-center items-center p-1.5 rounded-full`} />
                </Button>
            </Link>
            <Link href="/ecom/ship/u-cargo-shipper">
                <Button className="">
                    <Image src={'/sidebar/ship.svg'} width={18} height={18} className={`${pathname?.includes('/ship') ? 'bg-primary' : ''} h-[34px] w-[34px] flex justify-center items-center p-1.5 rounded-full`} />
                </Button>
            </Link>
            <Link href="/ecom/wallets">
                <Button className="">
                    <Image src={'/sidebar/wallet.svg'} width={18} height={18} className={`${pathname?.includes('/wallets') ? 'bg-primary' : ''} h-[34px] w-[34px] flex justify-center items-center p-1.5 rounded-full`} />
                </Button>
            </Link>
            <Link href="/ecom/support">
                <Button className="">
                    <Image src={'/sidebar/support.svg'} width={18} height={18} className={`${pathname?.includes('/support') ? 'bg-primary' : ''} h-[34px] w-[34px] flex justify-center items-center p-1.5 rounded-full`} />
                </Button>
            </Link>
        </div>
    )
}
