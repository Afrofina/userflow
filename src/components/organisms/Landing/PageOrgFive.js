import React from 'react'
import { Text,Button } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
import CompanyCarousel from './companyCarousel'
export default function PageOrgFive() {
  return (
    <div className='pt-24'>
      <div className='flex justify-center pb-12'>
        <div className='lg:w-2/3 w-full lg:px-12 px-4 flex flex-col items-center space-y-12'>
          <Text className="custom-font lg:!text-[40px] !text-[18px] text-black !tracking-widest " align="center">
            Here are all the partners combining their forces
            to make Afrofina the best platform.
          </Text>
          <Button>
            <TextIcon text="Join our partners" iconSrc="/rightIconWhite.svg" textClass="pr-3 sf-pro lg:!text-[18px] !text-[10px] text-white" mainClass="flex flex-row-reverse items-center"/>
          </Button>
        </div>
      </div>
      <CompanyCarousel data={['/landing/pageOrgFive/groupon.svg','/landing/pageOrgFive/wallmart.svg','/landing/pageOrgFive/tether.svg','/landing/pageOrgFive/stripe.svg','/landing/pageOrgFive/aliExpress.svg','/landing/pageOrgFive/lonest.svg']}/>
    </div>
  )
}
