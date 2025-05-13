import React from "react";
import { Text, Button, Select, Input } from "@/components/atoms";
import Link from "next/link";
export default function schoolForm() {
  return (
    <div className="space-y-6 pb-24">
      <div className="space-y-2 pb-5 pt-6">
        <Text
          variant="h4"
          className="text-black font-media-sans-semicondensed custom-font lg:block hidden"
        >
          Institution Details
        </Text>
        <Text>Please fill in your institution details</Text>
      </div>
      <form className="space-y-3">
        <Select />
        <Input placeholder="Address" />
        <Input />
        <Select />
        <Text>Institution Address</Text>
        <Input placeholder="Address" />
        <Input placeholder="City" />
        <Input placeholder="State" />
        <Input placeholder="Zip Code" />
        <Input
          placeholder="Ghana"
          className=" bg-[#D9D9D9] py-[16px] px-2 text-black w-full focus:outline-0 placeholder-black rounded"
        />
      </form>
      <Link href="/ecom/explore/pay-utility/school-detail">
        <Button className="bg-black w-full py-3 rounded mt-3">Continue</Button>
      </Link>
    </div>
  );
}
