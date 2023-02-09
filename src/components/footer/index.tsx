import React from "react";
import Logo from "@/assets/Logo.png";
import FB from "@/assets/fb.png";
import IG from "@/assets/ig.png";
import YT from "@/assets/yt.png";
import TW from "@/assets/tw.png";
import IN from "@/assets/in.png";
import VISA from "@/assets/Visa.png";
import MASTERCARD from "@/assets/Mastercard.png";
import BTC from "@/assets/Bitcoin2.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";
import Link from "../navBar/Link";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const quickLinks: Array<string> = [
  "Home",
  "Products",
  "About",
  "Features",
  "Contact",
];

const Footer = ({ setSelectedPage, selectedPage }: Props) => {
  return (
    <section id='contact' className="flex w-full items-center justify-center bg-primary-500 py-10">
      {/* SECTIONS */}
      <div className="flex w-5/6 flex-col justify-between">
        <div className="flex flex-col justify-between md:pb-32 md:flex-row space-y-12 md:space-y-12">
          <div className="md:mt-12 md:w-80">
            <img src={Logo} alt="logo" />
          </div>
          <div className="flex md:w-80 flex-col">
            <h1 className="mb-4 text-xl font-medium text-white">Quick Link</h1>

            {quickLinks?.map((link, index) => (
                <div key={index} className="text-md  py-2 text-[#f2f2f2] hover:cursor-pointer">
                <Link
                  page={link}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            ))}
          </div>

          <div className="flex md:w-80 flex-col">
            <h1 className="mb-4 text-xl font-medium text-white">Resources</h1>
            <p className="text-md  py-2 text-[#f2f2f2] hover:cursor-pointer">
              Download Whitepapper
            </p>
            <p className="text-md  py-2 text-[#f2f2f2] hover:cursor-pointer">
              Smart Token
            </p>
            <p className="text-md  py-2 text-[#f2f2f2] hover:cursor-pointer">
              Blockchain Explorer
            </p>
            <p className="text-md  py-2 text-[#f2f2f2] hover:cursor-pointer">
              Crypto API
            </p>
            <p className="text-md  py-2 text-[#f2f2f2] hover:cursor-pointer">
              Interest
            </p>
          </div>

          <div className="flex md:w-96 space-y-8 flex-col md:justify-around pb-8">
            <h1 className="font-md flex text-3xl md:text-4xl text-white">
              We accept following payment systems
            </h1>
            <div className="flex items-center justify-between">
              <img src={VISA} alt="visa" />
              <img src={MASTERCARD} alt="mastercard" />
              <img src={BTC} alt="btc" />
            </div>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="flex space-y-4 md:flex-row flex-col items-center justify-between">
          <div className="text-md flex items-center justify-center  text-white">
            ©2023. All rights reserved
          </div>

          <div className="flex items-center justify-between space-x-4 md:space-x-6">
            <img src={FB} alt="fbLogo" className="hover:cursor-pointer" />
            <img src={IG} alt="igLogo" className="hover:cursor-pointer" />
            <img src={YT} alt="ytLogo" className="hover:cursor-pointer" />
            <img src={TW} alt="twLogo" className="hover:cursor-pointer" />
            <img src={IN} alt="inLogo" className="hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
