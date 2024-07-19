"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import LogoIcon from "assets/logo.svg";
import HomeIcon from "assets/icons/Home.svg";
import GroupIcon from "assets/icons/Group.svg";
import CalendarIcon from "assets/icons/Calendar.svg";
import ChatBubbleIcon from "assets/icons/ChatBubble.svg";
import CreditCardIcon from "assets/icons/CreditCard.svg";
import SettingsIcon from "assets/icons/Settings.svg";
import MoreVerticalIcon from "assets/icons/MoreVertical.svg";

import SeniorWomanDoctorImagePNG from "assets/senior-woman-doctor-and-portrait-smile-for-health.png";

import { Card } from "@/app/components/Card";

import { Button } from "../Button";

type Tab = {
  icon: any;
  name: string;
  link: string;
};

const Tabs: Tab[] = [
  {
    icon: HomeIcon,
    name: "Overview",
    link: "/",
  },
  {
    icon: GroupIcon,
    name: "Patients",
    link: "/patients",
  },
  {
    icon: CalendarIcon,
    name: "Schedule",
    link: "/schedules",
  },
  {
    icon: ChatBubbleIcon,
    name: "Message",
    link: "/messages",
  },
  {
    icon: CreditCardIcon,
    name: "Transactions",
    link: "/transactions",
  },
];

export function Header() {
  return (
    <Card className="px-8 py-3 rounded-full mb-8 flex flex-row justify-between">
      <Image
        src={LogoIcon}
        alt="Logo"
        width="0"
        height="0"
        className="w-auto h-[48px]"
        priority
      />

      <div className="flex flex-row gap-10">
        {Tabs.map((tab, index) => (
          <TabElement key={index} {...tab} />
        ))}
      </div>

      <PhysicianDetails />
    </Card>
  );
}

const TabElement = ({ icon, link, name }: Tab) => {
  const pathname = usePathname();

  return (
    <Link href={link}>
      <Button
        variant={pathname === link ? "default" : "text"}
        className={"flex flex-row items-center rounded-[41px]"}
      >
        <Image src={icon} alt={`${name} Page Icon`} height={17} />
        <span>{name}</span>
      </Button>
    </Link>
  );
};

const PhysicianDetails = () => {
  return (
    <div className="flex gap-3 ">
      <div className="flex gap-2">
        <Image
          src={SeniorWomanDoctorImagePNG}
          alt="Physician Image"
          width="0"
          height="0"
          className="w-auto size-[44px]"
        />
        <div className="flex flex-col gap-1 text-sm text-black">
          <span className="font-bold">Dr. Jose Simmons</span>
          <span className="text-gray-dark">General Practitioner</span>
        </div>
      </div>

      <div className="border-[1px] border-[#EDEDED]"></div>

      <div className="flex gap-3">
        <button>
          <Image src={SettingsIcon} alt="Settings icon" />
        </button>
        <button>
          <Image src={MoreVerticalIcon} alt="More physician details icon" />
        </button>
      </div>
    </div>
  );
};
