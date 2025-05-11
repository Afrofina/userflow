import React from "react";
import { Image, Text } from "@/components/atoms";
import { SignInForm } from "@/components/organisms";
import Link from "next/link";
export default function SignIn() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 h-screen bg-white">
      <SignInForm />
      {/* <div className='w-full lg:block hidden h-screen object-cover rounded-l-[50px]  shadow-md ' style={{ backgroundImage: `url('/auth/signin.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
            
            </div> */}
      <div className="relative">
        <Image
          src={"/auth/signin.png"}
          className={
            "w-full lg:block hidden h-screen object-cover rounded-l-[50px]  shadow-md "
          }
          width={1000}
          height={1000}
        />
        <div className="absolute top-5 right-5 z-50 bg-primary py-2 px-7 rounded-3xl">
          <Link className="items-center" href={"sign-up"}>
            <Text className="text-black text-right float-right">
              Sign up{" "}
              <Text variant="span" className="!text-[20px]">
                &rarr;
              </Text>
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
}
