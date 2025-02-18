import React from 'react'
import { Text, Button } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
export default function Processing() {
    return (
        <div className='h-full flex flex-col justify-center pt-32 md:px-32 px-4'>
            <TextIcon iconSrc="/sendMoney/alert.svg" iconWidth="32" text="Payment failed" textClass="text-black custom-font !tracking-widest !text-[32px]" />
            <Text className="text-black sf-pro !text-[18] pt-5">
                There seems to be  a problem with yourcredit or debit card please contact your bank or add a new bank card
            </Text>
            <Button className='bg-black w-full py-3 rounded !font-light mt-10'>
                Add new credit card
            </Button>
        </div>
    )
}
