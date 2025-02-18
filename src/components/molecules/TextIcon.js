import React from 'react'
import { Text, Image } from '../atoms'
export default function TextIcon(props) {
    const {
        iconSrc,
        iconalt,
        iconClasses,
        iconWidth,
        iconHeight,
        text,
        textVariant,
        textClass,
        mainClass,
        onClick
    } = props
    return (
        <div className={mainClass} onClick={onClick}>
            <Image src={iconSrc} alt={iconalt} className={iconClasses} width={iconWidth} height={iconHeight} />
            <Text variant={textVariant} className={textClass}>
                {text}
            </Text>
        </div>
    )
}
TextIcon.defaultProps={
    mainClass:'flex flex-col  items-center space-y-3',
    textClass:'text-white',
    iconWidth:20,
    iconHeight:20
}
