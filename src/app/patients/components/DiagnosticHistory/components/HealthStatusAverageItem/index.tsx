import { useMemo } from "react";
import { twJoin } from "tailwind-merge";

import Image from "next/image";

import {
  useFetchPatients,
  usePatient,
  usePatientAverages,
  usePatientsAverages,
} from "@/app/patients/hooks";

import ArrowDownIcon from "assets/icons/ArrowDown.svg";
import ArrowUpIcon from "assets/icons/ArrowUp.svg";
import RespiratoryRateIcon from "assets/icons/RespiratoryRate.svg";
import TemperatureRateIcon from "assets/icons/TemperatureRate.svg";
import HeartBPMIcon from "assets/icons/HeartBPM.svg";

type HealthStatusAverageItemProps = {
  type: "heart_rate" | "respiratory_rate" | "temperature";
};
export const HealthStatusAverageItem = ({
  type,
}: HealthStatusAverageItemProps) => {
  const { currentPatient } = usePatient();
  const { patients } = useFetchPatients();

  const patientsAverages = usePatientsAverages(patients);
  const patientAverage = usePatientAverages(currentPatient);

  const color: Record<HealthStatusAverageItemProps["type"], string> = {
    heart_rate: "bg-pink-light",
    respiratory_rate: "bg-blue",
    temperature: "bg-pink-medium",
  };

  const icon: Record<HealthStatusAverageItemProps["type"], any> = {
    heart_rate: HeartBPMIcon,
    respiratory_rate: RespiratoryRateIcon,
    temperature: TemperatureRateIcon,
  };

  const title: Record<HealthStatusAverageItemProps["type"], string> = {
    heart_rate: "Heart Rate",
    respiratory_rate: "Respiratory Rate",
    temperature: "Temperature",
  };

  const isPatientAvgHeartRateBiggerThanAverage =
    patientAverage.avgHeartRate > patientsAverages.avgHeartRate;
  const isPatientAvgHeartRateLowerThanAverage =
    patientAverage.avgHeartRate < patientsAverages.avgHeartRate;

  const isPatientAvgTemperatureRateBiggerThanAverage =
    patientAverage.avgTemperature > patientsAverages.avgTemperature;
  const isPatientAvgTemperatureRateLowerThanAverage =
    patientAverage.avgTemperature < patientsAverages.avgTemperature;

  const isPatientAvgRespiratoryRateBiggerThanAverage =
    patientAverage.avgRespiratoryRate > patientsAverages.avgRespiratoryRate;
  const isPatientAvgRespiratoryRateLowerThanAverage =
    patientAverage.avgRespiratoryRate < patientsAverages.avgRespiratoryRate;

  const value = useMemo(() => {
    if (type === "heart_rate") {
      return `${patientAverage.avgHeartRate} bpm`;
    }
    if (type === "temperature") {
      return `${patientAverage.avgTemperature}°F`;
    }
    if (type === "respiratory_rate") {
      return `${patientAverage.avgRespiratoryRate} bpm`;
    }
  }, [patientAverage, type]);

  const label = useMemo(() => {
    if (type === "heart_rate") {
      if (isPatientAvgHeartRateBiggerThanAverage) {
        return "Higher than Average";
      }
      if (isPatientAvgHeartRateLowerThanAverage) {
        return "Lower than Average";
      }
      return "Normal";
    }

    if (type === "temperature") {
      if (isPatientAvgTemperatureRateBiggerThanAverage) {
        return "Higher than Average";
      }
      if (isPatientAvgTemperatureRateLowerThanAverage) {
        return "Lower than Average";
      }
      return "Normal";
    }

    if (type === "respiratory_rate") {
      if (isPatientAvgRespiratoryRateBiggerThanAverage) {
        return "Higher than Average";
      }
      if (isPatientAvgRespiratoryRateLowerThanAverage) {
        return "Lower than Average";
      }
      return "Normal";
    }
  }, [
    isPatientAvgHeartRateBiggerThanAverage,
    isPatientAvgHeartRateLowerThanAverage,
    isPatientAvgRespiratoryRateBiggerThanAverage,
    isPatientAvgRespiratoryRateLowerThanAverage,
    isPatientAvgTemperatureRateBiggerThanAverage,
    isPatientAvgTemperatureRateLowerThanAverage,
    type,
  ]);

  const ArrowIcon = useMemo(() => {
    if (type === "heart_rate") {
      if (isPatientAvgHeartRateBiggerThanAverage) {
        return ArrowUpIcon;
      }
      if (isPatientAvgHeartRateLowerThanAverage) {
        return ArrowDownIcon;
      }
      return null;
    }

    if (type === "temperature") {
      if (isPatientAvgTemperatureRateBiggerThanAverage) {
        return ArrowUpIcon;
      }
      if (isPatientAvgTemperatureRateLowerThanAverage) {
        return ArrowDownIcon;
      }
      return null;
    }

    if (type === "respiratory_rate") {
      if (isPatientAvgRespiratoryRateBiggerThanAverage) {
        return ArrowUpIcon;
      }
      if (isPatientAvgRespiratoryRateLowerThanAverage) {
        return ArrowDownIcon;
      }
      return null;
    }
  }, [
    isPatientAvgHeartRateBiggerThanAverage,
    isPatientAvgHeartRateLowerThanAverage,
    isPatientAvgRespiratoryRateBiggerThanAverage,
    isPatientAvgRespiratoryRateLowerThanAverage,
    isPatientAvgTemperatureRateBiggerThanAverage,
    isPatientAvgTemperatureRateLowerThanAverage,
    type,
  ]);

  return (
    <div
      className={twJoin(
        "flex flex-col gap-4 text-black p-4 rounded-xl",
        color[type]
      )}
    >
      <Image src={icon[type]} alt="Icon" sizes="96px" />

      <div>
        <p className="text-base">{title[type]}</p>
        <p className="text-3xl font-extrabold">{value}</p>
      </div>
      <div className="flex gap-2 ">
        {ArrowIcon && (
          <Image src={ArrowIcon} alt="arrow down icon" height={5} />
        )}
        <p className="text-sm">{label}</p>
      </div>
    </div>
  );
};
