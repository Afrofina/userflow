import React from 'react'
import { Image, Text, Input, Button } from "@/components/atoms"
import Link from 'next/link'
export default function SigninForm() {
    return (
        <div className='p-5 overflow-auto flex flex-col relative'>
        <Image src={'/car.svg'} className={'absolute lg:block hidden  top-[33%] left-20'} width={40}/>
        <Image src={'/location.svg'} className={'absolute lg:block hidden  top-[83%] right-24'} width={40}/>
        <div className='flex items-center space-x-2'>
                <Image src={'/logo-short.svg'} className={''} width={118} height={40} />
            </div>
            <div className=' lg:px-24 px-0 space-y-4 flex-grow flex flex-col justify-center'>
            
                <Text variant="h3" className="!tracking-widest custom-font text-black !text-[40px]" a>
                    Verify your account
                </Text>
                <Text variant={"body1"} className="text-[#333333] !text-[20px] sf-pro">
                    Hey you are almost done, verify your account to
                    access all our features
                </Text>
                <div className='flex flex-col  items-center space-y-4'>
                    <Link href={'/ecom/explore'}>
                        <Button className="bg-black text-white px-12 py-2 text-lg rounded-md">
                            verify
                        </Button>
                    </Link>
                    <Link href={'/ecom/explore'}>
                        <Text>
                            Skip for now
                        </Text>
                    </Link>
                </div>
            </div>
        </div>
    )
}
