import {
  useFetchPatients,
  usePatient,
  usePatientAverages,
  usePatientsAverages,
} from "@/app/patients/hooks";

import {
  BloodPressureAverageItemVariantsProps,
  BloodPressureAverageTypes,
} from "./types";
import {
  DiastolicBloodPressureAverageItem,
  SystolicBloodPressureAverageItem,
} from "./components";

export type BloodPressureAverageItemProps = {
  type: BloodPressureAverageTypes;
};
export function BloodPressureAverageItem({
  type,
}: BloodPressureAverageItemProps) {
  const { currentPatient } = usePatient();
  const { patients } = useFetchPatients();

  const patientsAverages = usePatientsAverages(patients);
  const patientAverage = usePatientAverages(currentPatient);

  const components: Record<
    BloodPressureAverageTypes,
    (props: BloodPressureAverageItemVariantsProps) => JSX.Element
  > = {
    diastolic: DiastolicBloodPressureAverageItem,
    systolic: SystolicBloodPressureAverageItem,
  };

  const Component = components[type];

  return (
    <Component
      type={type}
      patientsAverages={patientsAverages}
      patientAverage={patientAverage}
    />
  );
}
