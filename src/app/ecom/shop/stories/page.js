import React from 'react'
import { Text } from '@/components/atoms'
import { MainLayout } from '@/components/layouts'
import { StoryCarouselShop } from '@/components/organisms'
export default function page() {
    return (
        <MainLayout>
            <div className='h-full flex flex-col w-full'>
                <Text className="text-black !text-[24px] custom-font !tracking-widest py-4 lg:block hidden" align="center">
                    Stories
                </Text>
                <div className='flex-grow lg:pb-4 pb-0'>
                    <StoryCarouselShop />
                </div>
            </div>
        </MainLayout>
    )
}
