"use client"
import React from 'react'
import { Text, Button } from '@/components/atoms'
import { LabelSelect } from '@/components/molecules'
import { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function payUtilityForm() {
    const router = useRouter()
    const [selectedUtilty, setSelectedUtility] = useState('')
    const handleUtility = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedUtility(value)
    };
    const handleContinue = (e) => {
        // e.preventDefault()
        console.log("click",typeof selectedUtilty)
        if(selectedUtilty==='Hospital'){
            router.push('/ecom/explore/pay-utility/hospital')
        }
        else if(selectedUtilty==='School'){
            router.push('/ecom/explore/pay-utility/school')
        }
        else if(selectedUtilty==='Internet'){
            router.push('/ecom/explore/pay-utility/internet')
        }
        else if(selectedUtilty==='Airtime'){
            router.push('/ecom/explore/pay-utility/airtime')
        }
        else if(selectedUtilty==='Tv'){
            router.push('/ecom/explore/pay-utility/tv')
        }
        else if(selectedUtilty==='Electricity'){
            router.push('/ecom/explore/pay-utility/electricity')
        }
    }
    return (
        <div className='space-y-6'>
            <div className='space-y-2 pb-5 pt-6'>
                <Text variant="h4" className="text-black font-media-sans-semicondensed custom-font lg:block hidden !tracking-widest">
                    Pay utility
                </Text>
                <Text className="text-black sf-pro">
                    To pay utilities please fill in the form below
                </Text>
            </div>
            <LabelSelect label="Country" placeholder='Select country' />
            <LabelSelect label="Utility" placeholder={'Select Utility'} menuitems={['Hospital', 'School', 'Internet', 'Airtime', 'Electricity', 'Tv']} handleChange={handleUtility} value={selectedUtilty} />
            <Button className='bg-black w-full py-3 rounded mt-3' handleClick={handleContinue}>
                Continue
            </Button>
        </div>
    )
}
