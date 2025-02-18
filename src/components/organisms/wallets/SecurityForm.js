import React from 'react'
import { Button, Text, Image, Input} from '@/components/atoms'
export default function SecurityForm({handleClick,handleClose}) {
  return (
    <div className='h-full'>
      <Image src={'/wallets/close.svg'} className={'cursor-pointer lg:block hidden'} width={24} onClick={handleClose}/>
      <div className='pt-[200px]'>
        <Text align="center" className="text-black custom-font !tracking-widest !text-[24px] " >
          Security
        </Text>
        <Text align="center" className="text-black sf-pro !text-[14px] pb-8 ">
          Enter the 6 digit OTP sent to your email
        </Text>
        <div className='grid grid-cols-6 gap-3'>
          <Input placeholder="" className="w-full border border-black text-[24px] p-2 placeholder-black"  onChange={()=>{}} value=""/>
          <Input placeholder="" className="w-full border border-black text-[24px] p-2 placeholder-black"  onChange={()=>{}} value=""/>
          <Input placeholder="" className="w-full border border-black text-[24px] p-2 placeholder-black"  onChange={()=>{}} value=""/>
          <Input placeholder="" className="w-full border border-black text-[24px] p-2 placeholder-black"  onChange={()=>{}} value=""/>
          <Input placeholder="" className="w-full border border-black text-[24px] p-2 placeholder-black"  onChange={()=>{}} value=""/>
          <Input placeholder="" className="w-full border border-black text-[24px] p-2 placeholder-black"  onChange={()=>{}} value=""/>

        </div>
        <Button className="w-full bg-black  py-3 !text-[18px] rounded mt-12 font-extralight" onClick={handleClick}>
          Proceed
        </Button>
      </div>
    </div>
  )
}
