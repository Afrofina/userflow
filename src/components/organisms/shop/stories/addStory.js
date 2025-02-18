'use client'
import React, { useState, useRef } from 'react'
import { TextIcon } from '@/components/molecules'
import { Text } from '@/components/atoms'
import Link from 'next/link'
export default function AddStory() {
    const [isAdd, setIsAdd] = useState(false)
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
        <div className='h-full flex flex-col pb-5'>
            <Text className="text-black !text-[24px] custom-font !tracking-widest py-4 lg:block hidden" align="center">
                Stories
            </Text>
            <div className='flex-grow w-full block-story flex flex-col justify-center'>

                {!isAdd ? <TextIcon iconSrc="/shop/add.svg" iconWidth="32" text={<span className='flex'><span className='lg:block hidden pr-1'>Add </span>story</span>} textClass="text-black !text-[24px]" iconClasses="lg:block hidden" mainClass="flex flex-col items-center lg:space-y-3 space-y-0 cursor-pointer" onClick={() => setIsAdd(true)} />
                    : <div><TextIcon iconSrc="/shop/story/camera.svg" iconWidth={24} text='Camera' textClass="!text-[24px] sf-pro text-[#0028FB]" mainClass="flex space-x-3 items-center justify-center cursor-pointer" />
                        <Link href={'/ecom/shop/add-product'}> <TextIcon iconSrc="/shop/story/photo.svg" iconWidth={24} text='Upload photos or video' textClass="!text-[24px] sf-pro text-[#0028FB]" mainClass="flex space-x-3 items-center justify-center cursor-pointer" onClick={handleClick} /></Link>
                        <input
                            type="file"
                            onChange={handleChange}
                            ref={hiddenFileInput}
                            style={{ display: 'none' }} // Make the file input element invisible
                        />
                    </div>}
            </div>
        </div>
    )
}
