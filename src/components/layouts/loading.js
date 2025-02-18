import React from 'react'
import { Image } from '@/components/atoms'
export default function Loading() {
    return (
        <div className='flex h-full justify-center items-center'>
            <Image src={'/logo.svg'} width={220} height={120} className={'mx-auto '} />
        </div>
    )
}
