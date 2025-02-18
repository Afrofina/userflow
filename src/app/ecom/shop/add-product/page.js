'use client'
import React,{useState} from 'react'
import { MainLayout } from '@/components/layouts'
import { AddProduct ,ProductsModal} from '@/components/organisms'
export default function page() {
    const [isModal,setIsModal]=useState(false)
    return (
        <MainLayout>
            <div className='relative h-full'>
                <AddProduct handleAdd={()=>setIsModal(true)}/>
                {isModal?<ProductsModal handleProductAdd={()=>setIsModal(false)}/>:<></>}
            </div>
        </MainLayout>
    )
}
