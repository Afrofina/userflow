'use client'
import React, { useState, useEffect } from 'react'
import { Text, Image, Button } from '@/components/atoms'
import options from '@/constants/landing/shippingOptions'
import { Card } from "@/components/molecules"
export default function PageOrgFour() {
    const [data, setData] = useState([])
    const [selectedOption, setSelectedOption] = useState({})
    useEffect(() => {
        setData(options)
    }, [])
    useEffect(() => {
        setSelectedOption(data[0])
    }, [data])
    return (
        <div className='pt-12 bg-white '>
            <div className='relative'>
                <Text variant="h4" className="!text-black lg:!text-[32px] !text-[24px] custom-font !tracking-widest lg:!font-extralight !font-bold">
                    Afrofina shipping
                </Text>
                <div className='flex justify-center space-x-4 pt-6 pb-12'>
                    {data && data?.map((val) => (
                        <Button handleClick={() => setSelectedOption(val)} className={`${selectedOption?.item === val?.item ? 'bg-dark text-white' : 'border border-dark text-dark'} lg:py-4 py-2 lg:px-4 px-0 w-[260px] rounded-full lg:!text-[20px] !text-[12px]`}>
                            {val?.item}

                        </Button>
                    ))}
                </div>

                <Image src={'/landing/pageOrgFour/globle.svg'} className={'absolute bottom-24 left-48 lg:block hidden'} />
                <Image src={'/landing/pageOrgFour/location.svg'} className={'absolute bottom-4 right-48 lg:block hidden'} />
            </div>
            {
                selectedOption &&
                <div className='grid lg:grid-cols-9 grid-cols-1'>
                    <div className='bg-primary pt-16 pl-12 pb-20 col-span-5 relative h-auto overflow-hidden'>
                        <Image src={selectedOption?.data?.image} width={451} height={444} />
                        <div className='absolute h-full w-full top-[40%] left-0 flex flex-col items-end pr-10'>
                            <Card mainClass="border-l-4 border-primary mb-8 space-y-4 bg-white py-4 flex flex-col items-center  rounded-lg w-[358px]"
                                header={selectedOption?.data?.heading}
                                description={selectedOption?.data?.description}
                                isButton={false}
                                isBorderd={false}
                                headerClass="text-black"
                                descriptionClass="text-black"
                                bgColor="bg-none"
                            />
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <Text className={'text-left text-black py-12 border-y border-primary px-8'} align="left">{selectedOption?.data?.description2}</Text>

                        <div className='pl-12 pt-14'>
                            <Text align="left" variant="h5">
                                How does it work
                            </Text>
                            <div className='space-y-4 pt-10 '>
                                {selectedOption?.data?.list?.map((listItem,) => (
                                    <Text align="left">
                                        {listItem}
                                    </Text>
                                ))}
                                <Button isIcon={true} iconSrc={'/rightIconPrimary.svg'}
                                >
                                    {selectedOption?.data?.buttonText}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
