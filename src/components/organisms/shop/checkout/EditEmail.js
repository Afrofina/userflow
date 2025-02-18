import React from 'react'
import { LabelInput } from '@/components/molecules'
import { Button } from '@/components/atoms'
export default function EditEmail({handleSave}) {
    return (
        <div>
            <LabelInput text="Email" textClass="text-black !text-[20px] sf-pro !font-extralight" inputClass="border border-[#929292] w-full py-3 rounded px-2"  placeholder="Enter Email" mainClass="space-y-5 pb-4 pt-5" />
            <Button className="w-full bg-black  py-3 !text-[18px] rounded font-extralight" onClick={handleSave}>
                Save
            </Button>
        </div>
    )
}
