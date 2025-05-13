import React from "react";
import { Image, Text } from "@/components/atoms";
import { SignupForm } from "@/components/organisms";
import Link from "next/link";
export default function SignIn() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 h-screen bg-white">
      <SignupForm />
      {/* <div className='w-full lg:block hidden h-screen object-cover rounded-l-[50px]  shadow-md ' style={{ backgroundImage: `url('/auth/signup.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
            
            </div> */}
      <div>
        <Image
          src={"/auth/signup.png"}
          className={
            "w-full lg:block hidden h-screen object-cover rounded-l-[50px]  shadow-md "
          }
          width={1000}
          height={1000}
        />
        <div className="absolute top-5 right-5 z-50 bg-primary py-2 px-7 rounded-3xl">
          <Link className="items-center" href={"sign-in"}>
            <Text className="text-black text-right float-right">
              Sign in{" "}
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
