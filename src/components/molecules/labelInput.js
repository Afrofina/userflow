import React from 'react'
import { Text,Input } from '../atoms'
export default function LabelInput(props) {
    const{
        text,
        textClass,
        placeholder,
        alignText,
        mainClass,
        type,
        inputClass
    }=props
  return (
    <div className={mainClass}>
        <Text align={alignText} className={textClass}>
            {text}
        </Text>
        <Input placeholder={placeholder} type={type} className={inputClass}/>
    </div>
  )
}
LabelInput.defaultProps={
  alignText:'left',
  textClass:'text-[#575757]',
  type:'text'
}
