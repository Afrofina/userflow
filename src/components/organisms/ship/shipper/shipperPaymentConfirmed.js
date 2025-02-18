import React from 'react'
import { Text, Button } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
export default function PaymentConfirmed({handleClick}) {
    return (
        <div className='h-full flex flex-col justify-center px-12'>
            <TextIcon iconSrc="/sendMoney/success.svg" iconWidth="32" text="Congratulations " textClass="text-black custom-font !tracking-widest !text-[32px]" />
            <Text className="!text-[#333333] sf-pro !text-[18] pt-5 pb-4">
                Payment of $30 was successfully <br />
                made to you Jenny William<br />
                with insurance of $10<br />

            </Text>
            <Text className="!font-medium sf-pro text-black !text-[18px]">
                Total amount paid 40$

            </Text>

            <Button className='border border-black text-black w-full py-3 rounded !font-light mt-16'>
            View Invoice
            </Button>
            <Button className=' bg-black text-white w-full py-3 rounded !font-light mt-4' onClick={handleClick}>
            Complete
            </Button>
        </div>
    )
}
