import Image from "next/image";

import { twMerge } from "tailwind-merge";
import { BloodPressureAverageTypes } from "../types";

type LayoutProps = {
  arrowIcon: any;
  label: string;
  className: string;
  type: BloodPressureAverageTypes;
  value: number;
};
export const Layout = ({
  arrowIcon,
  label,
  className,
  type,
  value,
}: LayoutProps) => {
  return (
    <div className="flex flex-col gap-2 text-black">
      <div className="flex flex-row items-center gap-1">
        <span className={twMerge("rounded-full size-[14px]", className)}></span>
        <span className="font-bold text-sm capitalize">{type}</span>
      </div>
      <p className="font-bold text-2xl">{value}</p>
      <div className="flex gap-2 ">
        {arrowIcon && <Image src={arrowIcon} alt="arrow icon" height={5} />}
        <p className="text-sm">{label}</p>
      </div>
    </div>
  );
};
