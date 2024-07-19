import { Patient } from "@/app/types";
import { useMemo } from "react";
import { Averages } from "./types";

export function usePatientAverages(patient: Patient): Averages {
  return useMemo(() => {
    if (!patient || !patient.diagnosis_history.length) {
      return {
        avgSystolic: 0,
        avgDiastolic: 0,
        avgHeartRate: 0,
        avgRespiratoryRate: 0,
        avgTemperature: 0,
      };
    }

    let totalSystolic = 0;
    let totalDiastolic = 0;
    let totalHeartRate = 0;
    let totalRespiratoryRate = 0;
    let totalTemperature = 0;
    const count = patient.diagnosis_history.length;

    patient.diagnosis_history.forEach((record) => {
      totalSystolic += record.blood_pressure.systolic.value;
      totalDiastolic += record.blood_pressure.diastolic.value;
      totalHeartRate += record.heart_rate.value;
      totalRespiratoryRate += record.respiratory_rate.value;
      totalTemperature += record.temperature.value;
    });

    return {
      avgSystolic: Math.round(totalSystolic / count),
      avgDiastolic: Math.round(totalDiastolic / count),
      avgHeartRate: Math.round(totalHeartRate / count),
      avgRespiratoryRate: Math.round(totalRespiratoryRate / count),
      avgTemperature: Math.round(totalTemperature / count),
    };
  }, [patient]);
}
