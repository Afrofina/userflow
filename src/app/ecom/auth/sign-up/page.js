import React from 'react'
import { Image } from '@/components/atoms'
import { SignupForm } from '@/components/organisms'
export default function SignIn() {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 h-screen bg-white'>
            <SignupForm />
            {/* <div className='w-full lg:block hidden h-screen object-cover rounded-l-[50px]  shadow-md ' style={{ backgroundImage: `url('/auth/signup.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
            
            </div> */}
            <Image src={'/auth/signup.png'} className={'w-full lg:block hidden h-screen object-cover rounded-l-[50px]  shadow-md '} width={1000} height={1000} />

        </div>
    )
}
