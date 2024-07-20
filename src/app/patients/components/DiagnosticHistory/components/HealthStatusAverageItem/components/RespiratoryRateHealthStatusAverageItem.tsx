import { useMemo } from "react";

import { useGenerateHealthStatusAverageData } from "@/app/patients/components/DiagnosticHistory/hooks";

import RespiratoryRateIcon from "assets/icons/RespiratoryRate.svg";

import { HealthStatusAverageItemVariantsProps } from "../types";
import { Layout } from "./Layout";

type RespiratoryRateHealthStatusAverageItemProps =
  HealthStatusAverageItemVariantsProps;
export const RespiratoryRateHealthStatusAverageItem = ({
  patientAverage,
  patientsAverages,
}: RespiratoryRateHealthStatusAverageItemProps) => {
  const { arrowIcon, label } = useGenerateHealthStatusAverageData({
    average: patientsAverages.avgRespiratoryRate,
    patientAvg: patientAverage.avgRespiratoryRate,
    isAverageBiggerThanOverall:
      patientAverage.avgRespiratoryRate > patientsAverages.avgRespiratoryRate,
  });
  const value = useMemo(() => {
    return `${patientAverage.avgRespiratoryRate} bpm`;
  }, [patientAverage]);

  return (
    <Layout
      arrowIcon={arrowIcon}
      icon={RespiratoryRateIcon}
      label={label}
      title="Respiratory Rate"
      value={value}
      className="bg-blue"
    />
  );
};
