import { Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaDiscord, FaGithub, FaX, FaXTwitter } from "react-icons/fa6";

interface TeamCardProps {
  img: string;
  role: string;
  name: string;
}
const TeamCard = ({ img, role, name }: TeamCardProps) => {
  return (
    <div className="flex flex-col gap-3 ">
      <div>
        <Image
          className="w-full rounded-sm "
          src={img}
          alt="team member"
          width={126}
          height={100}
        />
      </div>
      <div className="flex items-center gap-4">
        <h1 className="text-muted-foreground">{role}</h1>
        <h1 className="text-sm text-muted-foreground font-semibold">{name}</h1>
      </div>
      <div className="flex items-center text-muted-foreground gap-4">
        <FaXTwitter />
        <FaGithub />
        <FaDiscord />
      </div>
    </div>
  );
};

export default TeamCard;
