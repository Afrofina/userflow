import React from 'react'
import { MainLayout } from '@/components/layouts'
import { Text, Input, Button } from '@/components/atoms'
import { CartProductCard, ProductCard } from '@/components/organisms'
import { TextIcon } from '@/components/molecules'
import Link from 'next/link'
export default function page() {
  return (
    <MainLayout pageTitle={'Cart'}>
      <div className='h-full grid grid-cols-12 '>
        <div className='pt-10 lg:pl-4 pl-2 overflow-auto h-full lg:col-span-8 col-span-12 lg:pr-10 pr-2 lg:pb-10 pb-3 lg:border-r border-r-0 border-black'>
          <div className='space-y-6'>
            <CartProductCard />
            <CartProductCard />
            <CartProductCard />
          </div>
          <div className='lg:pl-12 pl-2 pt-10'>
            <Text className="!text-[16px] custom-font text-black !tracking-widest" align="left">
              Available shipping method
            </Text>
            <div className='flex justify-between pt-4'>
              <TextIcon iconSrc="/shop/product/ship.svg" text="U-cargo Available" textClass="!text-[14px] text-[#63257B]" iconWidth={17} mainClass="flex items-center space-x-2  rounded" />
              <TextIcon iconSrc="/sendMoney/checkFill.svg" text="shipping fee $15" textClass="!text-[15px] text-[#058C12] pr-4" iconWidth={15} mainClass="flex flex-row-reverse items-center space-x-2  rounded" />

            </div>
            <div className='flex justify-between pt-3'>
              <TextIcon iconSrc="/shop/product/ship.svg" text="Afrofina shipping" textClass="!text-[14px] text-[#63257B]" iconWidth={17} mainClass="flex items-center space-x-2  rounded" />
              <TextIcon iconSrc="/sendMoney/check.svg" text="shipping fee $15" textClass="!text-[15px] text-[#058C12] pr-4" iconWidth={15} mainClass="flex flex-row-reverse items-center space-x-2  rounded" />

            </div>
           <div className='grid grid-cols-12 pt-6'>
           <div className='flex flex-col lg:col-span-5 col-span-12'>
              <Text align="left" className="custom-font !text-[16px] text-black !tracking-widest">
                Have A Coupon ?
              </Text>

              <Text align="left" className="sf-pro !text-[16px] text-[#575757] pt-2 ">
                Enter coupon code here
              </Text>
              <Input placeholder />
            </div>
            <div className='flex lg:flex-col flex-row lg:items-end  items-baseline lg:col-span-7 col-span-12 justify-between'>
              <Text align="right" className="custom-font !text-[16px] text-black !tracking-widest">
                Order Total
              </Text>
              <div className='col-span-8 lg:w-full w-32 flex justify-end items-end space-x-4'>
                <Text className="custon-font !tracking-wide text-[#959595] !text-[20px]">
                  $120
                </Text>
                <Text className="custon-font !tracking-wide text-black !text-[42px]">
                  $110
                </Text>
              </div>
            </div>
           </div>
            <div className='flex justify-end lg:pt-4 pt-12'>
            <Link href={'/ecom/shop/checkout'}>
              <Button className="bg-black lg:w-auto w-full py-2 px-2 rounded-md text-[18px]">
                proceed to checkout
              </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-span-4 flex-grow overflow-hidden lg:block hidden'>
          <div className='h-full overflow-auto pt-10 pl-6 pr-3 pb-10'>
            <div className='flex justify-between items-center pb-4'>
              <Text className="!text-[16px] custom-font text-black !tracking-widest" align="left">
                Similar products
              </Text>
              <Text className="!text-[14px] sf-pro text-[#0058FF] " align="left">
                Explore More
              </Text>
            </div>
            <div >
              <div className='grid grid-cols-2 gap-3  '>
                {[0, 1, 2, 3, 4, 5, 6].map(() => (<ProductCard productHeight="!h-[224.74px]" />))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
