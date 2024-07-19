"use client";

import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import { Loading } from "@/app/components";
import { Card } from "@/app/components/Card";
import { usePatient } from "@/app/patients/hooks";

import { Diagnostic } from "@/app/types";

export function DiagnosticList() {
  const { currentPatient } = usePatient();
  const { diagnostic_list } = currentPatient;

  return (
    <Card className="rounded-2xl p-5">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-extrabold mb-10">Diagnostic List</h2>
      </div>
      <DiagnosticListComponent diagnosticList={diagnostic_list} />
    </Card>
  );
}

type DiagnosticListComponentProps = {
  diagnosticList: Diagnostic[];
};

const DiagnosticListComponent = ({
  diagnosticList,
}: DiagnosticListComponentProps) => {
  if (!diagnosticList.length) {
    return (
      <ListContainer className="flex flex-col justify-center items-center">
        <Loading />
      </ListContainer>
    );
  }

  return (
    <div className="grid grid-cols-3">
      <ListHeader />
      <ListContainer>
        {diagnosticList.map((diagnostic, index) => (
          <DiagnosticListItem key={index} {...diagnostic} />
        ))}
      </ListContainer>
    </div>
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
        "grid grid-cols-subgrid col-span-3 overflow-y-scroll mr-1 max-h-[200px]",
        className
      )}
    >
      {children}
    </ul>
  );
};

const DiagnosticListItem = ({ description, name, status }: Diagnostic) => {
  return (
    <div
      className={twMerge(
        "grid grid-cols-subgrid gap-6 col-span-3 p-4 mr-1 text-sm hover:bg-gray-light border-b-2 border-gray-light hover:cursor-pointer"
      )}
    >
      <span>{name}</span>
      <span>{description}</span>
      <span>{status}</span>
    </div>
  );
};

const ListHeader = () => {
  return (
    <div
      className={twMerge(
        "col-span-3 grid gap-6 mb-3 grid-cols-subgrid p-4 text-sm font-bold bg-gray-light rounded-3xl"
      )}
    >
      <span>Problem/Diagnosis</span>
      <span>Description</span>
      <span>Status</span>
    </div>
  );
};
