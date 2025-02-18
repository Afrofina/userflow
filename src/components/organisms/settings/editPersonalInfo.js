import React from 'react'
import { Text, Button } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
export default function EditPersonalInfo({ refInfo }) {
    return (
        <div ref={refInfo}>
            <Text className="custom-font !text-[16px] !tracking-widest text-[#333333]" align="left">
                Personal Information
            </Text>
            <Text className="sf-pro !text-[16px] text-[#575757] pt-1" align="left">
                This information would be used to contact you
            </Text>
            <div className='flex lg:flex-row flex-col gap-12 items-start pt-10'>
                <div className='grid grid-cols-2 w-full gap-5'>
                    <div>
                        <Text className="sf-pro !text-[16px] text-[#575757]" align="left">
                            First name
                        </Text>
                        <Text className="sf-pro !text-[18px] text-black pt-1" align="left">
                            John Rahul
                        </Text>
                    </div>
                    <div>
                        <Text className="sf-pro !text-[16px] text-[#575757]" align="left">
                            Last name
                        </Text>
                        <Text className="sf-pro !text-[18px] text-black pt-1" align="left">
                            Mendenz
                        </Text>
                    </div>
                    <div>
                        <Text className="sf-pro !text-[16px] text-[#575757]" align="left">
                            Email address
                        </Text>
                        <Text className="sf-pro !text-[18px] text-black pt-1" align="left">
                            Johnrahul@gmail.com
                        </Text>
                    </div>
                    <div>
                        <Text className="sf-pro !text-[16px] text-[#575757]" align="left">
                            Phone number
                        </Text>
                        <Text className="sf-pro !text-[18px] text-black pt-1" align="left">
                            +233-559-256-3001
                        </Text>
                    </div>
                </div>

                <Button className="sf-pro text-white bg-black !text-[18px] px-6 py-3 rounded w-full">
                    Save
                </Button>
            </div>
        </div>
    )
}
