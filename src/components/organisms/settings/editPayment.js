import React from 'react'
import { InputIcon } from '@/components/molecules'
import { Button, Text } from '@/components/atoms'
export default function EditPayment({ handleClick }) {
    return (
        <div className='space-y-5'>
            <Text className="custom-font !text-[16px] !tracking-widest text-[#333333] lg:block hidden" align="left">
                Payment Method
            </Text>
            <Text className="sf-pro !text-[16px] text-[#575757] pt-1" align="left">
                Add your bank credit card for billing and making purchases
            </Text>
            <InputIcon iconSrc={'/shop/checkout/avatar.svg'} placeholder={'Name on card'} />
            <InputIcon iconSrc={'/shop/checkout/cardBlack.svg'} placeholder={'Card Number'} />
            <InputIcon iconSrc={'/shop/checkout/calendar.svg'} placeholder={'MM/YYYY'} />
            <InputIcon iconSrc={'/shop/checkout/lock.svg'} placeholder={'CVV'} />

            <div className=''>
                <Button className="w-full bg-black px-12  py-3 !text-[18px] rounded mt-4 font-extralight" onClick={handleClick}>
                    Add
                </Button>
            </div>
        </div>
    )
}
