import React from "react";
import { Text, Select, Button, Input, Image } from "@/components/atoms";
export default function paymentForm() {
  return (
    <div className="lg:px-0 px-4">
      <Text
        className="!text-[24px] text-black custom-font !tracking-widest"
        align="center"
      >
        Almost done
      </Text>
      <Text className="!text-[20px] text-black sf-pro pt-3" align="center">
        Lets get your package shipped now, add your billing
        <br /> address and payment method to complete the booking
        <br /> process. Thank you
      </Text>
      <Text
        className="!text-[20px] text-black custom-font !tracking-widest pt-10"
        align="center"
      >
        Billing address
      </Text>
      <Text className="!text-[18px] text-black sf-pro pt-3" align="center">
        Please enter your address{" "}
      </Text>
      <div className="space-y-5">
        <Input
          placeholder="Address"
          className="border border-[#929292] bg-transparent py-[16px] pl-[38px] pr-2 text-black w-full focus:outline-0 placeholder-black rounded"
        />
        <Input
          placeholder="City"
          className="border border-[#929292] bg-transparent py-[16px] pl-[38px] pr-2 text-black w-full focus:outline-0 placeholder-black rounded"
        />
        <Input
          placeholder="State/Province"
          className="border border-[#929292] bg-transparent py-[16px] pl-[38px] pr-2 text-black w-full focus:outline-0 placeholder-black rounded"
        />
        <Input
          placeholder="Postal code"
          className="border border-[#929292] bg-transparent py-[16px] pl-[38px] pr-2 text-black w-full focus:outline-0 placeholder-black rounded"
        />
        <Select placeholderValue="Ghana  " className="pr-3 pl-6 w-full" />
        <div className="flex items-center space-x-6">
          <Input type="radio" className="w-[24px] h-[24px]" />
          <Text className="!text-[20px] text-black sf-pro" align="center">
            Use senders address for billing.{" "}
          </Text>
        </div>
      </div>
      <Text
        className="!text-[20px] text-black custom-font !tracking-widest pt-10"
        align="center"
      >
        Payment Method
      </Text>
      <Text className="!text-[18px] text-black sf-pro pt-3" align="center">
        Please enter your payment details{" "}
      </Text>
      <div className="space-y-5">
        <Input
          placeholder="Card number "
          className="border border-[#929292] bg-transparent py-[16px] pl-[38px] pr-2 text-black w-full focus:outline-0 placeholder-black rounded"
        />
        <Select
          placeholderValue="Expiration"
          icon="/ship/calendar.svg"
          className="pr-3 pl-6 w-full"
        />
        <div className="border border-[#929292] rounded  flex items-center py-[16px] pl-[38px] pr-3">
          <Input
            placeholder="CVV/CVC"
            className="focus:outline-0 placeholder-black text-black w-full "
          />
          <Image src="/ship/guard.svg" width={20} />
        </div>
      </div>

      <div className=" pt-10 pb-8">
        {/* <Button className="border border-black text-black py-3 !text-[20px] rounded ">
                    Save
                </Button> */}
        <Button className=" bg-black py-3 w-full !text-[20px] rounded ">
          Pay
        </Button>
      </div>
    </div>
  );
}
