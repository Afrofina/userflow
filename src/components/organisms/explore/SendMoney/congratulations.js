import React from 'react'
import { Text, Button } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
export default function Congratulation() {
    return (
        <div className='h-full flex flex-col justify-center pt-24 md:px-32 px-12'>
            <TextIcon iconSrc="/sendMoney/success.svg" iconWidth="32" text="Congratulations " textClass="text-black custom-font !tracking-widest !text-[32px]" />
            <Text className="!text-[#333333] sf-pro !text-[18] pt-5 pb-4">
                Amount of $50 was sent to     </Text>
            <Text>
                lenaablah@gmail.com
            </Text>
            <Text>
                Lena Ablah
            </Text>
            <Button className='border border-black text-black w-full py-3 rounded !font-light mt-10'>
            View Invoice
            </Button>
            <Button className='bg-black w-full py-3 rounded !font-light mt-4'>
            Track Transaction
            </Button>
        </div>
    )
}
