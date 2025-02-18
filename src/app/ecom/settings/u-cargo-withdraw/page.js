'use client'
import React, { useState } from 'react'
import { MainLayout } from '@/components/layouts'
import { WithdrawMethods, EditWithdrawMethod } from '@/components/organisms'
export default function page() {
  const [isEdit, setIsEdit] = useState(false)
  return (
    <MainLayout pageTitle={'U-cargo withdraw '}>
      <div className='p-5'>
        {!isEdit ? <WithdrawMethods handleClick={() => setIsEdit(true)} />
          : <EditWithdrawMethod />}
      </div>
    </MainLayout>
  )
}
