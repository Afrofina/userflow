
'use client'
import React, { useState } from 'react'
import { MainLayout } from '@/components/layouts'
import { Button, Text } from '@/components/atoms'
import { StoryCarousel, CardOrganism, ProductCard, LabelsCarousel } from "@/components/organisms"
import { TextIcon } from '@/components/molecules'
export default function page() {
  const types = ['Jewelry', 'Food ', 'clothes', 'Shoes', 'Bags', 'Spices', 'Vaces', 'Art', 'Cooking Utensils', 'Groceries', 'Creams', 'Vaces', 'Art', 'Cooking Utensils', 'Groceries', 'Creams', 'Vaces', 'Art', 'Cooking Utensils', 'Groceries', 'Creams']
  const [selected, setSelected] = useState('Jewelry')
  const data = ['All','Bracelets','Beads','Anklets','Necklace','Watches','Rings']
  const[option,setOption]=useState('All')
  return (
    <MainLayout>
      <div className='py-5 border-b border-black overflow-auto h-full'>
        <div>
          <div className='pl-3 pb-3'>

            <StoryCarousel />
          </div>
          <div className='border-y border-black py-4 pl-3'>

            <LabelsCarousel data={types} selected={selected} />
          </div>
          <div className='pl-3'>
            <CardOrganism />
          </div>
          <div className='pl-3 pt-6 pb-3 flex space-x-6 items-center'>
            {data?.map((val, index) => (
              <Text className={`${option === val ? 'bg-[#63257B] text-white' : 'bg-[#F5DFFE] text-[#101010]'} rounded-full px-5 py-1 !text-[16px] cursor-pointer`} onClick={() => setOption(val)}>
                {val}
              </Text>))}
          </div>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 pt-6 pr-4 pl-3 lg:gap-10 gap-4'>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((val, index) => (<ProductCard isLiked={index === 2 ? true : false} />))}
          </div>
          <div className='flex justify-center pt-12 pb-20 items-center'>
            <Button className="bg-black flex px-4 py-3 rounded" >
              <TextIcon text="Load More" iconSrc="/shop/down.svg" mainClass='flex flex-row-reverse items-center'/>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
