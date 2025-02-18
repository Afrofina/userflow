import { Typography } from '@mui/material';
import React from 'react'

export default function Text(props) {
    const {
        align,
        children,
        classes,
        paragraph,
        noWrap,
        variant,
        className,
        onClick
    } = props
    return (
        <Typography align={align} slotProps={{root:'sf-pro'}} paragraph={paragraph} noWrap={noWrap} variant={variant} className={className} onClick={onClick}>
            {children}
        </Typography>
    )
}
Text.defaultProps = {
    align: 'center', // Default alignment
    paragraph: false, // Default paragraph setting
    noWrap: false, // Default noWrap setting
    variant:'body1',
    className:'text-black'
};