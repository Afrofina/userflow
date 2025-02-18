import React from 'react'
import { Image, Input } from '../atoms'
import Filter from "./filter"
export default function Search() {
    return (
        <div className='flex bg-[#F9EAFF] px-6 py-1 rounded-full'>
            <Image src={'/header/search.svg'} width={20} height={20} />
            <input className="bg-transparent border-0 focus:outline-none w-full placeholder-[#63257B] text-[#63257B] pl-3" placeholder='Search' />
            <Filter button={<Image src={'/header/sort.svg'} />} />

        </div>
    )
}
