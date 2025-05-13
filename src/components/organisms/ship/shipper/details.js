import React from "react";
import { Text, Image, Button } from "@/components/atoms";
import { LabelInput, LabelTextarea, LabelSelect } from "@/components/molecules";
import Link from "next/link";
export default function details() {
  return (
    <div className="pb-6">
      <Text
        className="text-black !text-[16px] custom-font !tracking-widest"
        align="left"
      >
        Details
      </Text>
      <Text
        className="text-[#969696] !text-[14px] sf-pro !tracking-widest pt-2 pb-10"
        align="left"
      >
        Please describe your package to the agent
      </Text>
      <LabelInput
        text="Package Weight (KG)"
        textClass="text-black !text-[14px] pb-2 sf-pro"
        placeholder="10"
      />
      <LabelTextarea
        text="Package Description"
        placeholder
        textClass="text-black !text-[14px] pb-2 sf-pro pt-6"
        rows={4}
      />
      <LabelInput
        text="Where are you sending it to (Address)"
        textClass="text-black !text-[14px] pb-2 sf-pro pt-6"
        placeholder
      />
      <LabelSelect
        icon="/ship/down.svg"
        label="Select Pick-up method"
        labelClass={"text-black !text-[14px] pb-2 sf-pro pt-6"}
        menuitems={[
          "Pick-up within Accra at fee $10",
          "Drop-off at afrofina head office Accra",
        ]}
        selectClass={"!py-0.5 w-full pr-3"}
        placeholder="Select preferred pick-up"
      />
      <div className="flex space-x-12 py-4">
        <Text className="text-black !text-[14px] pb-2 sf-pro">
          Upload parcel image
        </Text>
        <Text className="text-black !text-[14px] pb-2 sf-pro">
          Supported format Jpeg, Png
        </Text>
      </div>
      <div className="flex space-x-3 pb-6">
        <div
          className="!h-[100px] w-[100px]"
          style={{
            backgroundImage: `url('/ship/agent.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
        ></div>
        <div className="border border-black !h-[100px] w-[100px] flex items-center justify-center rounded">
          <Image src={"/ship/add.svg"} width={24} />
        </div>
      </div>
      <Link href={"/ecom/ship/u-cargo-shipper/booking-status"}>
        <Button className="w-full bg-black  py-3 !text-[14px] rounded mt-4 font-extralight">
          Book a request
        </Button>
      </Link>
    </div>
  );
}
