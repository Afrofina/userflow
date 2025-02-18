
import React from 'react'
import { Counter, LabelTextarea, TextIcon } from '@/components/molecules'
import { Input, Text, Dropdown, Image, Switch, Textarea, Button } from '@/components/atoms'
import Link from 'next/link'
export default function ItemDetails() {
    return (
        <div>
            <div className='flex lg:flex-row flex-col items-start  border-b border-black pb-16 lg:px-0 px-4'>
                <Text className="!text-[20px] text-black sf-pro px-2">
                    #1
                </Text>
                <div className='pt-1 lg:pr-10 pr-0 w-full'>
                    <LabelTextarea text="Package Description" textClass="!text-[18px] text-black sf-pro pb-2" rows={3} inputClass='border border-black w-full rounded text-black placeholder-black sf-pro px-2' placeholder />
                    <Text className="!text-[18px] text-black sf-pro pb-2 pt-10" align="left">
                        Item Value
                    </Text>
                    <div className='border border-black rounded py-1 px-2'>
                        <Text className="text-black !text-[12px] sf-pro" align="left">
                            Declared item value
                        </Text>
                        <Input className="text-black placeholder-black sf-pro py-3 !text-[18px] w-full focus:outline-none" placeholder="0 USD" />
                    </div>
                    <Text className="!text-[18px] text-black sf-pro pb-2 pt-10" align="left">
                        Item Weight
                    </Text>
                    <div className='border border-black rounded py-1 px-2'>
                        <Text className="text-black !text-[12px] sf-pro" align="left">
                            item weight (kg/lb)
                        </Text>
                        <div className='flex items-center'>
                            <Input className="text-black placeholder-black sf-pro py-3 !text-[18px] w-full focus:outline-none" placeholder="" />
                            <Dropdown button={<div className='flex space-x-3 cursor-pointer'>
                                <Text>
                                    KG
                                </Text>
                                <Image src="/ship/down.svg" width={20} />
                            </div>} />
                        </div>
                    </div>
                    <div className='flex justify-between items-center pt-8'>
                        <Text className="!text-[18px] text-black sf-pro ">
                            Upload parcel image
                        </Text>
                        <Text className="!text-[16px] text-black sf-pro ">
                            Supported format Jpeg, Png
                        </Text>
                    </div>

                    <div className='flex space-x-3 pb-6 pt-4'>
                        <div className='!h-[100px] w-[100px]' style={{ backgroundImage: `url('/ship/package.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                        </div>
                        <div className='border border-black !h-[100px] w-[100px] flex items-center justify-center rounded'>
                            <Image src={'/ship/add.svg'} width={24} />
                        </div>
                    </div>
                    <div className='flex justify-between items-center pt-8'>
                        <Text className="!text-[18px] text-black sf-pro ">
                            Item Quantity
                        </Text>
                        <Text className="!text-[18px] text-black sf-pro ">
                            Your item is.....
                        </Text>
                    </div>
                    <div className='flex justify-between items-center pt-6'>
                        <Counter mainClass={'flex border border-black space-x-4 py-1 px-2 rounded justify-between'} />
                        <div className='flex space-x-3 '>
                            <Input type="checkbox" className="w-[27px] h-[27px] rounded border border-black" />
                            <TextIcon text="Non-Stackable" iconSrc="/ship/alert.svg" textClass="!text-[18px] text-black sf-pro pr-2" mainClass="flex flex-row-reverse" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:px-10 px-4 py-10 border-b border-black'>
                <Text className="!text-[18px] text-black sf-pro !font-medium pb-4" align="left">
                    Packaging
                </Text>
                <Text className="!text-[18px] text-black sf-pro !font-lightest" align="left">
                    How would you like your packaging, (charges extra charges may apply).
                </Text>
                <div className='flex lg:flex-row flex-col lg:items-center items-start lg:space-y-0 space-y-4 lg:space-x-24 space-x-0 pt-8'>
                    <div className='flex items-center space-x-6'>
                        <Switch />
                        <Text className="!text-[16px] text-black sf-pro !font-lightest" align="left">
                            Standard Packaging
                        </Text>
                    </div>
                    <div className='flex items-center space-x-6'>
                        <Switch />
                        <Text className="!text-[16px] text-black sf-pro !font-lightest" align="left">
                            Standard Packaging
                        </Text>
                    </div>
                </div>
            </div>
            <div className='lg:px-10 px-4 py-10 border-b border-black'>
                <Text className="!text-[18px] text-black sf-pro !font-medium pb-4" align="left">
                    Customs & Declaration
                </Text>
                <div className='flex space-x-3 '>
                    <Input type="checkbox" className="!w-[27px] !h-[27px] rounded border border-black" />
                    <Text className="!text-[18px] text-black sf-pro pr-2" align="left">
                        I confirm that I have reviewed and understand the customs regulations for the destination country. I will comply with all applicable customs requirements and declare accurate information about the item(s) being shipped.
                    </Text>
                </div>
            </div>
            <div className='lg:px-10 px-4 py-10 border-b border-black'>
                <div className='flex lg:flex-row flex-col justify-between lg:items-center items-start lg:pb-0 pb-4'>
                    <Text className="!text-[18px] text-black sf-pro" align="left">
                        Special Instructions or Notes
                    </Text>
                    <Text className="!text-[16px] text-black sf-pro" align="left">
                        Is there anything you would like us to know.
                    </Text>
                </div>
                <Textarea className="border border-black w-full rounded text-black placeholder-black sf-pro px-2" rows={3} placeholder />
            </div>
            <div className='lg:px-10 px-4 py-10'>
                <div className='flex justify-between items-center'>
                    <Button className="border border-black px-2 py-1 flex items-center rounded">
                        <TextIcon iconSrc="/ship/addStroke.svg" text="Add Item" textClass="!text-[14px] text-black sf-pro" mainClass="flex space-x-4 items-center" />

                    </Button>
                    <Text className="lg:!text-[20px] !text-[16px] text-black custom-font !tracking-widest" align="center">
                        Total shipment weight: 0 kG
                    </Text>
                </div>
                <div className='flex space-x-3 pt-20 '>
                    <Input type="checkbox" className="w-[27px] h-[27px] rounded border border-black" />
                    <TextIcon text="Shipment contains dangerous goods " iconSrc="/ship/alert.svg" textClass="!text-[18px] text-black sf-pro pr-2" mainClass="flex flex-row-reverse" />
                </div>
                <div className='flex space-x-3 pt-4'>
                    <Input type="checkbox" className="w-[27px] h-[27px] rounded border border-black" />
                    <TextIcon text="Shipment contains dangerous goods " iconSrc="/ship/alert.svg" textClass="!text-[18px] text-black sf-pro pr-2" mainClass="flex flex-row-reverse" />
                </div>
                <Link href={'/ecom/ship/standard-shipping/delivery-options'} className='lg:w-auto w-full'>
                    <Button className=" bg-black  px-32 py-3 lg:w-auto w-full !text-[18px] rounded mt-4 ">
                        Ship Now
                    </Button>
                </Link>
            </div>
        </div>
    )
}
