import React from 'react'
import { TextIcon } from '@/components/molecules'
import { Input, Select, Button, Text } from '@/components/atoms'
export default function CreateInvoice() {
    return (
        <div className='bg-white shadow-sm border rounded-md p-4 gap-4 space-y-5'>
            <TextIcon iconSrc={'/dots.svg'} text={'Create Invoice'} textVariant={'h6'} mainClass={'flex flex-row-reverse items-center justify-between'} />
            <Input placeholder="Customers Email" />
            <Input placeholder="Item Name" />
            <div className='flex space-x-5 '>

                <Input placeholder="Item Amount" />
                <Select className="w-full" label="Currency" />
            </div>
            <div className='flex items-center space-x-5'>
                <Button>
                    Send
                </Button>
                <Text className='text-primary' variant='subtitle2'>
                    Add more details
                </Text>
            </div>
        </div>
    )
}
