import React from 'react'
import { Text, Image } from '@/components/atoms'
export default function pageOrgNine() {
    return (
        <div className='flex flex-col items-center py-24 space-y-12 lg:px-32 px-6'>
            <Text className="lg:!text-[40px] !text-[20px] text-black custom-font !tracking-widest">
                Supported countries
            </Text>
            <Image src="/landing/countries.svg" height={337} width={995} />
        </div>
    )
}
