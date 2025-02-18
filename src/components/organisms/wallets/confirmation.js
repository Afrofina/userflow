import React from 'react'
import { Text, Button } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
export default function Confirmed({handleClick}) {
    return (
        <div className='px-2 pt-[48px]'>
            <TextIcon iconSrc="/sendMoney/success.svg" iconWidth="32" text="payment confirmed" textClass="text-black custom-font !tracking-widest !text-[32px]" />
            <Text className="!text-[#333333] sf-pro !text-[18] pt-5 pb-4">
                Your withdrawal of $50 was successfully
                made to USDT  address  </Text>
            <Text>

                Address here
            </Text>
            <Button className='border border-black text-black w-full py-3 rounded !font-light mt-32'>
                View Invoice
            </Button>
            <Button className="w-full bg-black  py-3 !text-[18px] rounded mt-4 font-extralight" onClick={handleClick}>
            Complete
            </Button>
        </div>
    )
}
