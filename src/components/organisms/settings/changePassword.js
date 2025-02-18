
import React from 'react'
import { Input, Text ,Button} from '@/components/atoms'
import { LabelInput } from '@/components/molecules'
export default function changePassword({refPass}) {
    return (
        <div ref={refPass}>
            <Text className="custom-font !text-[16px] !tracking-widest text-[#333333] lg:block hidden" align="left">
                Change Password
            </Text>
            <Text className="sf-pro !text-[16px] text-[#575757] pt-1" align="left">
                Secure your account with a unique password
            </Text>
            <div className='lg:w-2/3 w-full space-y-4 py-8'>
                <div className='w-full flex lg:flex-row flex-col lg:space-y-0 space-y-3 justify-between pb-4 border-b border-gray-300'>
                    <Text className="sf-pro !text-[14px] text-black" align="left">
                        Current  password
                    </Text>
                    <Input className="lg:w-2/3 w-full border border-black placeholder-black focus:outline-none bg-transparent rounded px-2 py-0.5" type="password" placeholder/>
                </div>
                <div className='w-full flex lg:flex-row flex-col lg:space-y-0 space-y-3 justify-between pb-4'>
                    <Text className="sf-pro !text-[14px] text-black" align="left">
                    New password
                    </Text>
                    <Input className="lg:w-2/3 w-full border border-black placeholder-black focus:outline-none bg-transparent rounded px-2 py-0.5" type="password" placeholder/>
                </div>
                <div className='w-full flex lg:flex-row flex-col lg:space-y-0 space-y-3 justify-between pb-4'>
                    <Text className="sf-pro !text-[14px] text-black" align="left">
                    Confirm password
                    </Text>
                    <Input className="lg:w-2/3 w-full border border-black placeholder-black focus:outline-none bg-transparent rounded px-2 py-0.5" type="password" placeholder/>
                </div>
                <div className='flex justify-end'>
                    <Button className="sf-pro text-white bg-black !text-[18px] px-6 py-3 rounded lg:w-auto w-full">
                    Change password
                    </Button>
                </div>
            </div>
        </div>
    )
}
