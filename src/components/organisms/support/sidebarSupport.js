import React from 'react'
import { Text,Image } from '@/components/atoms'
export default function sidebarSupport() {
  return (
    <div className='!w-[270px] h-full border-r border-black pt-12 px-6 lg:block hidden'>
      <Text className="!text-[24px] custom-font !text-[#333333]" align="left">
        Contact Info
      </Text>

      <div className='space-y-5 pt-10'>
        <div className='py-4 px-4 rounded border border-black bg-white'>
          <div className=''>
            <Image src={'/explore/royal/chat.svg'} width={46} />
            <div className='py-6'>
              <Text className="text-black lg:!text-[18px] !text-[14px] sf-pro" align="left">
                Send us an email
              </Text>
              <Text className="text-black lg:!text-[12px] !text-[10px] sf-pro " align="left">
                Send us an email for quick response
              </Text>
            </div>
          </div>
          <Text className="text-black lg:!text-[14px] !text-[10px]  sf-pro border-b border-black pb-[0.5] " align="left">
            Support@afrofina.com
          </Text>
        </div>
        <div className='py-4 px-4 rounded border border-black bg-white'>
          <div className=''>
            <Image src={'/support/call.svg'} width={46} />
            <div className='py-6'>
              <Text className="text-black lg:!text-[18px] !text-[14px] sf-pro" align="left">
                Send us an email
              </Text>
              <Text className="text-black lg:!text-[12px] !text-[10px] sf-pro " align="left">
                Send us an email for quick response
              </Text>
            </div>
          </div>
          <Text className="text-black lg:!text-[14px] !text-[10px]  sf-pro border-b border-black pb-[0.5] " align="left">
            Support@afrofina.com
          </Text>
        </div>
      </div>
    </div>
  )
}
