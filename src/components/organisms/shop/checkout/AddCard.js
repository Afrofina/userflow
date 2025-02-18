import React from 'react'
import { InputIcon } from '@/components/molecules'
import { Button } from '@/components/atoms'
export default function AddCard({handleClick}) {
    return (
        <div className='space-y-5'>
            <InputIcon iconSrc={'/shop/checkout/avatar.svg'} placeholder={'Name on card'} />
            <InputIcon iconSrc={'/shop/checkout/cardBlack.svg'} placeholder={'Card Number'} />
            <div className='grid grid-cols-7 gap-5'>
                <div className='col-span-4  '>
                    <InputIcon iconSrc={'/shop/checkout/calendar.svg'} placeholder={'MM/YYYY'} />
                </div>
                <div className='col-span-3'>
                    <InputIcon iconSrc={'/shop/checkout/lock.svg'} placeholder={'CVV'} />
                </div>
            </div>
            <div className='px-8'>
                    <Button className="w-full bg-black px-12  py-3 !text-[18px] rounded mt-4 font-extralight" onClick={handleClick}>
                        Add
                    </Button>
                </div>
        </div>
    )
}
