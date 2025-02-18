import React from 'react'
import { MainLayout } from '@/components/layouts'
import {CardsOrganism} from "@/components/organisms"
export default function page() {
  return (
    <MainLayout>
        <div className=' h-full overflow-auto pb-16'>
        <CardsOrganism/>
        </div>
    </MainLayout>
  )
}
