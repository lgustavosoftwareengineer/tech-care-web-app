import { useGenerateBloodPressureAverageData } from "@/app/patients/components/DiagnosticHistory/hooks";

import { BloodPressureAverageItemVariantsProps } from "../types";
import { Layout } from "./Layout";

type SystolicBloodPressureAverageItemProps =
  BloodPressureAverageItemVariantsProps;
export function SystolicBloodPressureAverageItem({
  type,
  patientAverage,
  patientsAverages,
}: SystolicBloodPressureAverageItemProps) {
  const { arrowIcon, label } = useGenerateBloodPressureAverageData({
    average: patientsAverages.avgSystolic,
    patientAvg: patientAverage.avgSystolic,
  });

  return (
    <Layout
      arrowIcon={arrowIcon}
      label={label}
      className="bg-pink-dark"
      type={type}
      value={patientAverage.avgSystolic}
    />
  );
}
