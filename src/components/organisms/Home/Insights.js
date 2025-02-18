import React from 'react'
import { Text } from '@/components/atoms'
export default function Insights(props) {
    const {
        receivedBalance,
        sentBalance
    } = props
    return (
        <div>
            <Text>
                Insights
            </Text>
            <div className='bg-white shadow-sm border rounded-md p-4 mb-5 mt-3'>
                <Text>
                    Money In
                </Text>
                <Text variant="h5" className="py-2 text-black">
                    ${receivedBalance}
                </Text>
                <Text className="border-b border-dashed text-gray-400" variant="subtitle2">
                    Total Received
                </Text>
                <Text variant="subtitle2" className="text-primary pt-4">
                    Request Money
                </Text>
            </div>
            <div className='bg-white shadow-sm border rounded-md p-4'>
                <Text>
                    Money Out
                </Text>
                <Text variant="h5" className="py-2 text-black">
                    ${receivedBalance}
                </Text>
                <Text className="border-b border-dashed text-gray-400" variant="subtitle2">
                    Total Sent
                </Text>
                <Text variant="subtitle2" className="text-primary pt-4">
                    See History
                </Text>
            </div>
        </div>
    )
}
Insights.defaultProps={
    receivedBalance:'0.00',
    sentBalance:'0.00'
}
