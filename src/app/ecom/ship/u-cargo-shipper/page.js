'use client'
import React from 'react'
import { MainLayout } from '@/components/layouts'
import { ShipSidebar, FindUcargoAgent, AgentCard, Messages } from '@/components/organisms'
import { Text } from '@/components/atoms'
export default function page() {
    return (
        <MainLayout>
            <div className='h-full flex'>
                <ShipSidebar />
                <div className='grid lg:grid-cols-3 grid-cols-1 w-full h-full'>
                    <div className='col-span-2 lg:border-r border-r-0 border-black h-full overflow-auto'>
                        <FindUcargoAgent />
                        <div>
                            <Text className="text-black !text-[24px] custom-font !tracking-widest pb-8 pt-4" align="center">
                                Available U-cargo  agent
                            </Text>
                            <div className='grid lg:grid-cols-3 grid-cols-2 gap-8 lg:px-8 px-4 pb-6'>
                                {[0, 1, 2, 3, 4, 5].map(() => <AgentCard />)}
                            </div>
                        </div>
                    </div>
                    <div className='lg:block hidden'>
                        <Messages />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
