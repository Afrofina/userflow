import React from "react";
import { Text, Button, Image } from "@/components/atoms";
import { TextIcon } from "@/components/molecules";
import Link from "next/link";
export default function agentInfo({ handleClick }) {
  return (
    <div className="pb-12">
      <Text
        className="text-black !text-[18px] custom-font !tracking-widest lg:block hidden"
        align="left"
      >
        Confirm Payment
      </Text>
      <Text
        className="text-black !text-[14px] sf-pro pt-2 pb-10 lg:!text-left !text-center"
        align="left"
      >
        Please add and confirm payment for this service
      </Text>
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
        <div className="flex flex-col justify-center items-start">
          <Text className="text-black custom-font !text-[16px] !tracking-widest">
            Jenny William
          </Text>
        </div>
      </div>
      <Text
        className="text-black custom-font !text-[18px] !tracking-widest pt-12 pb-4"
        align="left"
      >
        U-cargo details
      </Text>
      <div className="shadow p-4 space-y-4">
        <div className="flex justify-between">
          <Text className="text-[#575757] sf-pro !text-[16px]">
            Departing from
          </Text>
          <Text className="text-[#575757] sf-pro !text-[16px]">Ghana</Text>
        </div>

        <div className="flex justify-between">
          <Text className="text-[#575757] sf-pro !text-[16px]">
            Destination
          </Text>
          <Text className="text-[#575757] sf-pro !text-[16px]">Tx, USA</Text>
        </div>
        <div className="flex justify-between">
          <Text className="text-[#575757] sf-pro !text-[16px]">
            Departing date
          </Text>
          <Text className="text-[#575757] sf-pro !text-[16px]">07/07/2023</Text>
        </div>
        <div className="flex justify-between">
          <Text className="text-[#575757] sf-pro !text-[16px]">
            weight range
          </Text>
          <div className="flex space-x-16">
            <Text className="text-[#575757] sf-pro !text-[16px]">5kg</Text>
            <Text className="text-[#575757] sf-pro !text-[16px]">$20</Text>
          </div>
        </div>
        <div className="flex justify-between">
          <Text className="text-[#575757] sf-pro !text-[16px]">
            Pickup within:
          </Text>
          <div className="flex space-x-16">
            <Text className="text-[#575757] sf-pro !text-[16px]">
              City: Accra
            </Text>
            <Text className="text-[#575757] sf-pro !text-[16px]">Fee: $10</Text>
          </div>
        </div>
      </div>
      <Text
        className="text-black custom-font !text-[16px] !tracking-widest py-4"
        align="left"
      >
        Pay with Credit card
      </Text>
      <div
        className="flex items-center justify-between border border-gray-300 px-3 py-4 rounded cursor-pointer"
        onClick={() => setIsCard(true)}
      >
        <div className="flex items-center space-x-6">
          <Image src={"/shop/checkout/add.svg"} width={24} />
          <div>
            <Text align="left" className="text-[#707070] !text-[18px] sf-pro">
              Add a new credit card
            </Text>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border border-gray-300 px-3 py-1 rounded mt-3">
        <div className="flex items-center space-x-4">
          <Image src={"/shop/checkout/card.svg"} width={30} />
          <div>
            <Text align="left" className="text-[#707070] !text-[18px] sf-pro">
              **********4860
            </Text>
            <Text align="left" className="text-[#707070] !text-[14px] sf-pro">
              Visa card
            </Text>
          </div>
        </div>
        <Text className="text-black !text-[18px] border-b border-black ">
          Edit
        </Text>
      </div>
      <Text
        className="text-black custom-font !text-[18px] !tracking-widest py-4"
        align="left"
      >
        Supported Packages
      </Text>
      <div className="shadow p-4 space-y-4">
        <div className="flex justify-between">
          <Text className="text-[#575757] sf-pro !text-[16px]">
            Package delivery
          </Text>
          <Text className="text-[#575757] sf-pro !text-[16px]">$20/5kg</Text>
        </div>

        <div className="flex justify-between">
          <Text className="text-[#575757] sf-pro !text-[16px]">Pickup</Text>
          <Text className="text-[#575757] sf-pro !text-[16px]">$10</Text>
        </div>
        <div className="flex justify-between">
          <Text className="text-black font-medium sf-pro !text-[16px]">
            Total
          </Text>
          <Text className="text-black font-medium sf-pro !text-[16px]">
            $30
          </Text>
        </div>
      </div>
      <Button
        className="w-full bg-black  py-3 !text-[14px] rounded mt-4 font-extralight"
        onClick={handleClick}
      >
        Pay
      </Button>
      <Link href="/ecom/ship/u-cargo-shipper/make-payment">
        <Button className="w-full border border-black text-black  py-3 !text-[14px] rounded mt-4 font-extralight">
          Pay with Insurance
        </Button>
      </Link>
      {/* <Button className="w-full border border-black text-black  py-3 !text-[14px] rounded mt-4 font-extralight">
        Paid
      </Button> */}
    </div>
  );
}
