
import React from 'react';
import { MainLayout } from '@/components/layouts';
import { NoTransactions, SidebarSendMoney } from '@/components/organisms';
import { TextIcon } from '@/components/molecules';

export default function Page() {


    return (
        <MainLayout pageTitle="">
            <div className="flex h-full">
                <SidebarSendMoney />

                <div className="flex justify-center w-full h-full overflow-auto px-4">
                    <div className="lg:w-1/4 w-full">
                        <NoTransactions />
                    </div>
                </div>
                {/* <div className="w-full">
                        <div className="w-full h-full flex items-center space-x-3 px-4">
                            <TextIcon
                                iconSrc="/explore/pay.svg"
                                text="Send money"
                                mainClass="bg-primary flex flex-col items-center w-full space-y-3 w-full rounded-xl py-10 cursor-pointer"
                                textClass="text-black"
                                onClick={() => {
                                    setIsShow(!isShow);
                                    setShowUtility(true);
                                }}
                            />
                            <TextIcon
                                iconSrc="/sendMoney/transactions.svg"
                                text="Transactions"
                                mainClass="bg-primary flex flex-col items-center w-full space-y-3 w-full rounded-xl py-10 cursor-pointer"
                                textClass="text-black"
                            />
                        </div>
                    </div> */}
            </div>
        </MainLayout>
    );
}
