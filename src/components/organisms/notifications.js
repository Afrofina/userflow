'use client'
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Text, Image } from "@/components/atoms"
export default function notification({ button }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div
                className="cursor-pointer"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {button}
            </div>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}

            >
                <div className='!w-[752px] space-y-1 h-[80vh] overflow-auto'>
                    <div className='flex justify-between  px-4 border-b border-gray-400 pb-2'>
                        <Text className="!text-[24px] text-black custom-font !tracking-widest">
                            Notifications
                        </Text>
                        <Image src={'/close.svg'} width={24} />
                    </div>
                    <MenuItem onClick={handleClose}>
                        <div className='flex items-center w-full space-x-6 bg-[#F9EAFF] p-2 rounded-lg'>
                            <Image src={'/order.svg'} width={52} />
                            <div className='w-full'>
                                <Text className="text-black sf-pro !text-[20px]" align="left">
                                    Order Complete
                                    Today
                                </Text>
                                <Text className="text-[#333333] sf-pro !text-[18px]" align="left">
                                    Your order has been placed successfully , Tracking ID #134642
                                </Text>
                            </div>
                            <Text className="text-[#002BFF] sf-pro !text-[18px]">
                                View
                            </Text>
                        </div>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <div className='flex items-center w-full space-x-6 bg-[#F9EAFF] p-2 rounded-lg'>
                            <Image src={'/avatar.svg'} width={52} />
                            <div className='w-full'>
                                <Text className="text-black sf-pro !text-[20px]" align="left">
                                    New message
                                    1min ago
                                </Text>
                                <Text className="text-[#333333] sf-pro !text-[18px]" align="left">
                                    You have a new message from u-cargo
                                </Text>
                            </div>
                            <Text className="text-[#002BFF] sf-pro !text-[18px]">
                                View
                            </Text>
                        </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <div className='flex items-center w-full space-x-6 bg-[#F9EAFF] p-2 rounded-lg'>
                            <Image src={'/ship.svg'} width={52} />
                            <div className='w-full'>
                                <Text className="text-black sf-pro !text-[20px]" align="left">
                                    Shipping
                                    2 days ago
                                </Text>
                                <Text className="text-[#333333] sf-pro !text-[18px]" align="left">
                                    Your package has been shipped successfully , Tracking ID #134642
                                </Text>
                            </div>
                            <Text className="text-[#002BFF] sf-pro !text-[18px]">
                                View
                            </Text>
                        </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <div className='flex items-center w-full space-x-6 bg-[#F9EAFF] p-2 rounded-lg'>
                            <Image src={'/wallet.svg'} width={52} />
                            <div className='w-full'>
                                <Text className="text-black sf-pro !text-[20px]" align="left">
                                    Send money
                                </Text>
                                <Text className="text-[#333333] sf-pro !text-[18px]" align="left">
                                    You have successfully sent $20 to Johnmills@gmail.com
                                </Text>
                            </div>
                            <Text className="text-[#002BFF] sf-pro !text-[18px]">
                                View
                            </Text>
                        </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <div className='flex items-center w-full space-x-6 bg-[#F9EAFF] p-2 rounded-lg'>
                            <Image src={'/wallet.svg'} width={52} />
                            <div className='w-full'>
                                <Text className="text-black sf-pro !text-[20px]" align="left">
                                    Wallet
                                </Text>
                                <Text className="text-[#333333] sf-pro !text-[18px]" align="left">
                                    Successful withdrawal of $20
                                </Text>
                            </div>
                            <Text className="text-[#002BFF] sf-pro !text-[18px]">
                                View
                            </Text>
                        </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <div className='flex items-center w-full space-x-6 bg-[#F9EAFF] p-2 rounded-lg'>
                            <Image src={'/track.svg'} width={52} />
                            <div className='w-full'>
                                <Text className="text-black sf-pro !text-[20px]" align="left">
                                    Tracking
                                </Text>
                                <Text className="text-[#333333] sf-pro !text-[18px]" align="left">
                                    Your package has arrived in your city
                                </Text>
                            </div>
                            <Text className="text-[#002BFF] sf-pro !text-[18px]">
                                View
                            </Text>
                        </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <div className='flex items-center w-full space-x-6 p-2 rounded-lg'>
                            <Image src={'/track.svg'} width={52} />
                            <div className='w-full'>
                                <Text className="text-black sf-pro !text-[20px]" align="left">
                                    Tracking
                                </Text>
                                <Text className="text-[#333333] sf-pro !text-[18px]" align="left">
                                    Your package has arrived in your city
                                </Text>
                            </div>
                            <Text className="text-[#002BFF] sf-pro !text-[18px]">
                                View
                            </Text>
                        </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <div className='flex items-center w-full space-x-6 p-2 rounded-lg'>
                            <Image src={'/support.svg'} width={52} />
                            <div className='w-full'>
                                <Text className="text-black sf-pro !text-[20px]" align="left">
                                    Support
                                </Text>
                                <Text className="text-[#333333] sf-pro !text-[18px]" align="left">
                                    You have a new message from support
                                </Text>
                            </div>
                            <Text className="text-[#002BFF] sf-pro !text-[18px]">
                                View
                            </Text>
                        </div>
                    </MenuItem>
                </div>
            </Menu>
        </div>
    );
}
