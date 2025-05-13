import React from "react";
import { Text, Button } from "@/components/atoms";
import { TextIcon, LabelInput } from "@/components/molecules";
import Link from "next/link";
export default function RequestForm() {
  return (
    <div className="pb-12">
      <div className="grid grid-cols-2 gap-8">
        <div
          className="!h-[178px] rounded-md"
          style={{
            backgroundImage: `url('/ship/agent.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
        ></div>
        <div className="flex flex-col justify-between">
          <div className="flex justify-between items-end">
            <Text className="text-black custom-font !text-[16px] !tracking-widest">
              Jenny William
            </Text>
          </div>
          <div>
            <TextIcon
              text="Johnrahul@gmail.com"
              iconSrc="/ship/message.svg"
              textClass="text-[#575757] !text-[16px] sf-pro"
              mainClass="flex items-center space-x-2"
            />
            <TextIcon
              text="+233-559-256-3001"
              iconSrc="/ship/phone.svg"
              textClass="text-[#575757] !text-[16px] sf-pro"
              mainClass="flex items-center space-x-2 pt-1"
            />
            <Button className="w-full bg-black  py-3 !text-[14px] rounded mt-4 font-extralight">
              Message
            </Button>
          </div>
        </div>
      </div>
      <Text
        className="text-black custom-font !text-[18px] !tracking-widest pt-12 pb-4"
        align="left"
      >
        Package Details
      </Text>
      <div className="space-y-6">
        <LabelInput
          text="Package weight"
          textClass="!text-[16px] text-black sf-pro pb-2 !font-extralight"
          placeholder="5kg"
          inputClass="!text-[#575757] placeholder-[#575757] w-full focus:outline-none py-3 px-2 rounded text-[16px] border border-black"
        />
        <LabelInput
          text="Item Value in $"
          textClass="!text-[16px] text-black sf-pro pb-2 !font-extralight"
          placeholder="$"
          inputClass="!text-[#575757] placeholder-[#575757] w-full focus:outline-none py-3 px-2 rounded text-[16px] border border-black"
        />
        <LabelInput
          text="Package description"
          textClass="!text-[16px] text-black sf-pro pb-2 !font-extralight"
          placeholder="A box of clothes and books"
          inputClass="!text-[#575757] placeholder-[#575757] w-full focus:outline-none py-3 px-2 rounded text-[16px] border border-black"
        />
        <LabelInput
          text="where to deliver package (address)"
          textClass="!text-[16px] text-black sf-pro pb-2 !font-extralight"
          placeholder="A box of clothes and books"
          inputClass="!text-[#575757] placeholder-[#575757] w-full focus:outline-none py-3 px-2 rounded text-[16px] border border-black"
        />
        <LabelInput
          text="Pick-up method "
          textClass="!text-[16px] text-black sf-pro pb-2 !font-extralight"
          placeholder="Pick-up within accra fee $10"
          inputClass="!text-[#575757] placeholder-[#575757] w-full focus:outline-none py-3 px-2 rounded text-[16px] border border-black"
        />
      </div>
      <Text
        className="!text-[14px] text-black sf-pro pb-2 !font-extralight pt-12"
        align="left"
      >
        Package Photos
      </Text>
      <div className="grid lg:grid-cols-4 grid-cols-3 gap-3">
        <div
          className="w-full !h-[100px]"
          style={{
            backgroundImage: `url('/ship/box.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
        ></div>
        <div
          className="w-full !h-[100px]"
          style={{
            backgroundImage: `url('/ship/box.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
        ></div>

        <div
          className="w-full !h-[100px]"
          style={{
            backgroundImage: `url('/ship/box.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
        ></div>

        <div
          className="w-full !h-[100px]"
          style={{
            backgroundImage: `url('/ship/box.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
        ></div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 pt-8">
        <Button className="w-full bg-black  py-3 !text-[14px] rounded  font-extralight">
          Accept Request
        </Button>
        <Button className="text-black border text[14px] border-black w-full py-3 px-0 rounded sf-pro">
          Decline
        </Button>
      </div>
    </div>
  );
}
