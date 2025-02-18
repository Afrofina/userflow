'use client'
import { MainLayout } from '@/components/layouts'
import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ProfileSettings, SidebarSettings, PersonalInfoSettings, AddressSettings, PaymentSettings, WithdrawMethods, ChangePassword, RoyalSubscription, Options, EditPayment, EditWithdrawMethod } from '@/components/organisms'
export default function page() {
  const router = useRouter()
  const ref = useRef(null);
  const refProfile = useRef(null);
  const refInfo = useRef(null);
  const refAddress = useRef(null);
  const refPayment = useRef(null);
  const refWithdraw = useRef(null);
  const refPass = useRef(null);
  const [isEditPayment, setIsEditPayment] = useState(false)
  const [isEditWithdrawMethod, setIsEditWithdrawMethod] = useState(false)
  const handleClick = (val) => {
    if (val === 'profile') {
      refInfo.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (val === 'address') {
      refAddress.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (val === 'payment') {
      refPayment.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (val === 'withdraw') {
      refWithdraw.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (val === 'password') {
      refPass.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (val === 'royal') {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <MainLayout pageTitle={'Settings'}>
      <div className='h-full lg:flex hidden'>
        <SidebarSettings handleClick={handleClick} />
        <div className='w-full h-full overflow-auto'>
          <div className='w-9/12 pl-8 py-16 space-y-16'>
            <ProfileSettings ref={refProfile} />
            <PersonalInfoSettings refInfo={refInfo} />
            <AddressSettings refAddress={refAddress} />
            {!isEditPayment ? <PaymentSettings refPayment={refPayment} handleClick={() => setIsEditPayment(true)} /> : <EditPayment />}
            {!isEditWithdrawMethod ? <WithdrawMethods refWithDraw={refWithdraw} handleClick={() => setIsEditWithdrawMethod(true)} /> : <EditWithdrawMethod />}
            <ChangePassword refPass={refPass} />
            <RoyalSubscription royalRef={ref} handleClick={()=>router.push('/ecom/settings/royal')}/>
          </div>
        </div>
      </div>
      <div className='lg:hidden block'>
        <Options />
      </div>
    </MainLayout>
  )
}
