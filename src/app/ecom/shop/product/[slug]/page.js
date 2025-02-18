import React from 'react'
import { MainLayout } from '@/components/layouts'
import { Text,Image } from "@/components/atoms"
import { ProductSlider, ProductInfo, ProductDescription, ProductCard, Reviews, WriteReviewForm, ReviewCard } from "@/components/organisms"
import { TextIcon } from '@/components/molecules'
export default function Page() {
  return (
    <MainLayout>
      <div className='overflow-auto h-full'>
        <div className='grid grid-cols-11 lg:gap-4 lg:border-b border-b-0 border-black lg:pr-4 pr-0 '>
          <div className='grid grid-cols-2 pt-12 pl-3 lg:col-span-7 col-span-11 border-r border-black lg:pr-0 pr-2'>
            <div className='lg:col-span-1 col-span-2'>
              <ProductSlider />
            </div>
            <div className='lg:px-4 px-0 lg:col-span-1  col-span-2'>
              <ProductInfo />
            </div>
            <div className='col-span-2 pb-6 lg:block hidden '>
              <Text align="left" className="text-black custom-font !tracking-widest !text-[24px] py-4 ">
                Product description
              </Text>
              <Text align="left" className="text-black sf-pro !tracking-widest !text-[18px] py-4 ">
                Whether you feel like wearing a bold African print, or one solid color, the power is in your hands in the Keeya Reversible African Print Maxi Wrap Skirt. It features a high-waisted, maxi, A-line silhouette, wrap design, tie closure, a floral Ankara print on one side, and a beautiful orange on the other. Choose your size and length preference.Pair with the Keeya Reversible Blouse for a royal set!One-Size fits size S-L.One-Size Plus fits XL-3XLength 40 recommended for 5'7 or shorterLength 43 recommended for 5'7 or taller.100% CottonMade in Nigeria.Keeya is a Setswana girl's name meaning "garden flower." Setswana is the national language of Botswana.100% Cotton AnkaraReturns:We will be glad to exchange your item or give you a full refund if return is sent within 10 days of receipt of product.
              </Text>
            </div>
          </div>
          <div className='col-span-4 pt-6 lg:block hidden '>
            <ProductDescription />
            <div className='grid grid-cols-2 gap-3 pt-4'>
              <ProductCard isLiked={true} />
              <ProductCard isLiked={false} />
            </div>
          </div>
        </div>
        <div className='lg:block hidden'>
          <Reviews />
        </div>
        <div className='lg:hidden block px-3 space-y-4 pt-6'>
          <div className='flex justify-between py-4'>
            <Text className="text-black custom-font !tracking-widest !text-[24px]" align="left">
              Reviews
            </Text>
            <TextIcon iconSrc="/shop/product/edit.svg" text="Write Review" textClass="text-[#0058FF] !text-[14px] sf-pro" mainClass="flex items-center space-x-2" />
          </div>
          <div className='flex items-center space-x-3 pb-4'>
            <Text className="text-black !text-[14px] sf-pro" align="left">
              4.7
            </Text>
            <div className='flex items-center'>
              {[0, 1, 2, 3].map(() => (<Image src={'/shop/product/starFill.svg'} width={20} />))}
              <Image src={'/shop/product/starOutline.svg'} width={20} />
            </div>
          </div>
          <ReviewCard />
          <ReviewCard />
        </div>
        <WriteReviewForm />
      </div>
    </MainLayout>
  )
}
