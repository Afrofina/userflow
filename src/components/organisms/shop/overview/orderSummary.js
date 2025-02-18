'use client'
import React, { useEffect, Suspense } from 'react';
import { Text, Button } from '@/components/atoms';
import { useSearchParams } from 'next/navigation';
import Drawer from '@mui/material/Drawer';

export default function OrderSummary({ handleClick }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <OrderSummaryContent handleClick={handleClick} />
        </Suspense>
    );
}

function OrderSummaryContent({ handleClick }) {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');

    useEffect(() => {
        console.log('r',)
    }, []);

    return (
        <div>
            <Text className="text-black !text-[16px] custom-font !tracking-widest lg:!text-left !text-center" align="left">
                Order summary
            </Text>
            <div className='shadow p-3 mt-6 space-y-2 border border-[#F9EAFF]'>
                <Text className="text-[#575757] !text-[16px] custom-font !tracking-widest lg:!text-left !text-center" align="left">
                    Products
                </Text>
                <div className='flex justify-between'>
                    <Text className="text-black !text-[16px] sf-pro !tracking-widest lg:!text-left !text-center" align="left">
                        Weight gain syrup
                    </Text>
                    <Text className="text-black !text-[16px] sf-pro !tracking-widest lg:!text-left !text-center" align="left">
                        $45
                    </Text>
                </div>
                <div className='flex justify-between'>
                    <Text className="text-black !text-[16px] sf-pro !tracking-widest lg:!text-left !text-center" align="left">
                        Weight gain syrup
                    </Text>
                    <Text className="text-black !text-[16px] sf-pro !tracking-widest lg:!text-left !text-center" align="left">
                        $45
                    </Text>
                </div>
            </div>
            <Text className="text-black !text-[16px] custom-font !tracking-widest lg:!text-left !text-center py-6" align="left">
                Shipping to
            </Text>
            <Text className="text-[#707070] !text-[16px] sf-pro !tracking-widest lg:!text-left !text-center pb-1" align="left">
                Lena Ablah
            </Text>
            <Text className="text-[#707070] !text-[16px] sf-pro !tracking-widest lg:!text-left !text-center pb-8 border-b border-black" align="left">
                Abena creek  block 6 Oyarifa, accra ghana
            </Text>
            <div className='flex justify-between pt-10'>
                <Text className="text-[#707070] !text-[16px] sf-pro !tracking-widest lg:!text-left !text-center" align="left">
                    Weight
                </Text>
                <Text className="text-black !text-[16px] sf-pro !tracking-widest lg:!text-left !text-center" align="left">
                    10kg
                </Text>
            </div>
            <div className='flex justify-between pt-2'>
                <Text className="text-[#707070] !text-[16px] sf-pro !tracking-widest lg:!text-left !text-center" align="left">
                    Items total
                </Text>
                <Text className="text-black !text-[16px] sf-pro !tracking-widest lg:!text-left !text-center" align="left">
                    $90
                </Text>
            </div>
            <div className='flex justify-between pt-2'>
                <Text className="text-[#707070] !text-[16px] sf-pro !tracking-widest lg:!text-left !text-center" align="left">
                    Shipping with afrofina
                </Text>
                <Text className="text-black !text-[16px] sf-pro !tracking-widest lg:!text-left !text-center" align="left">
                    $10
                </Text>
            </div>
            <div className='flex justify-between pt-2 pb-8 border-b border-black'>
                <Text className="text-[#707070] !text-[16px] sf-pro !tracking-widest lg:!text-left !text-center" align="left">
                    Tax
                </Text>
                <Text className="text-black !text-[16px] sf-pro !tracking-widest lg:!text-left !text-center" align="left">
                    $1
                </Text>
            </div>
            <div className='flex justify-between py-8'>
                <Text className="text-black !text-[16px] custom-font !tracking-widest lg:!text-left !text-center" align="left">
                    Total
                </Text>
                <Text className="text-black !text-[16px] custom-font !tracking-widest lg:!text-left !text-center" align="left">
                    $101
                </Text>
            </div>
            <div className='pb-8'>
                <Button className="w-full bg-black  py-3 !text-[18px] rounded font-extralight" onClick={handleClick}>
                    {type === 'card' ? 'Pay $101' : 'Pay $101 with USDT'}
                </Button>
            </div>
        </div>
    );
}
