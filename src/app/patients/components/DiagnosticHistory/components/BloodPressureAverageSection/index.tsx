import {
  useFetchPatients,
  usePatient,
  usePatientAverages,
  usePatientsAverages,
} from "@/app/patients/hooks";
import ArrowDownIcon from "assets/icons/ArrowDown.svg";
import ArrowUpIcon from "assets/icons/ArrowUp.svg";
import { twJoin } from "tailwind-merge";

import { useMemo } from "react";
import Image from "next/image";
import { Patient } from "@/app/types";

export function BloodPressureAverageSection() {
  return (
    <div className="flex flex-col gap-4">
      <BloodPressureAverageItem type="systolic" />
      <div className="border-b border-[#CBC8D4]" />
      <BloodPressureAverageItem type="diastolic" />
    </div>
  );
}

type BloodPressureAverageItem = {
  type: "systolic" | "diastolic";
};
const BloodPressureAverageItem = ({ type }: BloodPressureAverageItem) => {
  const { currentPatient } = usePatient();
  const { patients } = useFetchPatients();

  const patientsAverages = usePatientsAverages(patients);
  const patientAverage = usePatientAverages(currentPatient);

  const colors: Record<BloodPressureAverageItem["type"], string> = {
    diastolic: "bg-purple-dark",
    systolic: "bg-pink-dark",
  };

  const isPatientAvgDiastolicBiggerThanAverage =
    patientAverage.avgDiastolic > patientsAverages.avgDiastolic;
  const isPatientAvgSystolicBiggerThanAverage =
    patientAverage.avgSystolic > patientsAverages.avgSystolic;

  const value = useMemo(() => {
    if (type === "diastolic") {
      return patientAverage.avgDiastolic;
    }

    if (type === "systolic") {
      return patientAverage.avgSystolic;
    }
  }, [patientAverage.avgDiastolic, patientAverage.avgSystolic, type]);

  const label = useMemo(() => {
    if (type === "diastolic") {
      if (isPatientAvgDiastolicBiggerThanAverage) {
        return "Higher than Average";
      } else if (
        patientAverage.avgDiastolic === patientsAverages.avgDiastolic
      ) {
        return "Normal";
      }
      return "Lower than Average";
    }

    if (type === "systolic") {
      if (isPatientAvgSystolicBiggerThanAverage) {
        return "Higher than Average";
      } else if (patientAverage.avgSystolic === patientsAverages.avgSystolic) {
        return "Normal";
      }
      return "Lower than Average";
    }
  }, [
    isPatientAvgDiastolicBiggerThanAverage,
    isPatientAvgSystolicBiggerThanAverage,
    patientAverage.avgDiastolic,
    patientAverage.avgSystolic,
    patientsAverages.avgDiastolic,
    patientsAverages.avgSystolic,
    type,
  ]);

  const ArrowIcon = useMemo(() => {
    if (type === "diastolic") {
      if (isPatientAvgDiastolicBiggerThanAverage) {
        return ArrowUpIcon;
      } else if (
        patientAverage.avgDiastolic === patientsAverages.avgDiastolic
      ) {
        return null;
      }
      return ArrowDownIcon;
    }

    if (type === "systolic") {
      if (isPatientAvgSystolicBiggerThanAverage) {
        return ArrowUpIcon;
      } else if (patientAverage.avgSystolic === patientsAverages.avgSystolic) {
        return null;
      }
      return ArrowDownIcon;
    }
  }, [
    isPatientAvgDiastolicBiggerThanAverage,
    isPatientAvgSystolicBiggerThanAverage,
    patientAverage.avgDiastolic,
    patientAverage.avgSystolic,
    patientsAverages.avgDiastolic,
    patientsAverages.avgSystolic,
    type,
  ]);

  return (
    <div className="flex flex-col gap-2 text-black">
      <div className="flex flex-row items-center gap-1">
        <span
          className={twJoin("rounded-full size-[14px]", colors[type])}
        ></span>
        <span className="font-bold text-sm">Systolic</span>
      </div>
      <p className="font-bold text-2xl">{value}</p>
      <div className="flex gap-2 ">
        {ArrowIcon && (
          <Image src={ArrowIcon} alt="arrow down icon" height={5} />
        )}
        <p className="text-sm">{label}</p>
      </div>
    </div>
  );
};
