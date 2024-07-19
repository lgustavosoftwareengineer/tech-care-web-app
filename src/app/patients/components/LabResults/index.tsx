"use client";

import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

import { Loading } from "@/app/components";
import { Card } from "@/app/components/Card";
import { usePatient } from "@/app/patients/hooks";

import DownloadIcon from "assets/icons/Download.svg";

export function LabResults() {
  const { currentPatient } = usePatient();
  const { lab_results } = currentPatient;

  return (
    <Card className="rounded-2xl p-5">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-extrabold mb-4">Lab Results</h2>
      </div>
      <LabsResultsList labResults={lab_results} />
    </Card>
  );
}

type LabsResultsListProps = {
  labResults: string[];
};

const LabsResultsList = ({ labResults }: LabsResultsListProps) => {
  if (!labResults.length) {
    return (
      <ListContainer className="justify-center items-center">
        <Loading />
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      {labResults.map((labResult) => (
        <LabResultElement key={labResult} value={labResult} />
      ))}
    </ListContainer>
  );
};

const ListContainer = ({
  children,
  className,
}: PropsWithChildren<{
  className?: string;
}>) => {
  return (
    <ul
      className={twMerge(
        "flex flex-col gap-[5px] overflow-y-auto h-[296px] mr-1",
        className
      )}
    >
      {children}
    </ul>
  );
};

type LabResultElementProps = { value: string };
const LabResultElement = ({ value }: LabResultElementProps) => {
  return (
    <div
      className={twMerge(
        "flex justify-between items-center pb-[11px] mr-1 pt-[10px] px-4 hover:cursor-pointer text-sm hover:bg-gray-light"
      )}
    >
      <p>{value}</p>
      <button>
        <Image src={DownloadIcon} height={20} width={20} alt="Download icon" />
      </button>
    </div>
  );
};
