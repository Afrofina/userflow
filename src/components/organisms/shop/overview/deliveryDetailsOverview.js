
'use client'
import React, { useState } from 'react'
import { Text, Button, Image, Textarea } from '@/components/atoms'
import EditUserInfo from '../checkout/EditPhoneNumber'
import EditPhoneNumber from '../checkout/EditPhoneNumber'
import EditEmail from '../checkout/EditEmail'
export default function DeliveryDetails({ isNote }) {
    const [isEditUser, setIsEditUser] = useState(false)
    const [isPhone, setIsPhone] = useState(false)
    const [isEmail, setIEmail] = useState(false)
    return (
        <div>
            <Text className="text-black !text-[16px] custom-font !tracking-widest lg:!text-left !text-center lg:block hidden pb-6" align="left">
                Delivery Details
            </Text>
            {!isEditUser ? <div>
                <div className='flex items-center justify-between border border-gray-300 px-3 py-2 rounded'>
                    <div>
                        <Text align="left" className="text-[#707070] !text-[18px] sf-pro">
                            Lena Ablah
                        </Text>
                        <Text align="left" className="text-[#707070] !text-[18px] sf-pro">
                            Abena creek  block 6 Oyarifa, accra ghana
                        </Text>
                    </div>
                    <Text className="text-black !text-[18px] border-b border-black cursor-pointer " onClick={() => setIsEditUser(true)}>
                        Edit
                    </Text>
                </div>
            </div> :
                <EditUserInfo handleSave={() => setIsEditUser(false)} />}
            <Text className="text-black !text-[16px] custom-font !tracking-widest lg:!text-left !text-center pt-12" align="left">
                Contact Details
            </Text>
            {!isPhone ? <div className='lg:pt-6 pt-4'>

                <Text className="text-black !text-[20px]" align="left">
                    Phone
                </Text>
                <div className='flex items-center justify-between border border-gray-300 px-3 py-2 rounded'>
                    <div className='flex items-center space-x-4'>
                        <Image src={'/shop/checkout/phone.svg'} width={30} />
                        <div>
                            <Text align="left" className="text-[#707070] !text-[18px] sf-pro">
                                +1 (202)-550-5610
                            </Text>
                            <Text align="left" className="text-[#707070] !text-[18px] sf-pro">
                                Verified
                            </Text>
                        </div>
                    </div>
                    <Text className="text-black !text-[18px] border-b border-black cursor-pointer" onClick={() => setIsPhone(true)}>
                        Edit
                    </Text>
                </div>
            </div> : <EditPhoneNumber handleSave={() => setIsPhone(false)} />}
            {!isEmail ? <div className='pt-10'>
                <Text className="text-black !text-[20px]" align="left">
                    Email
                </Text>
                <div className='flex items-center justify-between border border-gray-300 px-3 py-2 rounded'>
                    <div className='flex items-center space-x-4'>
                        <Image src={'/shop/checkout/mail.svg'} width={30} />
                        <div>
                            <Text align="left" className="text-[#707070] !text-[18px] sf-pro">
                                Example@gmail.com
                            </Text>
                            <Text align="left" className="text-[#707070] !text-[18px] sf-pro">
                                Verified
                            </Text>
                        </div>
                    </div>
                    <Text className="text-black !text-[18px] border-b border-black cursor-pointer" onClick={() => setIEmail(true)}>
                        Edit
                    </Text>
                </div>
            </div> : <EditEmail handleSave={() => setIEmail(false)} />}
            <Text className="text-black !text-[16px] custom-font !tracking-widest lg:!text-left !text-center pt-12" align="left">
            Payment details 
            </Text>
            <div className='flex items-center justify-between border border-gray-300 px-3 py-1 rounded mt-3'>
                <div className='flex items-center space-x-4'>
                    <Image src={'/shop/checkout/card.svg'} width={30} />
                    <div>
                        <Text align="left" className="text-[#707070] !text-[18px] sf-pro">
                            **********4860
                        </Text>
                        <Text align="left" className="text-[#707070] !text-[14px] sf-pro">
                            Visa card
                        </Text>
                    </div>
                </div>
                <Text className="text-black !text-[18px] border-b border-black ">
                    Edit
                </Text>
            </div>
            {isNote && <div>
                <Text className="text-black !text-[24px] custom-font !tracking-widest lg:!text-left !text-center pt-16" align="left">
                    Notes
                </Text>
                <Text className="text-black !text-[18px] sf-pro pb-10 lg:!text-left !text-center !font-extralight " align="left">
                    Have any note you would like to add to your package?
                </Text>
                <Textarea className="border border-black w-full p-3 text-black" placeholder=""></Textarea>
                <div className=' pb-8 flex justify-end'>
                    <Button className="lg:w-auto w-full bg-black px-12  py-3 !text-[18px] rounded mt-4 font-extralight">
                        Add note
                    </Button>
                </div>
            </div>}
        </div>
    )
}
