"use client";

import Image from "next/image";

import LogoIcon from "assets/logo.svg";
import HomeIcon from "assets/icons/Home.svg";
import GroupIcon from "assets/icons/Group.svg";
import CalendarIcon from "assets/icons/Calendar.svg";
import ChatBubbleIcon from "assets/icons/ChatBubble.svg";
import CreditCardIcon from "assets/icons/CreditCard.svg";

import { Card } from "@/app/components/Card";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
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
  const pathname = usePathname();

  return (
    <Card className="px-8 py-3 rounded-full mb-8 flex flex-row justify-between">
      <Image src={LogoIcon} alt="Logo" />

      <div className="flex flex-row gap-10">
        {Tabs.map(({ icon, link, name }, index) => (
          <Link href={link} key={index}>
            <Button
              variant={pathname === link ? "default" : "text"}
              className={"flex flex-row items-center rounded-[41px]"}
            >
              <Image src={icon} alt={`${name} Page Icon`} height={17} />
              <span>{name}</span>
            </Button>
          </Link>
        ))}
      </div>

      <div></div>
    </Card>
  );
}
