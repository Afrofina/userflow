import React from 'react'
import { MainLayout } from '@/components/layouts'
import { BillingAddress,Subscriptions } from "@/components/organisms"
export default function page() {
  return (
    <MainLayout>
      <div className='grid lg:grid-cols-12 grid-cols-1 h-full overflow-auto'>
        <div className='col-span-7 lg:border-r border-r-0 border-black '>
          <BillingAddress />
        </div>
        <div className='col-span-5'>
          <Subscriptions/>
        </div>
      </div>
    </MainLayout>
  )
}
