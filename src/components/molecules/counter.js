'use client'
import React, { useState } from 'react'
import { Text, Image } from '../atoms'
export default function Counter({ mainClass, textClass }) {
  const [count, setCount] = useState(0)
  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const handleAdd = () => {
    setCount(count + 1)
  }
  return (
    <div className={mainClass}>
      <Image src={'/shop/product/subtract.svg'} width={16} onClick={handleSubtract} className={'cursor-pointer'}/>
      <Text className={textClass}>
        {count}
      </Text>
      <Image src={'/shop/product/add.svg'} width={16} onClick={handleAdd} className={'cursor-pointer'}/>
    </div>
  )
}
Counter.defaultProps = {
  mainClass: 'flex border border-[#D8D8D8] space-x-4 py-0.5 rounded',
  textClass: "text-black !text-[14px] sf-pro"
}
