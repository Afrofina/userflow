'use client'
import React, { useState } from 'react'
import { MainLayout } from '@/components/layouts'
import { WalletsCardOrganism, WalletTable, WithDrawForm, WithdrawAddressForm, WithdrawBankDetails, WithdrawSecurityForm, WithdrawConfirmation } from "@/components/organisms"
import { Text } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
export default function page() {
    const [isModal, setIsModal] = useState(false)
    const [isMain, setIsMain] = useState(true)
    const [isAddress, setIsAddress] = useState(false)
    const [isBank, setIsBank] = useState(false)
    const [isSecurity,setIsSecurity]=useState(false)
    const [isConfirm,setIsConfirm]=useState(false)
    return (
        <MainLayout pageTitle={'Withdraw'}>
            <div className='relative h-full'>
                <div className='lg:pl-8 pl-0 lg:pr-4 pr-0 h-full overflow-auto '>
                    <div className='flex justify-between items-center py-4'>
                        <Text align="left" className="text-black custom-font !tracking-widest !text-[24px] py-3 ">
                            Overview
                        </Text>
                        <TextIcon iconSrc="/wallets/wallet.svg" text="Withdraw" iconWidth={20} textClass="!text-[18px] text-black sf-pro pr-3" mainClass="flex items-center space-x-2 border border-black px-2 py-1 rounded-md cursor-pointer" onClick={() => setIsModal(true)} />

                    </div>
                    <WalletsCardOrganism />
                    <Text align="left" className="text-black custom-font !tracking-widest !text-[24px] pt-8 ">
                        History
                    </Text>
                    <Text align="left" className="text-black sf-pro !text-[18px] pb-8">
                        Track your payments, payout and withdrawals
                    </Text>
                    <WalletTable />
                </div>
                {isModal && <div className='absolute h-full  top-0 w-full  transition-opacity duration-1000 ease-in-out'>
                    <div className='w-full h-full' style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                        <div className='grid grid-cols-12 h-full'>
                            <div className='lg:col-span-8 col-span-12 h-full lg:block hidden cursor-pointer'  >

                            </div>
                            <div className='lg:col-span-4 col-span-12 px-4 pt-12  bg-white border-l border-black flex flex-col'>
                                {isMain && <WithDrawForm handleClick={() => {setIsAddress(true),setIsMain(false)}} />}
                                {isAddress && <WithdrawAddressForm handleClick={() => { setIsAddress(false), setIsBank(true) }} />}
                                {isBank && <WithdrawBankDetails handleClick={() => { setIsBank(false), setIsSecurity(true) }} />}
                                {isSecurity&& <WithdrawSecurityForm handleClick={() => { setIsSecurity(false), setIsConfirm(true) }}/>}
                                {isConfirm && <WithdrawConfirmation handleClick={() => { setIsConfirm(false), setIsModal(false) }}/>}
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </MainLayout>
    )
}
