
import React from 'react';
import { MainLayout } from '@/components/layouts'
import { Text, Image } from '@/components/atoms';
import { PayUtilityForm, SidebarSendMoney, TransactionsCards, TransactionsTable } from '@/components/organisms'
import { TextIcon } from '@/components/molecules';
export default function Page() {
    return (
        <MainLayout pageTitle={'Transactions'}>
            <div className='flex h-full'>
                <SidebarSendMoney />
                <div className='w-full h-full overflow-auto'>
                    <div className=''>
                        <div className='px-5 pt-8 grid lg:grid-cols-2 grid-cols-1 gap-3'>
                            <div className='bg-primary p-5 py-7 rounded flex items-start'>
                                <div className='p-2 rounded-full bg-[#101010]'>
                                    <Image src="/sendMoney/sent.svg" width={24} />
                                </div>
                                <div className='w-full pl-5'>
                                    <Text align="left" className="sf-pro !text-[16px] text-[#101010]">
                                        Total money sent
                                    </Text>
                                    <Text align="left" className="custom-font !tracking-widest !text-[24px] text-[#101010]">
                                        $2500
                                    </Text>
                                    <Text align="left" className="custom-font !tracking-widest !text-[16px] text-[#101010] pt-12">
                                        Recent transaction
                                    </Text>
                                    <Text align="left" className="sf-pro !text-[16px] text-[#101010]">
                                        $50 to John@gmail.com
                                    </Text>
                                </div>
                                <div className='flex items-center justify-end w-36 space-x-2'>
                                    <Text className="text-black !text-[14px]">
                                        All time
                                    </Text>
                                    <Image src={'/sendMoney/downBlack.svg'} width={18} />
                                </div>
                            </div>
                            <div className='bg-[#101010] p-5 py-7 rounded flex items-start'>
                                <div className='p-2 rounded-full bg-primary'>
                                    <Image src="/sendMoney/successBlack.svg" width={24} />
                                </div>
                                <div className='w-full pl-5'>
                                    <Text align="left" className="sf-pro !text-[16px] text-white">
                                        Successful Transactions
                                    </Text>
                                    <Text align="left" className="custom-font !tracking-widest !text-[24px] text-white">
                                        50
                                    </Text>
                                    <Text align="left" className="custom-font !tracking-widest !text-[16px] text-white pt-12">
                                        Favorite contact
                                    </Text>
                                    <Text align="left" className="sf-pro !text-[16px] text-white">
                                        John@gmail.com
                                    </Text>
                                </div>
                                <div className='flex items-center justify-end w-36 space-x-2'>
                                    <Text className="text-white !text-[14px]">
                                        All time
                                    </Text>
                                    <Image src={'/sendMoney/downWhite.svg'} width={18} />
                                </div>
                            </div>
                        </div>
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
                            <TextIcon iconSrc="/explore/pay.svg" text="pay utilities" mainClass="bg-primary flex flex-col items-center w-full space-y-3 w-full rounded-xl py-10 cursor-pointer" textClass="text-black" />
                            <TextIcon iconSrc="/explore/pay.svg" text="Transactions" mainClass="bg-primary flex flex-col items-center w-full space-y-3 w-full rounded-xl py-10 cursor-pointer" textClass="text-black" onClick={() => { setIsShow(!isShow), setShowUtility(true) }} />
                        </div>
                    </div> */}

            </div>
        </MainLayout>
    )
}
