import React from 'react'
import { Text,Image as ImageAtom } from '@/components/atoms'
import Image from 'next/image'
import Link from 'next/link'
export default function Card(props) {
    const {
        text,
        imageSrc,
        iconSrc,
        link
    } = props
    return (
        <div className='relative w-full lg:h-[321px] h-[236px]'>
            {/* Background image */}
            <div className='w-full rounded-3xl'>
                {/* Image container */}
                <Image
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                    src={imageSrc}
                    alt={'some'}
                    priority
                />
                <div className=' absolute w-full flex flex-col justify-between h-full p-3 pb-6'>
                    <div className='flex justify-end'>
                        <Link href={link}>
                            <ImageAtom src={iconSrc} width={40} />
                        </Link>
                    </div>
                    <Text variant="h4" className="custom-font !tracking-widest ">
                        {text}
                    </Text>
                </div>
            </div>
        </div>
    )
}
