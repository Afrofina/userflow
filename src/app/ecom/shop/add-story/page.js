import React from 'react'
import { MainLayout } from '@/components/layouts'
import { AddStory } from '@/components/organisms'
export default function page() {
    return (
        <MainLayout>
            <div className='flex h-full justify-center'>
                <div className='w-1/3 h-full'>
                    <AddStory />
                </div>
            </div>
        </MainLayout>
    )
}
