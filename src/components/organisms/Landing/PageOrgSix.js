import React from 'react'
import { Image } from '@/components/atoms'
import { Card } from '@/components/molecules'
export default function PageOrgSix() {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-0 pt-12 lg:p-5 p-0'>
            <div className='lg:space-y-5 space-y-0 pt-4'>

                <Image src={'/landing/PageOrgSix/first.svg'} width={686} height={635} className={'w-full lg:rounded-xl rounded-none '} />
                <Card header="Get the royal treatment at Afrofina, "
                    description="Track your packages with afrofina, afrofina tracking tells you exactly 
                     where your packages are the status of the shipping, and more, 
                     simply enter your package tracking ID to start tracking."
                    buttonText="Track package"
                    descriptionClass='text-black sf-pro lg:!text-[20px] !text-[12px]'
                    isBorderd={false}
                    isButtonIcon={true} buttonIcon={'/rightIconWhite.svg'}
                    buttonClass='bg-dark px-5 text-white rounded-full py-2 flex items-center '
                    bgColor="lg:hidden flex  bg-primary !rounded-none"
                />
                <Card header="Tracking  with afrofina "
                    isTextIcon
                    textIconsIcon={'/landing/PageOrgFive/track.svg'}
                    isBorderd={false}
                    mainClass='lg:rounded-xl rounded-none flex  flex-col items-center justify-center lg:px-12 px-6 lg:py-12 py-8 space-y-6'
                    bgColor="bg-[#63257B] lg:flex hidden "
                    headerClass='text-white custom-font  !tracking-widest lg:!text-[40px] !text-[20px]'
                    descriptionClass='text-white sf-pro lg:!text-[20px] !text-[12px]'
                    description="Track your packages with afrofina, afrofina tracking tells you exactly 
                    where your packages are the status of the shipping, and more, 
                    simply enter your package tracking ID to start tracking."
                    buttonText="Track package"
                    isButtonIcon={true} buttonIcon={'/rightIconPurple.svg'}
                    buttonClass='bg-white px-5 text-[#63257B] rounded-full py-2 flex items-center'
                />
            </div>
            <div className='lg:space-y-5 space-y-0'>
                <Image src={'/landing/PageOrgSix/second.svg'} width={686} height={635} className={'w-full lg:rounded-xl rounded-none lg:hidden block'} />
                <Card header="Get the royal treatment at Afrofina, "
                    description="Track your packages with afrofina, afrofina tracking tells you exactly 
                     where your packages are the status of the shipping, and more, 
                     simply enter your package tracking ID to start tracking."
                    buttonText="Track package"
                    descriptionClass='text-black sf-pro lg:!text-[20px] !text-[12px]'
                    isBorderd={false}
                    isButtonIcon={true} buttonIcon={'/rightIconWhite.svg'}
                    buttonClass='bg-dark px-5 text-white rounded-full py-2 flex items-center '
                    bgColor="lg:flex hidden  bg-primary"
                />
                 <Card header="Tracking  with afrofina "
                    isTextIcon
                    textIconsIcon={'/landing/PageOrgFive/track.svg'}
                    isBorderd={false}
                    mainClass='lg:rounded-xl rounded-none flex  flex-col items-center justify-center lg:px-12 px-6 lg:py-12 py-8 space-y-6'
                    bgColor="bg-[#63257B] lg:hidden flex "
                    headerClass='text-white custom-font  !tracking-widest lg:!text-[40px] !text-[20px]'
                    descriptionClass='text-white sf-pro lg:!text-[20px] !text-[12px]'
                    description="Track your packages with afrofina, afrofina tracking tells you exactly 
                    where your packages are the status of the shipping, and more, 
                    simply enter your package tracking ID to start tracking."
                    buttonText="Track package"
                    isButtonIcon={true} buttonIcon={'/rightIconPurple.svg'}
                    buttonClass='bg-white px-5 text-[#63257B] rounded-full py-2 flex items-center'
                />
                <Image src={'/landing/PageOrgSix/second.svg'} width={686} height={635} className={'w-full rounded-xl lg:block hidden'} />

            </div>
        </div>
    )
}
