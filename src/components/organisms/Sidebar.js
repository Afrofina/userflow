"use client";
import React, { useState } from "react";
import { Image, Text } from "../atoms";
import { TextIcon } from "../molecules";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      // className="bg-[#FEFBFF] shadow-md relative h-full flex flex-col "
      className={`bg-[#FEFBFF] shadow-md relative h-full flex flex-col transition-all duration-300 ${
        collapsed ? "w-[80px]" : "w-[130px]"
      }`}
    >
      <div className="border-r border-black pt-8">
        <Image
          src={"/logo-short.svg"}
          width={120}
          height={120}
          className={"mx-auto "}
        />
      </div>
      {/* collapse/expand side bar */}
      <div className="flex justify-end -mr-[9.5px] -mt-[1px] z-[99999] ">
        <Image
          src={"/sidebar/left.svg"}
          width={21}
          height={21}
          onClick={toggleSidebar}
          //   className="cursor-pointer transition-transform"
          className={`cursor-pointer transition-transform duration-300 ${
            collapsed ? "rotate-180" : ""
          }`}
        />
      </div>

      <div className="px-4 pt-2 border-r border-black flex-grow relative">
        {[
          {
            href: "/ecom/explore",
            text: "explore",
            icon: "/sidebar/explore.svg",
          },
          { href: "/ecom/shop", text: "shop", icon: "/sidebar/shop.svg" },
          {
            href: "/ecom/ship/u-cargo-agent",
            text: "ship",
            icon: "/sidebar/ship.svg",
          },
          {
            href: "/ecom/wallets",
            text: "wallets",
            icon: "/sidebar/wallet.svg",
          },
          {
            href: "/ecom/support",
            text: "support",
            icon: "/sidebar/support.svg",
          },
        ].map(({ href, text, icon }) => (
          <Link key={text} href={href}>
            <TextIcon
              iconClasses=""
              mainClass={`${
                pathname?.includes(href.split("/").pop() ?? "")
                  ? "bg-primary"
                  : ""
              } pb-1 mt-8 flex items-center space-x-1 px-2 py-2 rounded-full`}
              text={collapsed ? "" : text}
              textClass="text-black text-sm pl-1"
              textVariant="subtitle2"
              iconSrc={icon}
            />
          </Link>
        ))}

        {/* Bottom Links */}
        <div className="absolute bottom-0 pb-4">
          <Link href={"/ecom/settings"}>
            <TextIcon
              iconClasses=""
              mainClass={`${
                pathname?.includes("/settings") ? "bg-primary" : ""
              } pb-1 mt-8 flex items-center space-x-1 px-2 py-2 rounded-full`}
              text={collapsed ? "" : "Settings"}
              textClass="text-black text-sm"
              textVariant="subtitle2"
              iconSrc="/sidebar/settings.svg"
            />
          </Link>
          <Link href={"/ecom/auth/sign-in"}>
            <TextIcon
              iconClasses=""
              mainClass={`pb-1 mt-4 flex items-center space-x-1 px-2 py-2 rounded-full`}
              text={collapsed ? "" : "Logout"}
              textClass="text-black text-sm"
              textVariant="subtitle2"
              iconSrc="/sidebar/logout.svg"
            />
          </Link>
        </div>
      </div>
      {/* <div className="px-4 pt-2 border-r border-black flex-grow relative">
        <Link href={"/ecom/explore"}>
          <TextIcon
            iconClasses=""
            mainClass={`${
              pathname?.includes("/explore") ? "bg-primary" : ""
            } pb-1 mt-8 flex items-center space-x-1 px-2 py-2 rounded-full`}
            text="explore"
            textClass="text-black  text-sm pl-1"
            textVariant="subtitle2"
            iconSrc="/sidebar/explore.svg"
          />
        </Link>
        <Link href={"/ecom/shop"}>
          <TextIcon
            iconClasses=""
            mainClass={`${
              pathname?.includes("/shop") ? "bg-primary" : ""
            }  pb-1 mt-8 flex items-center space-x-1 px-2 py-2 rounded-full `}
            text="shop"
            textClass="text-black  text-sm pl-1"
            textVariant="subtitle2"
            iconSrc="/sidebar/shop.svg"
          />
        </Link>
        <Link href={"/ecom/ship/u-cargo-agent"}>
          <TextIcon
            iconClasses=""
            mainClass={`${
              pathname?.includes("/ship") ? "bg-primary" : ""
            } pb-1 mt-8 flex items-center space-x-1 px-2 py-2 rounded-full `}
            text="ship"
            textClass="text-black  text-sm pl-1"
            textVariant="subtitle2"
            iconSrc="/sidebar/ship.svg"
          />
        </Link>
        <Link href={"/ecom/wallets"}>
          <TextIcon
            iconClasses=""
            mainClass={`${
              pathname?.includes("/wallets") ? "bg-primary" : ""
            } pb-1 mt-8 flex items-center space-x-1 px-2 py-2 rounded-full `}
            text="wallets"
            textClass="text-black  text-sm pl-1"
            textVariant="subtitle2"
            iconSrc="/sidebar/wallet.svg"
          />
        </Link>
        <Link href={"/ecom/support"}>
          <TextIcon
            iconClasses="-mt-1"
            mainClass={`${
              pathname?.includes("/support") ? "bg-primary" : ""
            } pb-1 mt-8 flex items-center space-x-1 px-2 py-2 rounded-full`}
            text="support"
            textClass="text-black  text-sm"
            textVariant="subtitle2"
            iconSrc="/sidebar/support.svg"
          />
        </Link>
        <div className="absolute bottom-0 pb-4">
          <Link href={"/ecom/settings"}>
            <TextIcon
              iconClasses="-mt-1"
              mainClass={`${
                pathname?.includes("/settings") ? "bg-primary" : ""
              } pb-1 mt-8 flex items-center space-x-1 px-2 py-2 rounded-full`}
              text="Settings"
              textClass="text-black  text-sm"
              textVariant="subtitle2"
              iconSrc="/sidebar/settings.svg"
            />
          </Link>
          <Link href={"/ecom/auth/sign-in"}>
            <TextIcon
              iconClasses="-mt-1"
              mainClass={`${
                pathname === "/bank-accounts"
                  ? "font-medium border-b-2 border-white"
                  : ""
              } pb-1 mt-4 flex items-center space-x-1 px-2 py-2 rounded-full`}
              text="Logout"
              textClass="text-black  text-sm"
              textVariant="subtitle2"
              iconSrc="/sidebar/logout.svg"
            />
          </Link>
        </div>
      </div> */}
    </div>
  );
}
