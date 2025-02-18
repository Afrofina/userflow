import React from 'react'
import { Image, Text, Input, Button } from "@/components/atoms"
import { TextIcon } from '@/components/molecules'
import Link from 'next/link'
export default function SigninForm() {
    return (
        <div className='p-5 h-full flex flex-col overflow-auto relative'>
            <Image src={'/pizza.svg'} className={'absolute top-10 right-10'} />
            <Image src={'/fruits.svg'} className={'lg:block hidden absolute top-[50%] left-10'} />
            <Image src={'/plane.svg'} className={'lg:block hidden absolute bottom-[0%] right-10'} width={48} />
            <div className='flex items-center space-x-2'>
                <Image src={'/logo-short.svg'} className={''} width={118} height={40} />
            </div>
            <div className='pt-2 lg:px-24 px-0 space-y-3 flex-grow'>
                <Text variant="h4"  className="!tracking-widest custom-font text-black !text-[60px]" align="left" >
                    Create Account
                </Text>
                <Text variant={"body1"} className="text-[#333333] !text-[20px] sf-pro" align="left">
                    Create an account on afrofina, shop, pay bills, book flights,
                    gift friends and more.
                </Text>

                <Input placeholder="Legal Name"/>
                <Input placeholder="Email" />

                <Input placeholder="Phone Number" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <Link href={'/'}>
                    <Text className="py-3 text-[#002BFF] text-right float-right">
                        Forgotten password ?
                    </Text>
                </Link>
                <Link href={'/ecom/auth/otp-signup'}>
                    <Button className="bg-black text-white w-full py-2 text-lg rounded-md">
                        Sign Up
                    </Button>
                </Link>
                <div className='flex items-center space-x-3 py-6'>
                    <div className='border-b border-black w-full'>

                    </div>
                    <Text>
                        or
                    </Text>
                    <div className='border-b border-black w-full'>

                    </div>
                </div>
                <Button className="bg-white border border-black rounded-md w-full py-3 flex justify-center items-center space-x-3">
                    <TextIcon iconSrc="/auth/google.svg" text="Sign in with google" textClass="text-black" mainClass="flex  items-center space-x-5"/>
                </Button>
                <Link href={'/ecom/auth/sign-in'}>
                    <Text className="mx-auto text-black pt-4">
                        Already have an account ?  <span className='text-[#002BFF]'>Login</span>
                    </Text>
                </Link>
            </div>
        </div>
    )
}
