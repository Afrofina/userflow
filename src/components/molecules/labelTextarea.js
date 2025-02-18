import React from 'react'
import { Text,Input ,Textarea} from '../atoms'
export default function LabelInput(props) {
    const{
        text,
        textClass,
        placeholder,
        alignText,
        mainClass,
        type,
        inputClass,
        rows
    }=props
  return (
    <div className={mainClass}>
        <Text align={alignText} className={textClass}>
            {text}
        </Text>
        <Textarea placeholder={placeholder} type={type} className={inputClass} rows={rows}/>
    </div>
  )
}
LabelInput.defaultProps={
  alignText:'left',
  textClass:'text-[#575757]',
  type:'text',
}
