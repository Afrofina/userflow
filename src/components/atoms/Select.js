"use client"
import React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// import DropDown from "../../../public/dropDown.svg"
import { Image } from '.';
export default  function SelectAtom(props) {
    const {
        value,
        handleChange,
        displayEmpty,
        inputProps,
        menuitems,
        className,
        label,
        placeholderValue,
        icon
    } = props
    const IconComponent =  (props) => (
        <Image src={icon} className={'cursor-pointer'}/>
    );

    return (
        <Select
            value={value}
            onChange={handleChange}
            displayEmpty={displayEmpty}
            renderValue={(selected) => {
                if (value.length === 0) {
                  return <span>{placeholderValue}</span>;
                }
                return value
              }}
            inputProps={inputProps}
            className={className}
            label={label}
            IconComponent={IconComponent}
            classes={{nativeInput:'!rounded-none py-1 border border-black'}}
        >

            {menuitems.lenght !== 0 &&
                menuitems?.map((item,index) => <MenuItem  key={index} value={item}>{item}</MenuItem>)
            }
        </Select>
    )
}
SelectAtom.defaultProps = {
    value: '',
    displayEmpty: true,
    inputProps: { 'aria-label': 'Without label' },
    menuitems: [''],
    className: 'text-black w-full',
    label: '',
    placeholderValue:'Placeholder',
    icon:'/ship/dropDown.svg'
}
