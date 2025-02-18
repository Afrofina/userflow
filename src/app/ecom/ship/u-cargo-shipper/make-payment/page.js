'use client'
import React, { useState } from 'react'
import { MainLayout } from '@/components/layouts'
import { ShipSidebar, MakePayment, Messages, WithdrawSecurityForm, ShipperPaymentConfirmed } from '@/components/organisms'
import { Text } from '@/components/atoms'
export default function page() {
    const [isModal, setIsModal] = useState(false)
    const [isMain, setIsMain] = useState(true)
    const [isAddress, setIsAddress] = useState(false)
    const [isBank, setIsBank] = useState(false)
    const [isSecurity, setIsSecurity] = useState(true)
    const [isConfirm, setIsConfirm] = useState(false)
    return (
        <MainLayout>
            <div className='h-full flex relative'>
                <ShipSidebar />
                <div className='grid lg:grid-cols-3 grid-cols-1 w-full h-full'>
                    <div className='col-span-2 lg:border-r border-r-0 border-black h-full overflow-auto flex justify-center'>
                        <div className='lg:w-8/12 w-full lg:px-0 px-4 h-full pt-8'>
                            <MakePayment handleClick={() => setIsModal(true)} />

                        </div>
                    </div>
                    <div className='lg:block hidden'>
                        <Messages />

                    </div>
                </div>
                {isModal && <div className='absolute h-full  top-0 w-full  transition-opacity duration-1000 ease-in-out'>
                    <div className='w-full h-full' style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                        <div className='grid grid-cols-12 h-full'>
                            <div className='lg:col-span-8 col-span-12 h-full lg:block hidden cursor-pointer'  >

                            </div>
                            <div className='lg:col-span-4 col-span-12 px-4 pt-12  bg-white border-l border-black flex flex-col lg:rounded-l-md rounded-l-0'>

                                {isSecurity && <WithdrawSecurityForm handleClick={() => { setIsSecurity(false), setIsConfirm(true) }} handleClose={()=>{setIsModal(false),setIsSecurity(true)}}/>}
                                {isConfirm && <ShipperPaymentConfirmed handleClick={()=>{setIsSecurity(true), setIsConfirm(false),setIsModal(false)}}/>}
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </MainLayout>
    )
}
