'use client'
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Text, Image, Select, Slider } from "@/components/atoms"
export default function Filter({ button }) {
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
                <div className='!w-[422px] space-y-5 px-6 py-10'>
                    <Text className="!text-[24px] text-black custom-font !tracking-widest" align="left">
                        Filter
                    </Text>
                    <Select placeholderValue="Country" icon="/ship/down.svg" className="pr-3 w-full" />
                    <Select placeholderValue="Categories " icon="/ship/down.svg" className="pr-3 w-full" />
                    <Text className="!text-[24px] text-black custom-font !tracking-widest" align="left">
                        Price range
                    </Text>
                    <div className='flex justify-between'>
                        <Text className="!text-[12px] text-black sf-pro">
                            $0
                        </Text>
                        <Text className="!text-[12px] text-black sf-pro">
                            Max
                        </Text>
                    </div>
                    <div className='px-3'>
                        <Slider />
                    </div>
                </div>
            </Menu>
        </div>
    );
}
