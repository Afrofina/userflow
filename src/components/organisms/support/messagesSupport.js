"use client";
import React, { useState } from "react";
import { Text, Input, Image } from "@/components/atoms";
import { TextIcon } from "@/components/molecules";
import MessagesList from "./messagesList";
import MapOrder from "../orders/mapOrder";
export default function messagesSupport() {
  const [isChat, setIsChat] = useState(false);
  const [isLocation, setIsLocation] = useState(false);
  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-black pb-4 pt-12 px-6">
        <Text
          className="text-black !text-[24px] custom-font !tracking-widest"
          align="center"
        >
          Chat Support
        </Text>
        <Text className="text-[#575757] !text-[18px] sf-pro" align="center">
          Send a message to our support
          <br />
          team
        </Text>
      </div>
      {/* <div className='flex-grow flex justify-center items-center'>
                <Text className="text-[#969696] !text-[18px] sf-pro">
                    No message here
                </Text>
            </div> */}
      <div className="flex-grow w-full px-4 pt-5 space-y-4 overflow-auto">
        <TextIcon
          iconSrc="/support/chat.svg"
          iconWidth={38}
          text="Hey, can we help you"
          textClass="text-black bg-[#EFEFEF] !text-[18px] sf-pro py-2 px-4 rounded-md"
          mainClass="flex items-center space-x-3 py-2"
        />
        <div className="flex justify-end">
          <Text className="text-white bg-[#6A00D3] !text-[18px] sf-pro py-2 px-4 rounded-md">
            Hey, how can we help you
          </Text>
        </div>
        <TextIcon
          iconSrc="/support/chat.svg"
          iconWidth={38}
          text="Hey, how can we help you"
          textClass="text-black bg-[#EFEFEF] !text-[18px] sf-pro py-2 px-2  rounded-md"
          mainClass="flex items-center space-x-3 py-2"
        />
      </div>
      <div className="px-3 pb-4">
        <div className="flex items-center space-x-2 border border-[#929292] rounded-md px-3 py-3 mt-4">
          <Image src="/support/attach.svg" width={24} />
          <Input
            className="bg-trasparent hover:outline-none placeholder-[#969696] text-black text-[20px] w-full"
            placeholder="write a message "
          />
        </div>
      </div>
    </div>
  );
}
