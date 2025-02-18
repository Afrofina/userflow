import React from 'react'
import { Text } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
export default function Processing() {
    return (
        <div className='h-full flex flex-col justify-center'>
            <TextIcon iconSrc="/sendMoney/loading.svg" iconWidth="32" text="processing" textClass="text-black custom-font !tracking-widest !text-[32px]" />
            <Text className="text-black sf-pro !text-[18] pt-5">
                Please wait while we confirm your payment
            </Text>
        </div>
    )
}
