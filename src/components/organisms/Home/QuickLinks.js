import React from 'react'
import { Text ,Image,Button} from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
export default function QuickLinks() {
    return (
        <div className='bg-white shadow-sm border rounded-md p-4'>
            <TextIcon iconSrc={'/dots.svg'} text={'Quick Links'} textVariant={'h6'} mainClass={'flex flex-row-reverse items-center justify-between'} />
             <div className='flex justify-between py-3 border-b '>
                <TextIcon iconClasses="bg-gray-100 rounded-xl w-10 p-2" iconSrc={'/home/business-tool.svg'} text="Business Tools" mainClass='flex flex-col items-center space-y-2' textVariant="body2"/>
                <TextIcon iconClasses="bg-gray-100 rounded-xl w-10 p-2" iconSrc={'/home/send.svg'} text="Send Money" mainClass='flex flex-col items-center space-y-2' textVariant="body2"/>
                <TextIcon iconClasses="bg-gray-100 rounded-xl w-10 p-2" iconSrc={'/home/qr.svg'} text="Qr Codes" mainClass='flex flex-col items-center space-y-2' textVariant="body2"/>
                <TextIcon iconClasses="bg-gray-100 rounded-xl w-10 p-2" iconSrc={'/home/invoice.svg'} text="Invoicing" mainClass='flex flex-col items-center space-y-2' textVariant="body2"/>
                <TextIcon iconClasses="bg-gray-100 rounded-xl w-10 p-2" iconSrc={'/home/request.svg'} text="Request Money" mainClass='flex flex-col items-center space-y-2' textVariant="body2"/>
                <TextIcon iconClasses="bg-gray-100 rounded-xl w-10 p-2" iconSrc={'/home/link.svg'} text="Yazz Me" mainClass='flex flex-col items-center space-y-2' textVariant="body2"/>
             </div>
             <div className='flex items-center pt-4'>
                <Image src={'/home/cart.svg'} width={50} height={50}/>
                <div className='pl-3'>
                     <Text variant='body2'>
                        Recomemded for you
                     </Text>
                     <Text variant='subtitle1'>
                        Set up Yazz-Money Checkout
                     </Text>
                     <div className='flex '>
                        <Text className="w-full text-black" variant='body2'>
                            Let your customers pay how they want on your website
                        </Text>
                        <div className=' w-full flex items-center space-x-3 pl-4'>
                            <Text variant='subtitle2'>
                                Not Now
                            </Text>
                            <Button className="text-sm">
                                Set up
                            </Button>
                        </div>
                     </div>
                </div>
             </div>
        </div>
    )
}
