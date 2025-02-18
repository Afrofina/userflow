import React from 'react'
import { TextIcon } from '@/components/molecules'
import { Button, Text } from '@/components/atoms'
export default function CurrentBalance(props) {
    const { balance,currency } = props
    return (
        <div className='bg-white shadow-sm border rounded-md p-4'>
            <TextIcon iconSrc={'/dots.svg'} text={'Yazz Coin'} textVariant={'h6'} mainClass={'flex flex-row-reverse items-center justify-between'} />
            <Text variant={'h3'} className="pt-3 text-black">
                $ {balance} {currency}*
            </Text>
            <Text className="py-2 text-gray-500 text-xs">
                Available
            </Text>
            <div className='bg-gray-100 p-4 rounded-md'>
                <div className='flex items-center space-x-3'>
                    <Text>
                        CAD
                    </Text>
                    <div className='border-dotted border-b-2 w-full'>

                    </div>
                    <Text>
                        ${balance}
                    </Text>
                </div>
                <div className='flex items-center pt-4 space-x-3'>
                    <Text>
                        US
                    </Text>
                    <div className='border-dotted border-b-2 w-full'>

                    </div>
                    <Text>
                        ${balance}
                    </Text>
                </div>
            </div>
            <Text className={'py-2 text-gray-500 text-xs'}>
                *This is an estimate based on the most recent conversion rate
            </Text>

            <Button className="rounded-full">
               Add Money
            </Button>
            <Text className={'pt-4 text-primary'}>
                Set up auto transfers
            </Text>
        </div>
    )
}
CurrentBalance.defaultProps={
    balance:100 ,
    currency:'CAD'
}
