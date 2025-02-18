
import React from 'react';
import { TextField } from '@mui/material';
// Define Input component
const Input = (props) => {
    // Destructure props with default values
    const {
        color = 'primary',
        defaultValue = '',
        disabled = false,
        fullWidth = false,
        disableInjectingGlobalStyles = false,
        error = false,
        multiline = false,
        readOnly = false,
        required = false,
        size = 'medium',
        type = 'text',
        value = '',
        sx = {},
        classes={},
        className={},
        placeholder={},
        helperText='',
        onChange,
        ...otherProps
    } = props;

    // Render Input component
    return (
        <input
            type={type}
            className={className}
            placeholder={placeholder}
            helperText={helperText}
            inputProps={{className:'outline:none'}}
            onChange={onChange}
            {...otherProps} // Pass any other props not explicitly destructured
        />
    );
};
Input.defaultProps = {
    color: 'primary',
    defaultValue: '',
    disabled: false,
    fullWidth: false,
    disableInjectingGlobalStyles: false,
    error: false,
    multiline: false,
    readOnly: false,
    required: false,
    size: 'medium',
    type: 'text',
    value: '',
    sx: {},
    classes:{root:'!rounded-none'},
    className:'border border-[#929292] bg-transparent py-[16px] px-2 text-black w-full focus:outline-0 placeholder-black rounded',
    placeholder:'placeholder'
};

export default Input;
