import React from 'react'
import { Text } from '@/components/atoms'
import BookingStatusCard from "./bookingStatusCard"
export default function bookingStatus() {
    return (
        <div>
            <Text className="text-black !text-[16px] custom-font !tracking-widest lg:block hidden" align="left">
                Booking Status
            </Text>
            <Text className="text-[#969696] !text-[14px] sf-pro !tracking-widest pt-2 pb-10 lg:!text-left !text-center" align="left">
                Check whether your booking request was <br /> accepted and make payment to get proceed
            </Text>
            <div className='space-y-12'>
                <BookingStatusCard />
                <BookingStatusCard />
            </div>
        </div>
    )
}
