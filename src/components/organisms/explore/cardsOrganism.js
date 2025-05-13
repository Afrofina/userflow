import React from "react";
import { Text, Image, Button } from "@/components/atoms";
import Card from "./card";
import Link from "next/link";
export default function CardsOrganism() {
  return (
    <div className="px-5 pt-8">
      <div className="flex gap-5 lg:flex-row flex-col">
        <Card
          text="Pay bills & utilities"
          imageSrc="/explore/images/payBillsUtility.png"
          link="/ecom/explore/pay-utility"
          iconSrc="/explore/rightIconWhite.svg"
        />
        <div className="bg-primary lg:w-10/12 w-full rounded-3xl h-[424] flex items-end px-6 pb-12">
          <div className="w-full space-y-8 lg:pt-0 pt-12">
            <Text
              variant="h3"
              className="custom-font !tracking-wide text-black lg:text-xl !text-4xl"
              align="left"
            >
              Become a U-cargo now
            </Text>
            <Button
              isIcon="true"
              iconSrc="/explore/shipPrimary.svg"
              className="bg-dark lg:px-2 px-2 text-primary rounded-full py-2 flex flex-row-reverse items-center w-[146px] !text-xs"
            >
              Join U-Cargo
            </Button>
          </div>
          <Image src={"/explore/images/bag.svg"} width={148} />
        </div>
        <Card
          text="Join the Royals"
          imageSrc="/explore/images/royals.png"
          link="/ecom/explore/royal"
          iconSrc="/explore/rightIconBlack.svg"
        />
      </div>
      <div className="flex pt-5 lg:flex-row flex-col gap-5">
        <Card
          text="Food and Groceries"
          imageSrc="/explore/images/groceries.png"
          link="/ecom/explore/pay-utility"
          iconSrc="/explore/rightIconWhite.svg"
        />
        <Card
          text="Book a Flight"
          imageSrc="/explore/images/flight.png"
          link="/ecom/explore/pay-utility"
          iconSrc="/explore/rightIconWhite.svg"
        />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-2 gap-5 pt-5">
        <Card
          text="Stays"
          imageSrc="/explore/images/stays.png"
          link="/ecom/explore/pay-utility"
          iconSrc="/explore/rightIconWhite.svg"
        />
        <div className="bg-green w-full rounded-3xl h-[424] flex flex-col justify-end items-start px-6 pb-12 space-y-12 relative lg:pt-0 pt-12">
          <Text
            variant="h4"
            className="custom-font !tracking-wide text-black pr-36"
            align="left"
          >
            Send Money to friends and family
          </Text>
          <Link href={"/ecom/explore/send-money"}>
            <Button
              isIcon="true"
              iconSrc="/explore/sendMoney.svg"
              className="bg-dark px-2 text-green rounded-full py-2 flex flex-row-reverse items-center"
            >
              Send Money
            </Button>
          </Link>
          <Image
            src={"/explore/images/coins.svg"}
            width={204.84}
            className={"absolute bottom-12 right-6 lg:w-[204px] w-[159.65px]"}
          />
        </div>
        <Card
          text="Shop Africa"
          imageSrc="/explore/images/shop.png"
          link="/ecom/explore/pay-utility"
          iconSrc="/explore/rightIconBlack.svg"
        />
      </div>
    </div>
  );
}
