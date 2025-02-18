import React from 'react'
import { Text, Button } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
export default function PaymentConfirmed() {
    return (
        <div className='h-full flex flex-col justify-center px-12'>
            <TextIcon iconSrc="/sendMoney/success.svg" iconWidth="32" text="payment confirmed" textClass="text-black custom-font !tracking-widest !text-[32px]" />
            <Text className="!text-[#333333] sf-pro !text-[18] pt-5 pb-4">
                Your payment was successful your  tracking ID is    </Text>
            <Text>
              #DF56584F

            </Text>
            <Text>

                your item has been shipped
            </Text>
            <Button className='border border-black text-black w-full py-3 rounded !font-light mt-16'>
                Track my package
            </Button>
        </div>
    )
}
