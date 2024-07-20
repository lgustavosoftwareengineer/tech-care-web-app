import { BloodPressureAverageItem } from "./components";

export function BloodPressureAverageSection() {
  return (
    <div className="flex flex-col gap-4">
      <BloodPressureAverageItem type="systolic" />
      <div className="border-b border-gray-medium" />
      <BloodPressureAverageItem type="diastolic" />
    </div>
  );
}
