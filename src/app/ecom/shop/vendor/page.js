'use client'
import React, { useState } from 'react'
import { MainLayout } from '@/components/layouts'
import { StoryCarousel, CardOrganism, ProductCard, LabelsCarousel, VendorSection } from "@/components/organisms"
import { Button } from '@/components/atoms'
export default function page() {
    const types = ['Jewelry', 'Food ', 'clothes', 'Shoes', 'Bags', 'Spices', 'Vaces', 'Art', 'Cooking Utensils', 'Groceries', 'Creams', 'Vaces', 'Art', 'Cooking Utensils', 'Groceries', 'Creams', 'Vaces', 'Art', 'Cooking Utensils', 'Groceries', 'Creams']
    const data = ['All', 'Bracelets', 'Beads', 'Anklets', 'Necklace', 'Watches', 'Rings']

    const [selected, setSelected] = useState('Jewelry')
    const [option, setOption] = useState('All')
    return (
        <MainLayout>
            <div className='flex flex-col h-full lg:overflow-visible overflow-scroll'>
                <div className='w-full'>
                    <div className="py-4 pl-3 w-full">

                        <LabelsCarousel data={types} selected={selected} />
                    </div>

                    <VendorSection />
                    <div className="py-4 pl-3">

                        <LabelsCarousel data={data} selected={option} />
                    </div>
                </div>
                <div className='flex-grow lg:overflow-auto overflow-visible h-full lg:px-4 px-2' >
                    <div className='grid lg:grid-cols-4 grid-cols-2 gap-3  '>
                        {[0, 1, 2, 3, 4, 5, 6].map(() => (<ProductCard productHeight="lg:!h-[224.74px] !h-[178px]" />))}
                    </div>

                <div className='pb-4 lg:flex hidden justify-center  '>
                    <Button className=" bg-black px-12  py-3 !text-[18px] rounded mt-4 font-extralight">
                        Load more
                    </Button>
                </div>
                </div>
            </div>
        </MainLayout>
    )
}
