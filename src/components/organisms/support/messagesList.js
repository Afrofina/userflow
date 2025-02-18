import React from 'react'
import { Image, Text, Input } from '@/components/atoms'
export default function messagesList({handleClick}) {
    return (
        <div className='pt-4'>
            <div className='px-10'>
                <div className='flex space-x-3 border border-[#969696] py-2 px-3 rounded-full'>
                    <Image src={'/ship/search.svg'} width={20} />
                    <Input className="text-[#969696] text-[16px] w-full" placeholder="search message " />
                </div>
            </div>
            <div className='space-y-3 px-4 pt-12'>
                <div className='flex space-x-3 border-b border-black pb-3 cursor-pointer' onClick={handleClick}>
                    <Image src={'/ship/avatar.svg'} width={38} />
                    <div>
                        <Text className="text-black !text-[18px] sf-pro !font-semibold" align="left">
                            Jacob Black
                        </Text>
                        <Text className="text-[#575757] !text-[12px] sf-pro" align="left">
                            Hello where are you,  hope you have not having any troubles
                        </Text>
                    </div>
                </div>
                <div className='flex space-x-3 border-b border-black pb-3 cursor-pointer'>
                    <Image src={'/ship/avatar.svg'} width={38} />
                    <div>
                        <Text className="text-black !text-[18px] sf-pro !font-semibold" align="left">
                            Sandra banks
                        </Text>
                        <Text className="text-[#575757] !text-[12px] sf-pro" align="left">
                            Hello where are you,  hope you have not having any troubles
                        </Text>
                    </div>
                </div>
                <div className='flex space-x-3 border-b border-black pb-3 cursor-pointer'>
                    <Image src={'/ship/avatar.svg'} width={38} />
                    <div>
                        <Text className="text-black !text-[18px] sf-pro !font-semibold" align="left">
                            Cindy
                        </Text>
                        <Text className="text-[#575757] !text-[12px] sf-pro" align="left">
                            Hello where are you,  hope you have not having any troubles
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    )
}
