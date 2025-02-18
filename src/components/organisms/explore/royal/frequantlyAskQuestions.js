import React from 'react'
import { Text, Image } from '@/components/atoms'
import FaqOrganism from './faqOrganism'
export default function FrequantlyAskQuestions() {
    return (
        <div className='pt-10'>
            <Text className="text-black lg:!text-[24px] !text-[20px] custom-font !tracking-widest " align="center">
                Frequently Asked Questions
            </Text>
            <Text className="text-black lg:!text-[18px] !text-[10px] sf-pro pt-2 pb-10" align="center">
                Do you have any questions you would like to ask, please go<br /> through or most frequently asked question, or send us an email<br /> if your question is not answered below
            </Text>
            <div className='space-y-5 pb-12'>
                <FaqOrganism title={'Can i cancel my Royal subscription ?'} descriptiom={' You can cancel your royal subscription at any time and if you already have a subscription running you will enjoy all your royal benefits until that month ends.'} />
                <FaqOrganism title={'Can i share my royal account ?'} descriptiom={' You can cancel your royal subscription at any time and if you already have a subscription running you will enjoy all your royal benefits until that month ends.'} />
                <FaqOrganism title={'Do i get all the benefits if i do a monthly ?'} descriptiom={' You can cancel your royal subscription at any time and if you already have a subscription running you will enjoy all your royal benefits until that month ends.'} />
                <div className='py-3 px-3 rounded border border-black flex justify-between items-end'>
                    <div className='flex items-center space-x-2'>
                        <Image src={'/explore/royal/chat.svg'} width={46} />
                        <div>
                            <Text className="text-black lg:!text-[18px] !text-[14px] sf-pro" align="left">
                                Send us an email
                            </Text>
                            <Text className="text-black lg:!text-[12px] !text-[10px] sf-pro " align="left">
                                Send us an email for quick response
                            </Text>
                        </div>
                    </div>
                    <Text className="text-black lg:!text-[14px] !text-[10px]  sf-pro border-b border-black pb-[0.5] " align="left">
                        Support@afrofina.com
                    </Text>
                </div>
            </div>
        </div>
    )
}
