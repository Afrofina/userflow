
'use client'
import React from 'react'
import { Image, Text } from '../atoms'
import Search from './Search'
import { TextIcon } from '../molecules'
import { useRouter } from 'next/navigation'
import { Notification } from '.'
import Option from './option'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header({ title }) {
  const router = useRouter()
  const pathname = usePathname()
  console.log("Current route:", pathname);

  return (
    <div className='shadow-sm py-4 bg-[#FEFBFF] sticky border-b border-black flex items-center lg:px-6 px-4  justify-between'>
      <div className='w-1/3 lg:block hidden'>
        <Search />
      </div>
      <div className='lg:hidden block '>
        <TextIcon text="Back" iconSrc="/header/left.svg" textClass="text-black !text-xs" mainClass="flex items-center lg:space-x-3 space-x-2" onClick={() => router.back()} ></TextIcon>
      </div>
      <Text variant={'h6'} className="text-black custom-font lg:hidden block !tracking-widest" align="center">
        {title}
      </Text>
      <div className='flex items-center lg:space-x-3 space-x-0'>
        <Link href="/ecom/shop/cart">
          <TextIcon iconSrc="/header/cart.svg" text="cart" textClass="text-black" mainClass=" items-center space-x-3 lg:flex hidden" />
        </Link>
        {/* <TextIcon iconSrc="/header/heart.svg" text="wishlist" textClass="text-black" mainClass=" items-center space-x-3 lg:flex hidden" /> */}
        <Notification button={<TextIcon iconSrc="/header/notification.svg" text="notification" textClass="text-black" mainClass=" items-center space-x-3 lg:flex hidden" />} />

        <div className='flex items-center space-x-3 lg:pl-4 pl-0 lg:border-l border-l-0 border-black'>
          <Option button={
            <Image src={'/header/options.svg'} width={24} height={24} className={'lg:w-auto w-[14.68px]'} />} />
          <Link href={'/ecom/settings'}>
            <Image src={'/header/avatar.svg'} width={48} height={48} className={'lg:w-auto w-[29.36px]'} />
          </Link>
        </div>
      </div>
    </div>

  )
}
