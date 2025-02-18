
import Input from "@/components/atoms/Input";
import { Text,Image } from "@/components/atoms";
import { HeaderLanding } from "@/components/organisms";
import { PageOrgOne, PageOrgTwo, PageOrgThree, PageOrgFour, PageOrgFive, PageOrgSix, PageOrgSeven, PageOrgEight, PageOrgNine, FaqLanding, PageOrgTen,FooterLanding } from "@/components/organisms";
export default function Home() {
  return (
    <div className="bg-light-gray h-screen overflow-auto ">

      <HeaderLanding />
      <div className="">
        <PageOrgOne />
        <div className="lg:p-5 p-0">
        <PageOrgTwo />
        <PageOrgThree />
        </div>
        <PageOrgFour />
        <PageOrgFive />
        <PageOrgSix />
        <PageOrgSeven />
        <PageOrgEight />
        <PageOrgNine />
        <FaqLanding />
        <PageOrgTen />
        <div className="flex justify-center py-12">
          <Image src={'/landing/logo.svg'} width={800}/>
        </div>
        <FooterLanding/>

        <Text className="text-black !text-[18px]  sf-pro pt-8 pb-6" align="center">
                All rights reserved | Afrofina  2023
            </Text>
      </div>
    </div>
  );
}
