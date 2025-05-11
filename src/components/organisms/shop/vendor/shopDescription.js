import React from "react";
import { TextIcon } from "@/components/molecules";
export default function shopDescription() {
  return (
    <div className="p-2 bg-[#FFEF8B] rounded-md w-full">
      <div
        className="rounded-md !h-[175px]"
        style={{
          backgroundImage: `url('/shop/shop.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
        }}
      ></div>
      <div className="flex justify-between items-center pt-4 pb-3">
        <TextIcon
          iconSrc="/shop/product/store.svg"
          text={"African Retreat"}
          iconWidth={17}
          textClass="!text-[11.74px] text-black custom-font !tracking-widest"
          mainClass="flex items-center space-x-2  "
        />
        <TextIcon
          iconSrc="/shop/product/dot.svg"
          text="Verified"
          iconWidth={5}
          textClass="!text-[11px] text-[#039600] sf-pro "
          mainClass="flex items-center space-x-[3px]"
        />
      </div>
      <div className="bg-black flex justify-between rounded-md px-2 py-3">
        <TextIcon
          iconSrc="/vendor/products.svg"
          text={"Products:   60"}
          iconWidth={17}
          textClass="!text-[11.74px] text-primary sf-pro"
          mainClass="flex items-center space-x-2  "
        />
        <TextIcon
          iconSrc="/vendor/ratings.svg"
          text={"Ratings:   4.9"}
          iconWidth={17}
          textClass="!text-[11.74px] text-primary sf-pro "
          mainClass="flex items-center space-x-2 "
        />
      </div>
    </div>
  );
}
