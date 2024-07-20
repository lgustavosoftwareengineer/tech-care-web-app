import { useGenerateBloodPressureAverageData } from "@/app/patients/components/DiagnosticHistory/hooks";
import { BloodPressureAverageItemVariantsProps } from "../types";
import { Layout } from "./Layout";

type DiastolicBloodPressureAverageItemProps =
  BloodPressureAverageItemVariantsProps;
export function DiastolicBloodPressureAverageItem({
  type,
  patientAverage,
  patientsAverages,
}: DiastolicBloodPressureAverageItemProps) {
  const { arrowIcon, label } = useGenerateBloodPressureAverageData({
    average: patientsAverages.avgDiastolic,
    patientAvg: patientAverage.avgDiastolic,
  });

  return (
    <Layout
      arrowIcon={arrowIcon}
      label={label}
      className="bg-purple-dark"
      type={type}
      value={patientAverage.avgDiastolic}
    />
  );
}
