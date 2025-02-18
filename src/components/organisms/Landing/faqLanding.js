import React from 'react'
import { Text, Image } from '@/components/atoms'
import FaqItem from "./faqItem"
export default function faqLanding() {
    return (
        <div>
            <Text className="text-black lg:!text-[40px] !text-[28px] custom-font !tracking-widest " align="center">
                Frequently Asked Questions
            </Text>
            <Text className="text-black lg:!text-[20px] !text-[16px] sf-pro pt-2 pb-10" align="center">
                Here are some of our most frequently asked questions,
            </Text>

            <div className='lg:grid flex flex-col-reverse  lg:grid-cols-7 grid-cols-1 gap-8 lg:px-5 px-2'>
                <div className='col-span-3 grid lg:grid-cols-3 grid-cols-1 gap-4'>
                    <div className='bg-primary rounded-lg lg:flex space-x-4 px-6 hidden'>
                        <Image src={'/landing/contact.svg'} />
                        <Image src={'/landing/desc.svg'} width={20} />
                    </div>
                    <div className='col-span-2'>
                        <div className='lg:px-5 px-0 pb-5 lg:hidden block'>
                            <div className='bg-primary rounded-lg mt-5 pt-5'>
                                <Text className="text-black lg:!text-[40px] !text-[22px] custom-font !tracking-widest " align="center">
                                    Contact
                                </Text>
                                <Text className="text-black lg:!text-[20px] !text-[12px] sf-pro pt-2 pb-10" align="center">
                                    Send us an email or call our help line for assistance
                                </Text>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <div className='py-10 px-4 rounded-lg border border-primary '>
                                <div className='flex flex-col items-center'>
                                    <Image src={'/landing/phone.svg'} width={46} />
                                    <div className='py-6'>
                                        <Text className="text-black lg:!text-[24px] !text-[18px] sf-pro" align="center">
                                            Give us a call
                                        </Text>
                                        <Text className="text-black lg:!text-[18px] !text-[14px] sf-pro " align="center">
                                            For pressing issues concerning delivery and payment call us on
                                        </Text>
                                    </div>

                                    <Text className="text-[#333333] lg:!text-[14px] !text-[10px]  sf-pro border-b border-black pb-[0.5] " align="center">
                                        Support@afrofina.com
                                    </Text>
                                </div>
                            </div>
                            <div className='py-10 px-4 rounded-lg border border-primary '>
                                <div className='flex flex-col items-center'>
                                    <Image src={'/landing/phone.svg'} width={46} />
                                    <div className='py-6'>
                                        <Text className="text-black lg:!text-[24px] !text-[18px] sf-pro" align="center">
                                            Send us an email
                                        </Text>
                                        <Text className="text-black lg:!text-[18px] !text-[14px] sf-pro " align="center">
                                            Send us an email for quick response
                                        </Text>
                                    </div>

                                    <Text className="text-[#333333] lg:!text-[14px] !text-[10px]  sf-pro border-b border-black pb-[0.5] " align="center">
                                        Support@afrofina.com
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 col-span-4'>

                    <FaqItem title={'Can i cancel my Royal subscription ?'} descriptiom={'You can cancel your royal subscription at any time and if you already have a subscription running you will enjoy all your royal benefits until that month ends.'} />
                    <FaqItem title={'How can i become a U-cargo agent'} descriptiom={' You can cancel your royal subscription at any time and if you already have a subscription running you will enjoy all your royal benefits until that month ends.'} />
                    <FaqItem title={'How do U-cargo agent make money'} descriptiom={' You can cancel your royal subscription at any time and if you already have a subscription running you will enjoy all your royal benefits until that month ends.'} />
                    <FaqItem title={'How can i track a U-cargo agent'} descriptiom={' You can cancel your royal subscription at any time and if you already have a subscription running you will enjoy all your royal benefits until that month ends.'} />
                    <FaqItem title={'How can i become a vendor'} descriptiom={' You can cancel your royal subscription at any time and if you already have a subscription running you will enjoy all your royal benefits until that month ends.'} />

                </div>
            </div>
        </div>
    )
}
