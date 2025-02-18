import React from 'react'
import { Image, Text } from '@/components/atoms'
import { TextIcon, Counter } from '@/components/molecules'
export default function CartProductCard() {
    return (
        <div className='flex justify-between items-start'>
            <div className='flex lg:space-x-4 space-x-2'>
                <div className='flex items-center lg:space-x-4 space-x-2'>
                    <Image src={'/shop/cart/delete.svg'} style={20} className={'lg:w-[20px] w-[13px]'}/>
                    <div className='lg:!h-[148px] !h-[96.55px] lg:w-[162px] w-[105.68px] rounded-md' style={{ backgroundImage: `url('/shop/images/product.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                    </div>
                </div>
                <div>
                    <div className='flex lg:space-x-32 space-x-12'>
                        <Text align="left" className="custom-font lg:!text-[16px] !text-[10px] text-black !tracking-widest">
                            Man scrub
                        </Text>
                        <Text align="left" className="custom-font lg:!text-[16px] !text-[10px] text-black !tracking-widest">
                            $24
                        </Text>
                    </div>
                    <Text align="left" className="text-[#575757] lg:!text-[16px] !text-[10px] sf-pro py-3">
                        22  stocks remaining
                    </Text>
                    <div className='flex'>
                        <TextIcon iconSrc="/shop/product/ship.svg" text="U-cargo Available" textClass="lg:!text-[14px] !text-[9.3px] text-[#63257B]" iconWidth={17} mainClass="flex items-center space-x-2 bg-[#DFD0E5] px-2 py-0.5 rounded" />

                    </div>
                </div>
            </div>
            <Counter />
        </div>
    )
}
