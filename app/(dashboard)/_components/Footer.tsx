import { Separator } from "@/components/ui/separator";
import React from "react";
import { FaDiscord, FaGithub, FaX, FaXTwitter } from "react-icons/fa6";

const navItems = [
  {
    name: "Privacy",
    href: "",
  },
  {
    name: "Terms",
    href: "",
  },
  {
    name: "Feedback",
    href: "",
  },
  {
    name: "Docs",
    href: "",
  },
  {
    name: "FAQs",
    href: "",
  },
];

const Footer = () => {
  return (
    <div className="">
      <Separator />
      <div className="flex items-center justify-between  p-6">
        <div className="grid grid-cols-2 md:flex gap-1 md:gap-5 my-2">
          {navItems.map((items, index) => (
            <div key={items.name}>
              <h1 className="text-muted-foreground text-sm">{items.name}</h1>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-8 text-muted-foreground">
          <FaXTwitter />
          <FaGithub />
          <FaDiscord />
        </div>
      </div>
    </div>
  );
};

export default Footer;
