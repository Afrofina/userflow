// src/theme.ts
'use client';
import { Roboto ,Poppins} from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    // fontFamily: 'Media Sans Semicondensed, Roboto, sans-serif',
  },
});

export default theme;
