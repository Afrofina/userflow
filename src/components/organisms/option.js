'use client'
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Text, Image, Select, Slider } from "@/components/atoms"
import { TextIcon } from '../molecules';
import Link from 'next/link';
export default function Option({ button }) {
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
                <div className='!w-[157px] px-3 py-4 space-y-3'>
                    <Link href={'/ecom/orders'}>
                        <div className='flex justify-between items-center'>
                            <TextIcon iconSrc="/orders.svg" iconWidth={18} text="My Orders " textClass="sf-pro text-[#333333] !text-[14px]" mainClass={'flex space-x-3 items-center'} />
                            <Image src={'/right.svg'} width={18} />
                        </div>
                    </Link>
                    <div className='flex justify-between items-center'>
                        <TextIcon iconSrc="/vendors.svg" iconWidth={18} text="Vendors  " textClass="sf-pro text-[#333333] !text-[14px]" mainClass={'flex space-x-3 items-center'} />
                        <Image src={'/right.svg'} width={18} />
                    </div>

                    <Link href={'/ecom/settings'}>
                        <div className='flex justify-between items-center pt-3'>
                            <TextIcon iconSrc="/profile.svg" iconWidth={18} text="Profile" textClass="sf-pro text-[#333333] !text-[14px]" mainClass={'flex space-x-3 items-center'} />
                            <Image src={'/right.svg'} width={18} />
                        </div>
                    </Link>
                    <TextIcon iconSrc="/upgrade.svg" iconWidth={18} text="upgrade plan " textClass="sf-pro text-[#63257B] !text-[14px]" mainClass={'flex space-x-3 items-center'} />

                </div>
            </Menu>
        </div>
    );
}
