
import React from 'react';
import { MainLayout } from '@/components/layouts'
import { Text } from '@/components/atoms';
import { PayUtilityForm, UtilitySidebar, TransactionsCards, TransactionsTable } from '@/components/organisms'
import { TextIcon } from '@/components/molecules';
export default function Page() {

  return (
    <MainLayout pageTitle={'Transactions'}>
      <div className='flex h-full'>
        <UtilitySidebar />
        <div className='w-full h-full overflow-auto'>
          <div className=''>
            <TransactionsCards />
            <Text variant="h4" align="left" className="text-black custom-font px-5 pt-12 !tracking-wide">
              All transactions.
            </Text>
            <Text variant="h6" align="left" className="px-5 text-black sf-pro !font-light !py-5">
              Track your money sent, download invoices and track dates funds where sent.
            </Text>
            <TransactionsTable />
          </div>
        </div>
        {/* <div className='w-full'>
            <div className='w-full h-full flex items-center space-x-3 px-4'>
              <TextIcon iconSrc="/explore/pay.svg" text="pay utilities" mainClass="bg-primary flex flex-col items-center w-full space-y-3 w-full rounded-xl py-10 cursor-pointer" textClass="text-black"  />
              <TextIcon iconSrc="/explore/pay.svg" text="Transactions" mainClass="bg-primary flex flex-col items-center w-full space-y-3 w-full rounded-xl py-10 cursor-pointer" textClass="text-black" onClick={() => { setIsShow(!isShow), setShowUtility(true) }}/>
            </div>
          </div> */}

      </div>
    </MainLayout>
  )
}
