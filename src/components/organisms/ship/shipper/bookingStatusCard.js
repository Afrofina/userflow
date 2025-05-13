import React from "react";
import { Text, Button } from "@/components/atoms";
import Link from "next/link";
export default function agentCard() {
  return (
    <div className="grid grid-cols-7 gap-5">
      <div
        className="lg:!h-[178px] !h-[121px] col-span-3 rounded-md"
        style={{
          backgroundImage: `url('/ship/agent.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
        }}
      ></div>
      <div className="col-span-4">
        <div className="flex justify-between">
          <Text
            className="text-black !text-[14px] custom-font !tracking-widest"
            align="center"
          >
            Jenny William
          </Text>
          <Text
            className="text-[#63257B] !text-[14px] custom-font !tracking-widest"
            align="center"
          >
            $50/10kg
          </Text>
        </div>
        <div className="flex justify-between  lg:pt-3 pt-5">
          <Text
            className="text-[#575757] !text-[14px] sf-pro !tracking-widest"
            align="center"
          >
            Destination
          </Text>
          <Text
            className="text-[#575757] !text-[14px] sf-pro !tracking-widest"
            align="center"
          >
            Tx, USA
          </Text>
        </div>
        <div className="flex justify-between py-1">
          <Text
            className="text-[#575757] !text-[14px] sf-pro !tracking-widest"
            align="center"
          >
            Departing from
          </Text>
          <Text
            className="text-[#575757] !text-[14px] sf-pro !tracking-widest"
            align="center"
          >
            Ghana
          </Text>
        </div>
        <div className="flex justify-between pb-3 ">
          <Text
            className="text-[#575757] !text-[14px] sf-pro !tracking-widest"
            align="center"
          >
            Status
          </Text>
          <Text
            className="text-green !text-[14px] sf-pro !tracking-widest"
            align="center"
          >
            Accepted
          </Text>
        </div>
        <div className="lg:grid hidden grid-cols-2 gap-5">
          <Link href={"/ecom/ship/u-cargo-shipper/make-payment"}>
            <Button className="w-full bg-black  py-3 !text-[14px] rounded mt-4 font-extralight">
              Make Payment
            </Button>
          </Link>
          <Link href={"/ecom/ship/u-cargo-shipper/booking-status"}>
            <Button className="w-full border border-black text-black  py-3 !text-[14px] rounded mt-4">
              Message
            </Button>
          </Link>
        </div>
      </div>
      <div className="lg:hidden block col-span-7 gap-5">
        <Link href={"/ecom/ship/u-cargo-shipper/make-payment"}>
          <Button className="w-full bg-black  py-3 !text-[14px] rounded mt-4 font-extralight">
            Make Payment
          </Button>
        </Link>
        <Link href={"/ecom/ship/u-cargo-shipper/booking-status"}>
          <Button className="w-full border border-black text-black  py-3 !text-[14px] rounded mt-4">
            Message
          </Button>
        </Link>
      </div>
    </div>
  );
}
