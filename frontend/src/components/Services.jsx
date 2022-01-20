import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          專業發行NFT
          <br />
          確保不被科學家搶先
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          分享一下最近幾個案例
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-left">
        <ServiceCard
          color="bg-[#F84550]"
          title="專業諮詢服務"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="但要諮詢費"
        />
        <ServiceCard
        color="bg-[#8945F8]"
        title="媒合藝術家"
        icon={<BiSearchAlt fontSize={21} className="text-white" />}
        subtitle="互利互惠"
        />
        <ServiceCard
          color="bg-[#2952E3]"
          title="確保安全"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="陳零九、江振誠等人NFT出大包"
        />
      </div>
    </div>
  </div>
);

export default Services;
