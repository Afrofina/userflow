import React from 'react'
import { MainLayout } from '@/components/layouts'
import { SidebarSupport, MessagesSupport, FaqSupport } from "@/components/organisms"
export default function page() {
    return (
        <MainLayout>
            <div className='h-full flex'>
                <div>
                    <SidebarSupport />
                </div>
                <div className='grid lg:grid-cols-11 grid-cols-1 h-full w-full'>
                    <div className='col-span-7 border-r border-black overflow-auto h-full'>
                        <FaqSupport />
                    </div>
                    <div className='col-span-4 lg:block hidden'>
                        <MessagesSupport />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
