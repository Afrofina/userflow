"use client";
import React, { useState } from "react";
import { MainLayout } from "@/components/layouts";
import {
  DeliveryDetailsOverview,
  OrderSummary,
  ProcessingPayment,
  PaymentConfirmed,
  QrCodeUsdt,
} from "@/components/organisms";
export default function Overview() {
  const [isPay, setIsPay] = useState(false);
  return (
    <MainLayout pageTitle={"order review"}>
      <div className="relative h-full">
        {isPay ? (
          <div className="absolute h-full  top-0 w-full  transition-opacity duration-1000 ease-in-out">
            <div
              className="w-full h-full"
              style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
            >
              <div className="grid grid-cols-12 h-full">
                <div
                  className="lg:col-span-7 col-span-12 h-full lg:block hidden cursor-pointer"
                  onClick={() => setIsPay(false)}
                ></div>
                <div className="lg:col-span-5 col-span-12 lg:px-8 px-3 pt-12 h-full bg-white lg:rounded-l-xl rounded-l-0">
                  <ProcessingPayment />
                  <PaymentConfirmed />
                  <QrCodeUsdt />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="grid grid-cols-12 h-full lg:overflow-visible overflow-auto">
          <div className="lg:col-span-7 col-span-12 lg:px-16 px-3 lg:pt-12 pt-3 lg:border-r border-r-0 border-black h-full pb-6 lg:overflow-auto overflow-visible">
            <DeliveryDetailsOverview isNote={true} />
          </div>
          <div className="lg:col-span-5 col-span-12 lg:px-8 px-3 pt-12 h-full lg:overflow-auto overflow-visible">
            <OrderSummary handleClick={() => setIsPay(true)} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
