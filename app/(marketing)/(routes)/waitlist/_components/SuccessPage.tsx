"use client";
import Image from "next/image";
import { Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const SuccessPage = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 15000); // Redirect after 5 seconds

    const countdownTimer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownTimer);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center gap-6 my-16">
      <div>
        <Image
          src="/waitlisticons/success.svg"
          width={400}
          height={326}
          alt="header"
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className=" text-2xl md:text-4xl text-center text-gray-700 font-semibold max-w-sm">
          Thank you for joining the waitlist
        </h1>
        <p className="text-muted-foreground md:text-lg  max-w-sm text-center">
          Keep an eye on your mail. We will notify you as soon as we launch!
        </p>
      </div>
      <div className="flex flex-col items-center  gap-4">
        <Link href="/">
          <Button
            className="bg-[#007A86] rounded-full inline-flex items-center gap-3"
            size="lg"
          >
            <Undo2 />
            Return Home
          </Button>
        </Link>
        <p className=" text-xs md:text-sm text-muted-foreground">{`This page will automatically redirect in ${countdown} seconds.`}</p>
      </div>
    </div>
  );
};

export default SuccessPage;
