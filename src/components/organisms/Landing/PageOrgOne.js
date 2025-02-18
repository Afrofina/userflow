"use client"
import React from 'react'
import { Card } from '@/components/molecules'
import { Carousel, Image } from '@/components/atoms'
export default function PageOrgOne() {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1  lg:gap-5 gap-0 lg:space-y-0 space-y-5 lg:p-5 p-2'>
            <div className='col-span-2'>
                <Carousel
                    next={() => {/* Do stuff */ }}
                    prev={() => {/* Do other stuff */ }}
                >
                    <div className='relative'>
                        <Image src={"/landing/PageOrgOne/first.svg"} width={921} height={600} className={"w-full"} />
                        <Card mainClass="absolute bottom-0 border-l-2 border-white pl-3 ml-14 mb-8 space-y-4"
                            header="Shop for loved ones"
                            description="Put a smile on the faces of people you love by sending them gifts with Afrofina, "
                            isButton={false}
                            isBorderd={false}
                            headerClass="text-white"
                            descriptionClass="text-white"
                            bgColor="bg-none"

                            textAlign='left'
                        />
                    </div>
                    <div className='relative'>
                        <Image src={"/landing/PageOrgOne/second.svg"} width={921} height={600} className={"w-full"} />
                        <Card mainClass="absolute bottom-0 border-l-2 border-white pl-3 ml-14 mb-8 space-y-4"
                            header="Home delivery"
                            description="Get your package delivered right to your door step with Afrofina shipping."
                            isButton={false}
                            isBorderd={false}
                            headerClass="text-white"
                            descriptionClass="text-white"
                            bgColor="bg-none"
                            textAlign='left'
                        />
                    </div>
                    <div className='relative'>
                        <Image src={"/landing/PageOrgOne/third.svg"} width={921} height={600} className={"w-full"} />
                        <Card mainClass="absolute bottom-0 border-l-2 border-white pl-3 ml-14 mb-8 space-y-4"
                            header="Grocery Shopping"
                            description="Buy groceries for yourself and your loved ones in different cities with afrofina."
                            isButton={false}
                            isBorderd={false}
                            headerClass="text-white"
                            descriptionClass="text-white"
                            bgColor="bg-none"

                            textAlign='left'
                        />
                    </div>
                </Carousel>

            </div>
            <div className='space-y-6'>
                <Card isBorderd={false} isButtonIcon={true} buttonIcon={'/landing/PageOrgOne/icons/store.svg'}
                    buttonClass='bg-dark px-5 text-primary rounded-full py-2 flex flex-row-reverse items-center' />
                <Card header="Get a Quote"
                    description="Get an estimated cost for your package,
                                    compare estimates and find the best 
                                    cost to match your budget."
                    buttonText="Get quote" isBorderd={true} isButtonIcon={true} buttonIcon={'/landing/PageOrgOne/icons/list.svg'}
                    buttonClass='bg-dark px-5 text-white rounded-full py-2 flex flex-row-reverse items-center' />
            </div>
        </div>
    )
}
