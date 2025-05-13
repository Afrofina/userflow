import React from "react";
import ShopDescription from "./shopDescription";
import { Text } from "@/components/atoms";
import { TextIcon } from "@/components/molecules";
export default function VendorSection() {
  return (
    <div className="p-2 bg-primary grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-0">
      <div className="col-span-3">
        <ShopDescription />
      </div>
      <div className="col-span-7 flex flex-col justify-center">
        <Text
          className="custom-font text-black !tracking-widest lg:!text-[40px] !text-[20px] pb-3"
          align="left"
        >
          Welcome to African retreat
        </Text>
        <div className="p-2 w-max border border-black rounded-md grid lg:grid-cols-3 grid-cols-1 gap-4">
          <TextIcon
            iconSrc="/shop/product/whatsapp.svg"
            text="+233 (559)-152-3262"
            iconWidth={18}
            textClass="!text-[14px] text-black sf-pro"
            mainClass="flex items-center space-x-1  "
          />
          <TextIcon
            iconSrc="/shop/product/fb.svg"
            text="JonathanMajors"
            iconWidth={18}
            textClass="!text-[14px] text-black sf-pro"
            mainClass="flex items-center space-x-3 lg:border-x border-x-0 border-black lg:px-4 px-0"
          />
          <TextIcon
            iconSrc="/shop/product/insta.svg"
            text="JonathanMajors"
            iconWidth={18}
            textClass="!text-[14px] text-black sf-pro"
            mainClass="flex items-center justify-start space-x-3  "
          />
        </div>
      </div>
    </div>
  );
}
