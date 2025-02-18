import React from 'react';
import  Image  from './Image';
export default function CustomButton(props) {
  const {
    children,
    classes,
    color,
    component,
    endIcon,
    fullWidth,
    href,
    size,
    startIcon,
    sx,
    variant,
    className,
    handleClick,
    isIcon,
    iconSrc,
    iconWidth,
    iconHeight,
    ...otherProps
  } = props;

  return (
    <button
      classes={{ root: 'p-12' }}
      color={color}
      component={component}
      endIcon={endIcon}
      fullWidth={fullWidth}
      href={href}
      size={size}
      startIcon={startIcon}
      sx={sx}
      variant={variant}
      className={className}
      onClick={handleClick}
      
      {...otherProps}
    >
      <span className='px-3'>{children}</span>
      {isIcon && iconSrc? <Image src={iconSrc} width={iconWidth} height={iconHeight}/>:<></>}
    </button>
  );
}

// Set default props for the CustomButton component
CustomButton.defaultProps = {
  component: 'button',
  disabled: false,
  disableElevation: false,
  disableFocusRipple: false,
  disableRipple: false,
  fullWidth: false,
  size: 'medium',
  variant: 'contained',
  classes: { root: 'bg-primary px-12' },
  className: 'bg-dark px-5 text-primary rounded-full py-2 flex items-center space-x-3',
  isIcon:false,
  iconWidth:20,
  iconHeight:20
};
