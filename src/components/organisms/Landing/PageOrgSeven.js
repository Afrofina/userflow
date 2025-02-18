import React from 'react'
import { Text } from '@/components/atoms'
export default function PageOrgSeven() {
    return (
        <div className='pt-24 p-5'>
            <div className='flex justify-center'>
                <Text className="lg:!text-[40px] !text-[20px] text-black custom-font !tracking-widest w-9/12 px-10 pb-12">
                    Get the most out of afrofina, watch this video to know  how you can utilize the full potential of Afrofina.
                </Text>
            </div>
            <div className={`!h-[642px] flex justify-center items-end lg:rounded-xl rounded-none overflow-hidden relative`} style={{ backgroundImage: `url('/shop/story.png')`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                {/* <div className=""> */}
                <video
                    className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
                    autoPlay
                    loop={true}
                    muted
                >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <div className="relative z-10 pb-3 rounded-lg w-full flex justify-between items-center lg:px-0 px-4">
                    <TextIcon iconSrc="/shop/avatar.svg" text="Vanessa" textClass="text-white !text-[24px] !font-medium sf-pro" iconWidth={69} iconClass='lg:w-[69px] w-[61px] ' mainClass="flex   items-center space-x-3 " />
                    <Button className="text-[18px] text-black sf-pro bg-white py-1">
                        View Product
                    </Button>
                </div> */}
                {/* </div> */}
            </div>
        </div>
    )
}
