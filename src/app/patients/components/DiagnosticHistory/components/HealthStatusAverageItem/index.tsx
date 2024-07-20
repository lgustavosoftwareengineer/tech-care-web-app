import {
  useFetchPatients,
  usePatient,
  usePatientAverages,
  usePatientsAverages,
} from "@/app/patients/hooks";

import { HealthStatusAverageItemVariantsProps } from "./types";
import {
  HeartRateHealthStatusAverageItem,
  TemperatureRateHealthStatusAverageItem,
  RespiratoryRateHealthStatusAverageItem,
} from "./components";

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

  const components: Record<
    HealthStatusAverageItemProps["type"],
    (props: HealthStatusAverageItemVariantsProps) => JSX.Element
  > = {
    heart_rate: HeartRateHealthStatusAverageItem,
    temperature: TemperatureRateHealthStatusAverageItem,
    respiratory_rate: RespiratoryRateHealthStatusAverageItem,
  };

  const Component = components[type];

  return (
    <Component
      patientAverage={patientAverage}
      patientsAverages={patientsAverages}
    />
  );
};
