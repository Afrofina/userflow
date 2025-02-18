'use client'
import { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import { Header, Sidebar, BottomNavigation } from '../organisms'
import { Suspense } from 'react'
import Loading from './loading'
import LinearProgress from '@mui/material/LinearProgress';
const PageView = dynamic(() => import("./view"), {
  ssr: true,
  loading: () => <Loading />,
});
export default function MainLayout({ children, pageTitle }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures the effect runs only once after initial render


  return (
    <div className='flex bg-[#FEFBFF] h-screen overflow-hidden'>
      <div className='w-[145px] lg:block hidden '>
        <Sidebar />
      </div>
      <div className='overflow-auto w-full flex flex-col h-screen'>
        <div>
          <Header title={pageTitle} />
          {loading ? <LinearProgress color="primary" />:<></>}
        </div>
        {loading ? <Loading /> : <Suspense fallback={<p>loading</p>}>
          <PageView>
            {children}
          </PageView>
        </Suspense>}
        <div className='lg:hidden block'>
          <BottomNavigation />
        </div>
      </div>
    </div>
  )
}
