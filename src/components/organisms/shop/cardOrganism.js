import React from 'react'
import Card from "./card"
export default function CardOrganism() {
    return (
        <div className='grid grid-cols-4 gap-3 pt-5 pr-4'>
            <div className='lg:col-span-1 col-span-2'>
                <Card text="Premuim African wear" imageSrc="/shop/images/africanWear.svg" link="/ecom/shop/product/african-wear" iconSrc="/explore/rightIconWhite.svg" />
            </div>
            <div  className='lg:col-span-1 col-span-2'>
                <Card text="Men Wear" imageSrc="/shop/images/mensWear.svg" link="/ecom/explore/pay-utility" iconSrc="/explore/rightIconWhite.svg" />

            </div><div className='md:col-span-2 col-span-4'>
                <Card text="Trending products" imageSrc="/shop/images/trending.svg" link="/ecom/explore/pay-utility" iconSrc="/explore/rightIconWhite.svg" />

            </div>
        </div>
    )
}
