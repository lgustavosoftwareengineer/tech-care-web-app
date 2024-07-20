import { useMemo } from "react";

import HeartBPMIcon from "assets/icons/HeartBPM.svg";

import { useGenerateHealthStatusAverageData } from "@/app/patients/components/DiagnosticHistory/hooks";

import { HealthStatusAverageItemVariantsProps } from "../types";
import { Layout } from "./Layout";

type HeartRateHealthStatusAverageItemProps =
  HealthStatusAverageItemVariantsProps;
export const HeartRateHealthStatusAverageItem = ({
  patientAverage,
  patientsAverages,
}: HeartRateHealthStatusAverageItemProps) => {
  const { arrowIcon, label } = useGenerateHealthStatusAverageData({
    average: patientsAverages.avgHeartRate,
    patientAvg: patientAverage.avgHeartRate,
    isAverageBiggerThanOverall:
      patientAverage.avgHeartRate > patientsAverages.avgHeartRate,
  });
  const value = useMemo(() => {
    return `${patientAverage.avgHeartRate} bpm`;
  }, [patientAverage]);

  return (
    <Layout
      arrowIcon={arrowIcon}
      icon={HeartBPMIcon}
      label={label}
      title="Heart Rate"
      value={value}
      className="bg-pink-light"
    />
  );
};
