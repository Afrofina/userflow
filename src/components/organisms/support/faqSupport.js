import React from 'react'
import { Text, Image } from '@/components/atoms'
import FaqOrganism from '../explore/royal/faqOrganism'
export default function FrequantlyAskQuestions() {
    return (
        <div className='pt-12  px-6'>
            <Text className="text-[#333333] lg:!text-[24px] !text-[20px] custom-font !tracking-widest " align="center">
                Check Our Faq for help
            </Text>
            <Text className="text-black lg:!text-[18px] !text-[10px] sf-pro pt-2 pb-10" align="center">
                Need a quick answer to a question
            </Text>
            <div className='space-y-5 pb-12'>
                <FaqOrganism title={'How can i track my orders'} descriptiom={'Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.'} />
                <FaqOrganism title={'How can i become a U-cargo agent'} descriptiom={' You can cancel your royal subscription at any time and if you already have a subscription running you will enjoy all your royal benefits until that month ends.'} />
                <FaqOrganism title={'How do U-cargo agent make money'} descriptiom={' You can cancel your royal subscription at any time and if you already have a subscription running you will enjoy all your royal benefits until that month ends.'} />
                <FaqOrganism title={'How can i track a U-cargo agent'} descriptiom={' You can cancel your royal subscription at any time and if you already have a subscription running you will enjoy all your royal benefits until that month ends.'} />
                <FaqOrganism title={'How can i become a vendor'} descriptiom={' You can cancel your royal subscription at any time and if you already have a subscription running you will enjoy all your royal benefits until that month ends.'} />
                <FaqOrganism title={'How can i become a partner'} descriptiom={' You can cancel your royal subscription at any time and if you already have a subscription running you will enjoy all your royal benefits until that month ends.'} />

            </div>
        </div>
    )
}
