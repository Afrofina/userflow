import React from 'react'
import { Text, Button, } from "@/components/atoms"
import { TextIcon } from "@/components/molecules"
export default function Card(props) {
    const {
        header,
        description,
        buttonText,
        buttonIcon,
        mainClass,
        headerTextVariant,
        descriptionTextVariant,
        isBorderd,
        borderdClass,
        isButton,
        headerClass,
        descriptionClass,
        isDescription,
        isTextIcon,
        textIconsText,
        textIconsIcon,
        bgColor,
        textAlign,
        isButtonIcon,
        buttonClass,
        iconWidth
    } = props
    return (
        <div className={`${isBorderd ? borderdClass : ''} ${mainClass} ${bgColor}`}>
            {isTextIcon && <TextIcon text={textIconsText} iconSrc={textIconsIcon} iconClasses='fill-black' iconWidth={iconWidth} />}
            <Text variant={headerTextVariant} className={headerClass} align={textAlign}>
                {header}
            </Text>
            {isDescription && <Text variant={descriptionTextVariant} className={descriptionClass} align={textAlign}>
                {description}
            </Text>}
            {isButton && <Button isIcon={isButtonIcon} iconSrc={buttonIcon} className={buttonClass}>
                {buttonText}
            </Button>}
        </div>
    )
}
Card.defaultProps = {
    header: 'Shop with afrofina ',
    description: 'Experience a whole new system of shopping, purchase goods/ products as a retailer or wholesale and send gifts to friends and loved ones.',
    buttonText: 'Shop Now',
    mainClass: ' p-12 rounded-xl flex flex-col items-center space-y-8',
    headerClass: 'custom-font !text-black lg:!text-[40px] !tracking-widest !text-[20px]',
    isBorderd: true,
    borderdClass: 'border border-primary bg-white',
    headerTextVariant: 'h5',
    descriptionTextVariant: 'body1',
    isButton: true,
    isDescription: true,
    isTextIcon: false,
    bgColor: 'bg-primary',
    textAlign: 'center',
    isButtonIcon: false,
    iconWidth: 40

}
