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
    <div className="bg-white shadow-sm mt-8 fixed bottom-0 left-0 w-full">
      <Separator />
      <div className="flex items-center justify-between p-6">
        <div className="grid grid-cols-2 md:flex gap-1 md:gap-5 my-2">
          {navItems.map((items) => (
            <div key={items.name}>
              <h1 className="flex gap-4 text-muted-foreground text-sm">
                {items.name}
                <span className="border-r" />
              </h1>
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
