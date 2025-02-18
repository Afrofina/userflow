import React from 'react'
import { Image } from '@/components/atoms'
import { Card } from '@/components/molecules'
export default function PageOrgTwo() {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-0 pt-12'>
            <div className='lg:space-y-5 space-y-0 pt-4'>
                
                <Image src={'/landing/PageOrgTwo/first.png'} width={686} height={543} className={'w-full lg:rounded-xl rounded-none '} />
                <Card header="Want to shop for your shop or  your business Afrofina got you covered."
                    isDescription={false}
                    isBorderd={false}
                    buttonText="Shop wholesale"
                    isButtonIcon={true} buttonIcon={'/rightIconPrimary.svg'}
                    buttonClass='bg-dark px-5 text-primary rounded-full py-2 flex items-center'
                    bgColor=" lg:hidden flex bg-primary !rounded-none"
                />
                <Card header="Purchase any product you want at afrofina, without limits shop for your business or self."
                    isDescription={false}
                    buttonText="Shop retail" isButtonIcon={true} buttonIcon={'/rightIconWhite.svg'}
                    buttonClass='bg-dark px-5 text-white rounded-full py-2 flex items-center'
                    bgColor=" lg:flex hidden "
                />
            </div>
            <div className='lg:space-y-5 space-y-0'>
                <Image src={'/landing/PageOrgTwo/second.svg'} width={686} height={543} className={'w-full lg:rounded-xl rounded-none lg:hidden block'} />
                <Card header="Want to shop for your shop or  your business Afrofina got you covered."
                    isDescription={false}
                    isBorderd={false}
                    buttonText="Shop wholesale"
                    isButtonIcon={true} buttonIcon={'/rightIconPrimary.svg'}
                    buttonClass='bg-dark px-5 text-primary rounded-full py-2 flex items-center '
                    bgColor="lg:flex hidden  bg-primary"
                />
                 <Card header="Purchase any product you want at afrofina, without limits shop for your business or self."
                    isDescription={false}
                    buttonText="Shop retail" isButtonIcon={true} buttonIcon={'/rightIconWhite.svg'}
                    buttonClass='bg-dark px-5 text-white rounded-full py-2 flex items-center'
                    bgColor=" lg:hidden flex !rounded-none"
                />
                <Image src={'/landing/PageOrgTwo/second.svg'} width={686} height={543} className={'w-full rounded-xl lg:block hidden'} />

            </div>
        </div>
    )
}
