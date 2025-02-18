import React from 'react'
import { LabelInput,LabelSelect } from '@/components/molecules'
import { Button } from '@/components/atoms'
export default function EditUserInfo({handleSave}) {
    return (
        <div className='space-y-3'>
            <LabelInput text="Full name " textClass="text-black !text-[18px] sf-pro !font-extralight" inputClass="border border-[#929292] w-full py-3 rounded" placeholder mainClass="space-y-3" />
            <LabelInput text="Address " textClass="text-black !text-[18px] sf-pro !font-extralight" inputClass="border border-[#929292] w-full py-3 rounded" placeholder mainClass="space-y-3" />
            <LabelInput text="City" textClass="text-black !text-[18px] sf-pro !font-extralight" inputClass="border border-[#929292] w-full py-3 rounded" placeholder mainClass="space-y-3" />
            <LabelInput text="Region " textClass="text-black !text-[18px] sf-pro !font-extralight" inputClass="border border-[#929292] w-full py-3 rounded" placeholder mainClass="space-y-3 pb-2" />
            <LabelSelect label="Country " mainClass="space-y-3 pb-4"/>
            <Button className="w-full bg-black  py-3 !text-[18px] rounded font-extralight" onClick={handleSave}>
                Save
            </Button>
        </div>
    )
}
