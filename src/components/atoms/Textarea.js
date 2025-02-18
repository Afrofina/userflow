
import React from 'react';
import { TextField } from '@mui/material';
// Define Input component
const Textarea = (props) => {
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
        rows,
        ...otherProps
    } = props;

    // Render Textarea component
    return (
        <textarea
            error={error}
            type={type}
            defaultValue={defaultValue}
            value={value}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            classes={{root:'!rounded-none'}}
            style={sx}
            className={className}
            placeholder={placeholder}
            helperText={helperText}
            TextareaProps={{className:'outline:none'}}
            rows={rows}
            {...otherProps} // Pass any other props not explicitly destructured
        />
    );
};
Textarea.defaultProps = {
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
    placeholder:'placeholder',
    rows:5
};

export default Textarea;
