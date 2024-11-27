"use client"

import React, { useState } from "react";
import Image from "next/image";
import cancel from "../../public/cancel.svg";
import usdt from "../../public/usdt.svg";
import usdc from "../../public/usdc.svg";
import checked from "../../public/checked.svg";
import unchecked from "../../public/unchecked.svg";

export function SelectBaseToken() {
  const [active, setActive] = useState<"USDT" | "USDC">("USDT");

  return (
    <div className="flex relative justify-center items-center mt-10 h-screen w-full px-4">
      <div className="w-full h-[138px] bg-main-bg bg-cover absolute top-0"></div>

      <div className="flex relative justify-center items-center rounded-3xl border border-[#170F2E] text-center w-full max-w-[50rem] flex-col p-6 mx-4">
        
        <div className="flex justify-center text-center items-center relative w-full mt-4 mb-6">
          <h1 className="text-[20px] sm:text-[24px] flex-wrap font-medium text-white">
            Select a base token to auto-swap to
          </h1>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
            <Image
              className="cursor-pointer w-6 h-6"
              src={cancel}
              alt="cancel image"
              width={24}
              height={24}
            />
          </div>
        </div>

        <p className="text-sm sm:text-base text-[#A199B8] mb-8 max-w-md text-center">
          You can change the base token in the settings and you can toggle on/off auto-swapper for any token you&apos;ve selected.
        </p>

        <div className="flex flex-row justify-center items-center gap-8 sm:gap-12 md:gap-20 w-full mt-4 mb-8">

          <div
            onClick={() => setActive("USDT")}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-3">
              <Image
                src={usdt}
                alt="USDT"
                width={140}
                height={140}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-lg sm:text-xl font-medium text-white mb-1">Tether</p>
            <p className="text-sm text-[#A199B8] mb-3">USDT</p>
            <div className="transition-transform duration-200 group-hover:scale-110">
              <Image 
                src={active === "USDT" ? checked : unchecked} 
                alt="selection indicator" 
                width={24} 
                height={24}
              />
            </div>
          </div>

          <div
            onClick={() => setActive("USDC")}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-3">
              <Image
                src={usdc}
                alt="USDC"
                width={140}
                height={140}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-lg sm:text-xl font-medium text-white mb-1">USD Coin</p>
            <p className="text-sm text-[#A199B8] mb-3">USDC</p>
            <div className="transition-transform duration-200 group-hover:scale-110">
              <Image 
                src={active === "USDC" ? checked : unchecked} 
                alt="selection indicator" 
                width={24} 
                height={24}
              />
            </div>
          </div>
        </div>

        <button className="w-full py-4 sm:py-5 my-5 bg-[#100827] rounded-full text-white font-medium hover:bg-[#1a0f35] transition-colors duration-200">
          Next
        </button>
      </div>
      <div className="w-full h-[138px] bg-main-bg bg-cover absolute bottom-0 transform rotate-180"></div>
    </div>
  );
}