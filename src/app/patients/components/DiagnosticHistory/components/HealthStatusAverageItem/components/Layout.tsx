import Image from "next/image";

import { twMerge } from "tailwind-merge";

type LayoutProps = {
  title: string;
  icon: any;
  arrowIcon: any;
  label: string;
  value: string;
  className: string;
};
export const Layout = ({
  arrowIcon,
  icon,
  label,
  title,
  value,
  className,
}: LayoutProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-4 text-black p-4 rounded-xl ",
        className
      )}
    >
      <Image src={icon} alt="Icon" sizes="96px" />
      <div>
        <p className="text-base">{title}</p>
        <p className="text-3xl font-extrabold">{value}</p>
      </div>
      <div className="flex gap-2 ">
        {arrowIcon && <Image src={arrowIcon} alt="Arrow icon" height={5} />}
        <p className="text-sm">{label}</p>
      </div>
    </div>
  );
};
