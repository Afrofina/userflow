'use client'
import React,{useState} from 'react'
import { Image, Text, Button } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
import Link from 'next/link'

export default function ProductCard({ isLiked, productHeight ,showHeart,isCheck,showCheck}) {
    const [isLikedIcon,setIsLiked]=useState(false)

    return (
        <div className='w-full'>
            {/* <Image src={'/shop/images/product.png'} height={500} width={600} className={'h-[295px]'} /> */}
            <div className={`w-full rounded-lg ${productHeight}`} style={{ backgroundImage: `url('/shop/images/product.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
                {showHeart && <div className='flex justify-end p-4'>
                    <Image src={isLikedIcon ? '/shop/images/heartSelected.svg' : '/shop/images/heartWhite.svg'} width={34.29} onClick={()=>setIsLiked(!isLikedIcon)} className={'cursor-pointer'}/>
                </div>}
                {showCheck && <div className='flex justify-end p-4'>
                    <Image src={isCheck ? '/shop/checkFill.svg' : '/shop/checkWhite.svg'} width={24} />
                </div>}
            </div>
            <div className='bg-white border border-black rounded-md p-3 -mt-[40px]'>
                <div className='flex items-center space-x-4'>
                    <TextIcon iconSrc="/shop/flag.svg" text="Benin" textClass="text-black lg:!text-[10px] !text-[8px]" iconWidth={10} mainClass="flex items-center space-x-2 items-center" />
                    <TextIcon iconSrc="/shop/shop.svg" text="African Retreat " textClass="text-black lg:!text-[10px] !text-[8px]" iconWidth={10} mainClass="flex items-center space-x-2 items-center" />
                </div>
                <div className='flex justify-between items-center'>
                    <Link href={'/ecom/shop/product/Man scrub'}>
                        <Text className="custom-font text-black !tracking-widest lg:!text-[18px] !text-[12px]">
                            Man scrub
                        </Text>
                    </Link>
                    <Text className="custom-font text-black !tracking-widest lg:!text-[16px] !text-[10px]">
                        $24
                    </Text>
                </div>

                <Text className="lg:!text-[10px] !text-[8px] text-black" align="left py-1">
                    This ghana made man scrub is good for melanin men and will have your skin glowing
                </Text>
                <Button className="bg-primary w-full flex justify-center py-1 rounded-full">
                    <TextIcon iconSrc="/header/cart.svg" text="Add to cart " textClass="text-black !text-[10px]" iconWidth={10} mainClass="flex items-center space-x-2 items-center" />

                </Button>
            </div>
        </div>
    )
}
ProductCard.defaultProps = {
    productHeight: ' lg:!h-[305px] !h-[194.88px] ',
    showHeart:true,
    showCheck:false
}
