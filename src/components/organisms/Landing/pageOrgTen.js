import React from 'react'
import { Button, Image, Text } from '@/components/atoms'
import { Card, TextIcon } from '@/components/molecules'
export default function PageOrgTen() {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-0 pt-10'>
            <Image src={'/landing/download.svg'} width={720} height={720} className={'w-full lg:rounded-3xl rounded-none'} />
            <div className='lg:rounded-3xl rounded-none flex  flex-col items-center justify-center lg:px-12 px-6 lg:py-0 py-8 space-y-6 bg-primary'>
                <Image src={'/landing/mobile.svg'} />
                <Text className="text-black lg:!text-[40px] !text-[28px] custom-font !tracking-widest">
                    Download the app
                </Text>
                <Text className="text-black lg:!text-[20px] !text-[16px] sf-pro pt-2 pb-10">
                    Do all your favorite things with Afrofina right one your mobile device,
                    from shopping, tracking your packages, sending packages or earning as
                    a u-cargo agent.
                </Text>
                <div className='flex lg:flex-row flex-col lg:space-x-5 space-x-0 lg:space-y-0 space-y-5'>
                    <Button>
                        <TextIcon iconSrc="/landing/apple.svg" text="Get on appstore" textClass="text-primary sf-pro !text-[18px]" mainClass="flex space-x-3 items-center px-2 py-1" />
                    </Button>
                    <Button className="bg-primary border border-black rounded-full flex px-4 py-1.5">
                        <TextIcon iconSrc="/landing/playstore.svg" text="Get on appstore" textClass="text-black sf-pro !text-[18px]" mainClass="flex space-x-3 items-center px-2 py-1" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
