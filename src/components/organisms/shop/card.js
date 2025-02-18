import React from 'react'
import { Text, Image } from '@/components/atoms'
import Link from 'next/link'
export default function Card(props) {
    const {
        text,
        imageSrc,
        iconSrc,
        link
    } = props
    return (
        <div className='relative w-full lg:h-[321px] h-[194.88px]'>
            {/* Background image */}
            <div className='w-full rounded-lg' style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
                {/* Image container */}
                <div className='w-full flex flex-col justify-end h-full p-3 pb-6 relative'>
                    <div className='flex justify-end absolute  w-full bottom-6 pr-6'>
                        <Link href={link}>
                            <Image src={iconSrc} width={24} />
                        </Link>
                    </div>
                    <Text variant="h4" className="custom-font !tracking-widest !text-[24px] ">
                        {text}
                    </Text>
                </div>
            </div>
        </div>
    )
}
