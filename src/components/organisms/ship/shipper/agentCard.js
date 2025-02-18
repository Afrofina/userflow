import React from 'react'
import { Text, Button } from '@/components/atoms'
import Link from 'next/link'
export default function agentCard() {
    return (
        <div>
            <div className='!h-[178px] rounded-md' style={{ backgroundImage: `url('/ship/agent.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

            </div>
            <div className='flex justify-between pt-2'>
                <Text className="text-black !text-[14px] custom-font !tracking-widest" align="center">
                    Jenny William
                </Text>
                <Text className="text-black !text-[14px] custom-font !tracking-widest" align="center">
                    $50/10kg
                </Text>
            </div>
            <div className='flex justify-between py-3'>
                <Text className="text-[#575757] !text-[14px] sf-pro !tracking-widest" align="center">
                    Destination
                </Text>
                <Text className="text-[#575757] !text-[14px] sf-pro !tracking-widest" align="center">
                    Tx, USA
                </Text>
            </div>
            <div className='flex justify-between'>
                <Text className="text-[#575757] !text-[14px] sf-pro !tracking-widest" align="center">
                    Departing from
                </Text>
                <Text className="text-[#575757] !text-[14px] sf-pro !tracking-widest" align="center">
                    Ghana
                </Text>
            </div>
            <Link href={'/ecom/ship/u-cargo-shipper/agent-info'}>
                <Button className="w-full bg-black  py-3 !text-[14px] rounded mt-4 font-extralight">
                    view more
                </Button>
            </Link>
        </div>
    )
}
