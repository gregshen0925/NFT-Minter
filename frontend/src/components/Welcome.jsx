import React, { useContext, useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { MintContext } from "../context/MintContext";
const CommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const mintNFT = () =>{

}
const Welcome = () => {

  const { currentAccount, connectWallet} = useContext(MintContext);


  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Mint Your NFT
          </h1>
          {currentAccount && (
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <p className="text-white text-base font-semibold">
              Connected:
              {currentAccount}
              </p>
            </button>
          )}
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                連結錢包
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${CommonStyles}`}>
              D
            </div>
            <div className={CommonStyles}>
              E
            </div>
            <div className={`sm:rounded-tr-2xl ${CommonStyles}`}>
              F
            </div>
            <div className={`sm:rounded-bl-2xl ${CommonStyles}`}>
              A
            </div>
            <div className={CommonStyles}>
              B
            </div>
            <div className={`rounded-br-2xl ${CommonStyles}`}>
              C
            </div>
          </div>
        </div>
        
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <button
              type="button"
              onClick={mintNFT("https://gateway.pinata.cloud/ipfs/QmRNkxHiyAM4sL6UR1eT5wcE1fx45pVSAu69o8Q2NVLfde")}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <p className="text-white text-base font-semibold">
                mint
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
