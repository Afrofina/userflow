import React from "react";
import { Text, Button } from "@/components/atoms";
import Card from "./cardInfo";
import { InputIcon } from "@/components/molecules";
export default function confirmPayment() {
  return (
    <div>
      <Text variant="h6" className="text-black custom-font !tracking-widest">
        Confirm payment
      </Text>
      <div className="pt-6">
        <Card />
      </div>
      <Button className="border border-black text-black w-full py-3 rounded mt-6 !font-light">
        Edit
      </Button>
      <Text
        variant="h6"
        className="text-black custom-font !tracking-widest pt-12"
      >
        Add New
      </Text>
      <Text className="!text-[14] text-[#333333] !font-light">
        Add a new credit card to make payment
      </Text>
      <div className="space-y-5 pt-6">
        <InputIcon
          iconSrc={"/sendMoney/avatar.svg"}
          placeholder={"Name on card"}
        />
        <InputIcon
          iconSrc={"/sendMoney/card.svg"}
          placeholder={"Card Number"}
        />
        <div className="flex md:flex-row flex-col md:items-center items-stretch md:space-x-5 space-x-0 md:space-y-0 space-y-5">
          <div className="md:w-2/3 w-full">
            <InputIcon
              iconSrc={"/shop/checkout/calendar.svg"}
              placeholder={"MM/YYYY"}
            />
          </div>
          <InputIcon iconSrc={"/shop/checkout/lock.svg"} placeholder={"CVV"} />
        </div>
      </div>
      <Button className="bg-black w-full py-3 rounded mt-6 !font-light">
        Pay
      </Button>
    </div>
  );
}
