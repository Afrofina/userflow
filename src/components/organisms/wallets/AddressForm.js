import React from 'react'
import { Button, Text, Image } from '@/components/atoms'
import { LabelInput } from '@/components/molecules'
export default function AddressForm({handleClick}) {
    return (
        <div>
            <Text align="center" className="text-black custom-font !tracking-widest !text-[24px] lg:block hidden" >
                Withdraw
            </Text>
            <Text align="center" className="text-black sf-pro !text-[14px] pb-8 lg:block hidden">
                Withdraw your earnings
            </Text>
            <LabelInput text="Paste address here  " inputClass="border border-black w-full px-2 py-3 rounded placeholder-black" placeholder="" textClass="text-black sf-pro pb-2 !text-[14px]" />
            <Text  className="text-black sf-pro !text-[14px] pt-6" align="left">
            Select USDT network 
            </Text>
            <div className="w-full flex items-center space-x-6 border border-[#0028FB]  px-5 py-5 rounded-md mt-2">
                <Image src={'/wallets/checkBlue.svg'} width={20} />
                <Text align="center" className="!text-[18px] text-[#0028FB] sf-pro pr-3">
                    TRC20

                </Text>
            </div>
            <div className="w-full flex items-center space-x-6 border border-black  px-5 py-5 rounded-md mt-5">
                <Image src={'/wallets/checkBlack.svg'} width={20} />
                <Text align="center" className="!text-[18px] text-black sf-pro pr-3">
                    ERC20

                </Text>
            </div>
            <div className="w-full flex items-center space-x-6 border border-black  px-5 py-5 rounded-md mt-5">
                <Image src={'/wallets/checkBlack.svg'} width={20} />
                <Text align="center" className="!text-[18px] text-black sf-pro pr-3">
                    BEP20

                </Text>
            </div>
            <Button className="w-full bg-black  py-3 !text-[18px] rounded mt-12 font-extralight" onClick={handleClick}>
                Proceed
            </Button>
        </div>
    )
}
