import React from 'react'
import { TextIcon } from '@/components/molecules'
import { Text, Image } from '@/components/atoms'
import Link from 'next/link'
export default function optionCard({ title, description, icon, link }) {
    return (
        <div className='border border-black px-4 py-4 rounded'>
            <TextIcon iconSrc={icon} iconWidth={32} text={title} textClass="!text-[16px] text-black sf-pro !font-medium" />
            <Text className="!text-[14px] text-black sf-pro pt-3">
                {description}
            </Text>
            <div className='pt-4 flex justify-end '>
                <Link href={link}>
                    <Image src="/ship/right.svg" width={18} />
                </Link>
            </div>
        </div>
    )
}
