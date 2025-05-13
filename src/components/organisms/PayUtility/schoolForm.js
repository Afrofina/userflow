import React from "react";
import { Text, Button, Select, Input, Image } from "@/components/atoms";
export default function StudentDetailForm() {
  return (
    <div className="space-y-6 pb-24">
      <div className="space-y-2 pb-5 pt-6">
        <Text
          variant="h4"
          className="text-black font-media-sans-semicondensed custom-font lg:block hidden"
        >
          Student Details
        </Text>
        <Text>Please fill in your institution details</Text>
      </div>
      <form className="space-y-4">
        <Input placeholder="Student name " />
        <Input placeholder="Student ID" />
        <div className="py-2">
          <Text
            variant="h6"
            className="text-black font-media-sans-semicondensed custom-font"
          >
            Amount
          </Text>
          <Text variant="body1">Please enter the amount you wish you pay</Text>
        </div>
        <div className="border border-[#929292] flex items-center  px-2 py-[16px] rounded">
          <Input
            className="bg-transparent text-black placeholder-black w-full focus:outline-none"
            placeholder="0"
          />
          <div className="flex items-center">
            <Text>USD</Text>
            <Image src="/explore/down.svg" />
          </div>
        </div>
        <div className=" flex items-center bg-[#D9D9D9]  px-3 py-[5px] rounded">
          <div className="w-full">
            <p className="text-black text-sm">Amount to receive</p>
            <Input
              className="bg-transparent placeholder-black w-full focus:outline-none text-black"
              placeholder="0"
            />
          </div>
          <Text>GHC</Text>
        </div>
        <textarea
          type="textarea"
          rows={4}
          placeholder="Addition notes"
          className="border border-[#929292] bg-transparent py-[16px] px-2 text-black w-full focus:outline-0 placeholder-black rounded"
        />
      </form>
      <Button className="bg-black w-full py-3 rounded mt-3">Continue</Button>
    </div>
  );
}
