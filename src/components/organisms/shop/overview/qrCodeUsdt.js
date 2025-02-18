import React from 'react'
import { Text, Button, Image } from '@/components/atoms'
import { LabelInput } from '@/components/molecules'
export default function QrCodeUsdt() {
  return (
    <div className='h-full flex flex-col justify-center px-8'>
      {/* <TextIcon iconSrc="/sendMoney/success.svg" iconWidth="32" text="payment confirmed" textClass="text-black custom-font !tracking-widest !text-[32px]" /> */}
      <Text className="text-black custom-font !tracking-widest !text-[20px] pb-10">
        Send exactly $101 with USDT
      </Text>
      <div className='flex flex-col items-center'>

      <Text className="!text-[#333333] sf-pro !text-[16] pb-4">
          Scan QR code or copy address     </Text>
        <Image src={'/shop/checkout/qr.svg'} width={224} />
      </div>
      <div className='flex w-full justify-between items-center py-4'>
        <Text className="text-black !text-[16px]">
          muEm1NmBZ8YCzWnnG8Vifr7HBN2VtRASQ6
        </Text>
        <Button className="text-[#0028FB] text-[12px] border border-[#0028FB] rounded py-1">
          Copy
        </Button>
      </div>
      <LabelInput text="Enter transaction  ID after making payment " placeholder="Transaction ID here" mainClass="py-4 space-y-2" textClass="!text-[14px] text-black sf-pro"/>
      <Button className='bg-black w-full py-3 rounded !font-light mt-4'>
        I have paid
      </Button>
    </div>
  )
}
