import React from 'react'
import { Text, Button, Select, Input } from '@/components/atoms'
export default function payUtilityForm() {
    return (
        <div className='space-y-6 pb-24'>
            <div className='space-y-2 pb-5 pt-6'>
                <Text variant="h4"  className="text-black font-media-sans-semicondensed custom-font lg:block hidden">
                    Patient Details
                </Text>
                <Text>
                    Please fill in your patient details
                </Text>
            </div>
            <form className='space-y-3'>
                <Input placeholder="Patient name" />
                <Input placeholder="Patient email address" />
                <Input placeholder="Patient ID" />

                <Select placeholderValue={'+1'}/>
                <Text variant="h6" className="text-black font-media-sans-semicondensed custom-font lg:block">
                    Hospital details
                </Text>
                <Input placeholder="Enter hospital name" />
                <Input placeholder="Hospital email address                                        optional " />
                <Input placeholder="City " />
                <Input placeholder="State " />
                <Input placeholder="Zip code" />
                <Input placeholder="Ghana" className=' bg-[#D9D9D9] py-[16px] px-2 text-black w-full focus:outline-0 placeholder-black rounded' />
                <Select placeholderValue={'+1'} />
            </form>
            <Button className='bg-black w-full py-3 rounded mt-3'>
                Continue
            </Button>
        </div>
    )
}
