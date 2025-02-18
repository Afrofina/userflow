import React from 'react'
import { Text, Button } from '@/components/atoms'
import { Search, ProductCard } from "@/components/organisms"
export default function productsModal({handleProductAdd}) {
    return (
        <div className='absolute h-full  top-0 w-full  transition-opacity duration-1000 ease-in-out lg:px-10 px-0 lg:py-2 py-0' style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
            <div className='w-full h-full flex flex-col bg-white lg:rounded-xl rounded-none' >
                <div className='flex justify-center w-full pb-4 lg:px-0 px-2'>
                    <div className=''>
                        <Text className="text-black lg:!text-[24px] !text-[20px] custom-font !tracking-widest pb-2 pt-4 " align="center">
                            Add Product
                        </Text>
                        <Text className="text-black lg:!text-18px] !text-[16px] sf-pro pb-2 !font-extralight" align="center">
                            search and add the product you purchased at afrofina
                        </Text>
                        <Search />
                    </div>
                </div>
                <div className='flex-grow overflow-auto lg:px-6 px-2' >
                    <div className='grid lg:grid-cols-4 grid-cols-2 gap-3  '>
                        {[0, 1, 2, 3, 4, 5, 6].map((val) => (<ProductCard productHeight="lg:!h-[224.74px] !h-[178px]" isCheck={val===2?true:false} showCheck={true} showHeart={false}/>))}
                    </div>
                </div>
                <div className='pb-4 lg:flex hidden justify-center  '>
                    <Button className=" bg-black px-12  py-3 !text-[18px] rounded mt-4 font-extralight" onClick={handleProductAdd}>
                    Add Product
                    </Button>
                </div>
            </div>
        </div>
    )
}
