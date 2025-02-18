import React from 'react'
import { MainLayout } from '@/components/layouts'
import { SectionOneRoyal,CardOrganismRoyal,ChooseAPlan,FrequantlyAskQuestions } from "@/components/organisms"
export default function page() {
    return (
        <MainLayout pageTitle={"Royal"}>
            <div className='h-full overflow-auto'>
                <SectionOneRoyal />
                <CardOrganismRoyal/>
                <div className='flex justify-center'>
                    <div className='lg:w-8/12 w-full md:px-0 px-4'>
                        <ChooseAPlan/>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='lg:w-2/5 w-full md:px-0 px-4'>
                        <FrequantlyAskQuestions/>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
