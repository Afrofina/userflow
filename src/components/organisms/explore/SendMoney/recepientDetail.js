import React from 'react'
import { Text, Image, Button } from '@/components/atoms'
import { LabelInput, TextIcon } from '@/components/molecules'
import Link from 'next/link'
export default function RecepientDetail() {
  return (
    <div>
      <Text variant="h6" className="text-black custom-font !tracking-wider">
        Recipient account details
      </Text>
      <LabelInput text="Recipient Email" placeholder="Example@gmail.com" mainClass="py-10 space-y-1" />
      <Text variant="h6" className="text-black custom-font !tracking-wider !text-lg" align="left">
        Recipient bank details
      </Text>
      <LabelInput text="Full name of account holder" placeholder="" mainClass="pt-6 space-y-1" />
      <LabelInput text="ACH Routing number " placeholder="" mainClass="pt-4 space-y-1" />
      <LabelInput text="Account number  " placeholder="" mainClass="pt-4 space-y-1" />
      <Text align="left" className="text-[#575757] pt-4">
        Account type
      </Text>
      <div className='grid lg:grid-cols-3 grid-cols-2 pt-2 pb-12 gap-3'>
        <div className='border border-[#333333] p-3 rounded pb-6 '>
          <div className='flex justify-end'>
            <Image src={'/sendMoney/check.svg'} width={20} />
          </div>
          <TextIcon iconSrc="/sendMoney/wallet.svg" iconWidth={40} text="Checking" textClass="text-black text-[#333333]" />
        </div>
        <div className='border border-[#039A00] p-3 rounded pb-6'>
          <div className='flex justify-end'>
            <Image src={'/sendMoney/checkFill.svg'} width={20} />
          </div>
          <TextIcon iconSrc="/sendMoney/saving.svg" iconWidth={40} text="Savings" textClass="text-[#039A00]" />
        </div>
      </div>
      <Text variant="h6" className="text-black custom-font !tracking-wider !text-lg" align="left">
        Recipient address
      </Text>
      <LabelInput text="Address" placeholder="" mainClass="pt-6 space-y-1" />
      <LabelInput text="City " placeholder="" mainClass="pt-4 space-y-1" />
      <LabelInput text="State " placeholder="" mainClass="pt-4 space-y-1" />
      <LabelInput text="City " placeholder="" mainClass="pt-4 space-y-1" />
      <LabelInput text="State " placeholder="" mainClass="pt-4 space-y-1 pb-4" />
      <Link href="/ecom/explore/send-money/review">
        <Button className='bg-black w-full py-3 rounded mt-3 !font-light'>
          Send Money
        </Button>
      </Link>
    </div>
  )
}
