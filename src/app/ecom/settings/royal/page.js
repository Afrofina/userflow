'use client'
import { MainLayout } from '@/components/layouts'
import { RoyalSubscription, EditRoyalSubscription } from '@/components/organisms'
import React, { useState } from 'react'

export default function page() {
  const [isEdit, setIsEdit] = useState(false)
  return (
    <MainLayout pageTitle={'Royal Subscription'}>
      <div className='p-5'>
        {!isEdit ? <RoyalSubscription handleClick={() => setIsEdit(true)} /> :
          <EditRoyalSubscription />}
      </div>
    </MainLayout>
  )
}
