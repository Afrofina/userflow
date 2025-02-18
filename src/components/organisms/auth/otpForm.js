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
            <div className='pt-24 lg:px-24 px-0 space-y-4 flex-grow flex flex-col justify-center'>
                <Text variant="h3" className="!tracking-widest custom-font text-black !text-[40px]" align="left">
                    Enter the code
                </Text>
                <Text variant={"body1"} className="text-[#333333] !text-[20px] sf-pro" align="left">
                    Enter the OTP code sent to your , please do not
                    share the code. Did not receive code? <span className='text-[#0028FB]'>Resend</span>
                </Text>
                <div className='grid grid-cols-6 gap-3 py-6'>
                    <Input placeholder="" />
                    <Input placeholder="" />
                    <Input placeholder="" />
                    <Input placeholder="" />
                    <Input placeholder="" />
                    <Input placeholder="" />
                </div>
                <Link href={'/ecom/auth/verify'}>
                    <Button className="bg-black text-white w-full py-2 text-lg rounded-md">
                        Proceed
                    </Button>
                </Link>
            </div>
        </div>
    )
}
