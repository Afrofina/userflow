import React from 'react'
import { Image, Text, Button } from '@/components/atoms'
import StepperSummary from './stepperSummary'
import Link from 'next/link'
export default function summary() {
    return (
        <div>
            <Text className="!text-[24px] text-black custom-font !tracking-widest lg:pl-10 pl-0 lg:!text-left !text-center lg:pb-0 pb-12" align="left">
                Your cargo
            </Text>
            <div className='flex lg:flex-row flex-col lg:pl-10 pl-4 lg:pr-16 pr-4 lg:space-x-12 space-x-0'>
                <Text className="!text-[20px] text-black custom-font !tracking-widest " align="left">
                    #1
                </Text>
                <div className='bg-white p-4 border border-gray-200 w-full rounded-md lg:mt-0 mt-8'>
                    <Text className="!text-[24px] text-black sf-pro pb-4 !font-semibold" align="left">
                        Package weight
                    </Text>
                    <Text className="!text-[22px] text-[#333333] sf-pro !font-medium pb-4" align="left">
                        60kg
                    </Text>
                    <Text className="!text-[24px] text-black sf-pro !font-semibold pb-4 pt-6" align="left">
                        Package photos
                    </Text>
                    <div className='grid lg:grid-cols-4 grid-cols-2 gap-5'>
                        <Image src={'/ship/package.svg'} height={184} width={184} className={'w-full'} />
                        <Image src={'/ship/package.svg'} height={184} width={184} className={'w-full'} />
                        <Image src={'/ship/package.svg'} height={184} width={184} className={'w-full'} />
                        <Image src={'/ship/package.svg'} height={184} width={184} className={'w-full'} />
                    </div>
                    <div className='flex justify-end pt-10'>
                        <Text className="!text-[18px] text-black sf-pro !font-medium border-b border-black pb-1" align="left">
                            Edit
                        </Text>
                    </div>
                </div>
            </div>
            <Text className="!text-[24px] text-black custom-font !tracking-widest pl-10 pt-16 pb-6" align="left">
                Summary
            </Text>
            <div className='lg:pl-10 pl-6 pt-8 border-y border-black'>
                <StepperSummary steppers={[
                    { title: 'Pick-up by Afrofina ', icon: '/ship/pickup.svg', description: 'Abena creek  block 6 Oyarifa, accra ghana' },
                    { title: 'Accra, Ghana ', icon: '/ship/planeStroke.svg', description: 'Abena creek  block 6 Oyarifa, accra ghana' },
                    { title: 'Georhe Bush Intercontinental, US', icon: '/ship/planeStroke.svg', description: 'Abena creek  block 6 Oyarifa, accra ghana' },
                    { title: 'Delivery by Afrofina ', icon: '/ship/pickup.svg', description: 'Abena creek  block 6 Oyarifa, accra ghana' }]} />
            </div>
            <div className='lg:pl-28 pl-6 py-4 border-b border-black pr-6'>
                <div className='flex justify-between pb-4'>
                    <Text className="!text-[22px] text-black sf-pro  !font-semibold" align="left">
                        1 Package
                    </Text>
                    <Text className="!text-[22px] text-black sf-pro  !font-semibold" align="left">
                        60KG
                    </Text>
                </div>
                <Text className="!text-[20px] text-black sf-pro  !font-light" align="left">
                    Total Weight
                </Text>
            </div>
            <div className='lg:pl-28 pl-6 py-4 border-b border-black pr-6'>
                <div className='flex justify-between pb-4'>
                    <Text className="!text-[22px] text-black sf-pro  !font-semibold" align="left">
                        Afrofina Economy
                    </Text>
                    <Text className="!text-[22px] text-black sf-pro  !font-semibold" align="left">
                        $4200.00
                    </Text>
                </div>
                <Text className="!text-[20px] text-black sf-pro  !font-light" align="left">
                    Door-to-Door
                </Text>
            </div>
            <div className='lg:pl-28 pl-6 py-4 border-b border-black pr-6'>
                <div className='flex justify-between pb-4'>
                    <Text className="!text-[22px] text-black sf-pro  !font-semibold" align="left">
                        Custom Clearance
                    </Text>
                </div>
                <Text className="!text-[20px] text-black sf-pro  !font-light" align="left">
                    No custom clearance
                </Text>
            </div>
            <div className='lg:pl-28 pl-6 py-4 border-b border-black pr-6'>
                <div className='flex justify-between pb-4'>
                    <Text className="!text-[22px] text-black sf-pro  !font-semibold" align="left">
                        Packaging

                    </Text>
                    <Text className="!text-[22px] text-black sf-pro  !font-semibold" align="left">
                        $50
                    </Text>
                </div>
                <Text className="!text-[20px] text-black sf-pro  !font-light" align="left">
                    Custom Packaging
                </Text>
            </div>
            <div className='lg:pl-28 pl-6 py-4 border-b border-black pr-6'>
                <div className='flex justify-between pb-4'>
                    <Text className="!text-[22px] text-black sf-pro  !font-semibold" align="left">
                        Insurance

                    </Text>
                    <Text className="!text-[22px] text-black sf-pro  !font-semibold" align="left">
                        $450
                    </Text>
                </div>
                <Text className="!text-[20px] text-black sf-pro  !font-light" align="left">
                    Value insured for package
                </Text>
            </div>
            <div className='lg:pl-28 pl-6 py-4 pr-6 flex justify-between items-center'>
                <Text className="!text-[24px] text-black custom-font !tracking-widest" align="left">
                    Total
                </Text>
                <Text className="!text-[24px] text-black custom-font !tracking-widest" align="left">
                    $4,700
                </Text>
            </div>
            <div className='flex lg:flex-row flex-col justify-end lg:space-x-5 space-x-0 lg:space-y-0 space-y-5 lg:pl-0 pl-6 pr-6 pt-10 pb-6'>
                <Button className="border border-black lg:w-[283px] w-full text-black py-3 !text-[20px] rounded ">
                    Save
                </Button>
                <Link href={'/ecom/ship/standard-shipping/payment'}>
                <Button className=" bg-black py-3 lg:w-[283px] w-full !text-[20px] rounded ">
                    Book Now
                </Button>
                </Link>
            </div>
        </div>
    )
}
