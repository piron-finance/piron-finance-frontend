import Image from "next/image";
import React from "react";
import { footerLinks } from "../constants/dummy";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsDiscord, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#007A86] p-4">
      <div className="flex items-center justify-around my-4 lg:my-12 mx-6">
        <div className="hidden md:block">
          <Image
            className="w-full"
            src="/footer62.svg"
            alt="logo"
            width={241}
            height={100}
          />
        </div>

        <div className="grid grid-cols-2  lg:grid-cols-4 gap-16">
          {footerLinks.map((item, index) => (
            <div key={index}>
              <h1 className="text-xl text-white font-semibold">{item.title}</h1>
              <ul className="flex flex-col gap-2 mt-3">
                {item.links.map((link, index) => (
                  <li
                    key={index}
                    className="text-white font-light text-sm hover:cursor-pointer hover:text-muted-foreground "
                  >
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex lg:mx-24  border-t border-[#54A6AE]">
        <div className="flex gap-12 my-5">
          <h3 className="text-base lg:text-lg text-white font-light">
            © {new Date().getFullYear()} Piron. All rights reserved.
          </h3>

          <span className="flex gap-8">
            <FaSquareXTwitter className="text-white text-2xl hover:text-black hover:cursor-pointer" />
            <BsGithub className="text-white text-2xl hover:text-black hover:cursor-pointer" />
            <BsDiscord className="text-white text-2xl hover:text-blue-700 hover:cursor-pointer" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
