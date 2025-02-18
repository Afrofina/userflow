'use client'
import { MainLayout } from '@/components/layouts'
import React, { useState } from 'react'
import { ProfileSettings, PersonalInfoSettings, EditPersonalInfo } from '@/components/organisms'
export default function page() {
    const [isEditInfo, setIsEditInfo] = useState(false)
    return (
        <MainLayout pageTitle={'Profile'}>
            <div className='p-5 h-full overflow-auto'>
                <ProfileSettings />
                {!isEditInfo ? <PersonalInfoSettings handleClick={() => setIsEditInfo(true)} /> : <EditPersonalInfo />}

            </div>
        </MainLayout>
    )
}
