'use client'
import React, { useState ,useRef} from 'react'
import { Text, Input, Image, Button } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
import MessagesList from "./messagesList"
import MapOrder from '../orders/mapOrder'
import Link from 'next/link'
export default function messages() {
    const [isChat, setIsChat] = useState(false)
    const [isLocation, setIsLocation] = useState(false)
    // Create a reference to the hidden file input element
    const hiddenFileInput = useRef(null);

    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file 
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        handleFile(fileUploaded);
    };
    return (
        <div className='flex flex-col h-full'>
            <div className='lg:hidden flex lg:flex-row flex-col lg:space-y-0 space-y-4 w-full justify-between items-center py-8 px-5 border-b border-black'>
                <Link href={'/ecom/ship/u-cargo-agent/order-requests'} className='lg:w-auto w-full'>
                    <Button className="text-black border text[18px] border-black px-6 py-2 rounded lg:w-auto w-full">
                        View request(s)
                    </Button>
                </Link>
                <Link href={'/ecom/ship/u-cargo-agent'} className='lg:w-auto w-full'>
                    <Button className="text-black border text[18px] border-black px-6 py-2 rounded lg:w-auto w-full">
                        Listing
                    </Button>
                </Link>
            </div>
            <div className='border-b border-black pb-4'>
                <Text className="text-black !text-[24px] custom-font !tracking-widest pt-4" align="center">
                    Messages
                </Text>
                <Text className="text-[#575757] !text-[18px] sf-pro">
                    Chat with your clients
                </Text>
            </div>
            {/* <div className='flex-grow flex justify-center items-center'>
                <Text className="text-[#969696] !text-[18px] sf-pro">
                    No message here
                </Text>
            </div> */}
            {isChat && <div className='flex-grow w-full px-4 pt-5 space-y-4 overflow-auto'>
                <TextIcon iconSrc="/ship/avatar.svg" iconWidth={38} text="Hey, where are you" textClass="text-black bg-[#EFEFEF] !text-[18px] sf-pro py-2 px-4 rounded-md" mainClass="flex items-center space-x-3 py-2" />
                <div className='flex justify-end'>
                    <Text className="text-white bg-[#6A00D3] !text-[18px] sf-pro py-2 px-4 rounded-md">
                        Almost at the airport
                    </Text>
                </div>
                <TextIcon iconSrc="/ship/avatar.svg" iconWidth={38} text="Alright text let me know  when you arrive" textClass="text-black bg-[#EFEFEF] !text-[18px] sf-pro py-2 px-2  rounded-md" mainClass="flex items-center space-x-3 py-2" />

            </div>}
            {isChat && <div className='px-4 py-4'>
                {isLocation && <div className='pb-3 relative'>
                    <MapOrder mainClass="!h-[241px] rounded-md overflow-hidden" />
                    <div className='px-12 pt-4 absolute top-0 z-[99999] w-full'>
                        <div className='flex space-x-3 border border-[#969696] bg-white py-2 px-3 rounded-full'>
                            <Image src={'/ship/search.svg'} width={20} />
                            <Input className="text-black text-[16px] w-full bg-transparent focus:outline-none placeholder-black" placeholder="Search location " />
                        </div>
                    </div>
                </div>}
                <div className='border border-[#EFEFEF] px-2 rounded-md'>
                    {!isLocation ? <div>
                        <TextIcon iconSrc="/ship/camera.svg" iconWidth={18} text="Camera" textClass="text-[#0028FB] !text-[16px] sf-pro" mainClass="flex space-x-3 py-2 border-b border-[#EFEFEF]" />
                        <TextIcon iconSrc="/ship/upload.svg" iconWidth={18} text="Upload photos" textClass="text-[#0028FB] !text-[16px] sf-pro" mainClass="flex space-x-3 py-2 border-b border-[#EFEFEF]" />
                        <TextIcon iconSrc="/ship/location.svg" iconWidth={18} text="Share location" textClass="text-[#0028FB] !text-[16px] sf-pro" mainClass="flex space-x-3 py-2 cursor-pointer" onClick={() => setIsLocation(true)} />
                    </div>

                        :
                        <div>
                            <TextIcon iconSrc="/ship/upload.svg" iconWidth={18} text="Share live location" textClass="text-[#0028FB] !text-[16px] sf-pro" mainClass="flex space-x-3 py-2 border-b border-[#EFEFEF]" />
                            <TextIcon iconSrc="/ship/location.svg" iconWidth={18} text="Send location " textClass="text-[#0028FB] !text-[16px] sf-pro" mainClass="flex space-x-3 py-2" />
                        </div>}
                </div>
                <div className='flex items-center space-x-2 border border-[#929292] rounded-md px-3 py-3 mt-4'>
                    <Image src="/ship/addBlue.svg" width={24} onClick={handleClick} className={'cursor-pointer'}/>
                    <Input className="bg-trasparent hover:outline-none placeholder-[#969696] text-[20px] w-full" />
                    <input
                        type="file"
                        onChange={handleChange}
                        ref={hiddenFileInput}
                        style={{ display: 'none' }} // Make the file input element invisible
                    />
                </div>
                <Text className="!text-[14px] text-[#FF0000] sf-pro pt-2">
                    Do not perform any transaction or share location outside of our platform for your security,<span className='border-b border-[#0028FB] text-[#0028FB] cursor-pointer'> Read our terms for more.</span>
                </Text>
            </div>}
            {!isChat && <div className='flex-grow'>
                <MessagesList handleClick={() => setIsChat(true)} />
            </div>}
        </div>
    )
}
