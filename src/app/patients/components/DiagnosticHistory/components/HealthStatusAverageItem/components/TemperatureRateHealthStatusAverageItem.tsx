import { useMemo } from "react";

import { useGenerateHealthStatusAverageData } from "@/app/patients/components/DiagnosticHistory/hooks";

import TemperatureRateIcon from "assets/icons/TemperatureRate.svg";

import { HealthStatusAverageItemVariantsProps } from "../types";
import { Layout } from "./Layout";

type TemperatureRateHealthStatusAverageItemProps =
  HealthStatusAverageItemVariantsProps;
export const TemperatureRateHealthStatusAverageItem = ({
  patientAverage,
  patientsAverages,
}: TemperatureRateHealthStatusAverageItemProps) => {
  const { arrowIcon, label } = useGenerateHealthStatusAverageData({
    average: patientsAverages.avgTemperature,
    patientAvg: patientAverage.avgTemperature,
    isAverageBiggerThanOverall:
      patientAverage.avgTemperature > patientsAverages.avgTemperature,
  });
  const value = useMemo(() => {
    return `${patientAverage.avgTemperature}°F`;
  }, [patientAverage]);

  return (
    <Layout
      arrowIcon={arrowIcon}
      icon={TemperatureRateIcon}
      label={label}
      title="Temperature"
      value={value}
      className="bg-pink-medium"
    />
  );
};
