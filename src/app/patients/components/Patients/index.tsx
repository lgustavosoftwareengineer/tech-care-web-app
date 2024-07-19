"use client";

import Image from "next/image";
import { PropsWithChildren, useEffect } from "react";
import { twMerge } from "tailwind-merge";

import MoreHorizontalIcon from "assets/icons/MoreHorizontal.svg";
import SearchIcon from "assets/icons/Search.svg";

import { Loading, Card } from "@/app/components";

import { usePatient, usePatientChart } from "@/app/patients/hooks";
import { Patient } from "@/app/types";

type PatientsProps = {
  patients: Patient[];
};

export function Patients({ patients }: PatientsProps) {
  return (
    <Card className="rounded-2xl py-5 text-black">
      <div className="flex justify-between items-start px-5">
        <h2 className="text-2xl font-extrabold mb-10">Patients</h2>
        <button className="mt-2">
          <Image src={SearchIcon} height={18} alt="Search Icon" />
        </button>
      </div>
      <PatientsList patients={patients} />
    </Card>
  );
}

type PatientsListProps = {
  patients: Patient[];
};

const PatientsList = ({ patients }: PatientsListProps) => {
  const { currentPatient, setCurrentPatient } = usePatient();

  useEffect(() => {
    if (!currentPatient.name && patients) {
      setCurrentPatient(patients[0]);
      return;
    }
  }, [currentPatient, patients, setCurrentPatient]);

  if (!patients.length) {
    return (
      <ListContainer className="justify-center items-center">
        <Loading />
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      {patients.map((patient) => (
        <PatientElement key={patient.name} {...patient} />
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
        "flex flex-col overflow-y-auto h-[800px] mr-1",
        className
      )}
    >
      {children}
    </ul>
  );
};

const PatientElement = (patient: Patient) => {
  const { currentPatient, setCurrentPatient } = usePatient();
  const { setSelectedYear } = usePatientChart();

  const isPatientSelected = patient.name === currentPatient.name;

  const onSetCurrentPatient = (patient: Patient) => {
    return () => {
      setCurrentPatient(patient);
      setSelectedYear(undefined);
    };
  };

  return (
    <li
      className={twMerge(
        "flex justify-between items-center px-5 py-4 hover:cursor-pointer",
        isPatientSelected && "bg-primary-light"
      )}
      onClick={onSetCurrentPatient(patient)}
    >
      <div className="flex gap-3">
        <Image
          src={patient.profile_picture}
          height={48}
          width={48}
          alt="Patient profile picture"
          className="rounded-full"
        />
        <div className="flex flex-col gap-1 text-sm">
          <span className="font-bold">{patient.name}</span>
          <span className="text-gray-dark">
            {patient.gender}, {patient.age}
          </span>
        </div>
      </div>
      <button>
        <Image src={MoreHorizontalIcon} alt="More user data button" />
      </button>
    </li>
  );
};
