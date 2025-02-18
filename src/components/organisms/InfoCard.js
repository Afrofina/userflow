import React from 'react'
import { Text, Image } from "../atoms"
import { TextIcon } from '../molecules';
import Link from 'next/link';

export default function InfoCard(props) {
    const {
        icon,
        text,
        textVariant,
        isButton,
        buttonText,
        buttonLink,
        iconWidth,
        iconHeight,
        textIconClass,
        buttonClass,
        buttonVariant
    } = props;

    return (
        <div className='shadow-md bg-white rounded cursor-pointer hover:bg-gray-50'>
            <div className='flex justify-end p-3'>
                <Image src="/info.svg" width={20} height={20} />
            </div>
            <TextIcon
                iconSrc={icon}
                iconHeight={iconHeight}
                iconWidth={iconWidth}
                text={text}
                textVariant={textVariant}
                mainClass={textIconClass}
            />
            {isButton && <div className='border-t border-gray-100 py-2 flex justify-center w-full'>
                <Link href={buttonLink}>
                    <Text className={buttonClass} variant={buttonVariant}>
                        {buttonText}
                    </Text>
                </Link>
            </div>}
        </div>
    )
}
InfoCard.defaultProps = {
    icon: '/next.svg',
    iconWidth: 40,
    iconHeight: 40,
    text: 'I am a description of card',
    textVariant: 'subtitle1',
    isButton: true,
    buttonText: "button text",
    buttonLink: '/',
    buttonClass: "text-primary hover:underline cursor-pointer text-center",
    buttonVariant: "subtitle1",
    textIconClass: 'flex flex-col items-center space-y-3 px-12 pb-5 '
}
