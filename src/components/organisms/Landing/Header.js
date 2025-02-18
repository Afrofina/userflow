import React from 'react'
import { Image, Text, Button } from "../../atoms"
import Link from 'next/link'
import { TextIcon } from '@/components/molecules'
export default function Header() {
    return (
        <div className='p-4 flex justify-between px-6 border-b border-primary'>
            <Image src={"/logo.svg"} width={235} height={32} />
            <div className='lg:flex hidden items-center space-x-4'>
                <Link href={"/"}>
                    <Text>
                        Shop
                    </Text>
                </Link>
                <Link href={"/"}>
                    <Text>
                        Sell
                    </Text>
                </Link>
                <Link href={"/"}>
                    <Text>
                        Ship
                    </Text>
                </Link>
                <Link href={"/"}>
                    <Text>
                        Partnerships
                    </Text>
                </Link>
                <Link href={"/"}>
                    <Text>
                        Royal
                    </Text>
                </Link>
                <Link href={"/"}>
                    <Text>
                        Track
                    </Text>
                </Link>
                <Link href={"/"}>
                    <Text>
                        Help
                    </Text>
                </Link>
            </div>
            <div className='lg:flex hidden items-center space-x-3'>
                <Link href={"/"}>
                    <Text>
                        Sign in
                    </Text>
                </Link>
                <Button>
                    Get Started
                </Button>
            </div>
            <TextIcon text="Menu" textClass="sf-pro text-black !text-[12px] pr-4 " iconSrc="/landing/burger.svg" iconWidth={24} mainClass="flex lg:hidden flex-row-reverse items-center "/>
        </div>
    )
}
