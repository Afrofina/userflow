import React from 'react'
import { Text, Select } from '../atoms'
export default function LabelSelect(props) {
    const { label,align,mainClass,selectClass,menuitems,handleChange,value ,placeholder,icon,labelClass} = props
    return (
        <div className={mainClass}>
            <Text align={align} className={labelClass}>
                {label}
            </Text>
            <Select icon={icon} className={selectClass} menuitems={menuitems} handleChange={handleChange} value={value} placeholderValue={placeholder}/>
        </div>
    )
}
LabelSelect.defaultProps={
    label:'Label',
    align:'Left',
    mainClass:'space-y-2 ',
    selectClass:'pr-3 w-full rounded-none',
    icon:'/ship/dropDown.svg'
}
