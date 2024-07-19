import { Patient } from "@/app/types";
import { useMemo } from "react";
import { Averages } from "./types";

export function usePatientsAverages(patients: Patient[]): Averages {
  return useMemo(() => {
    let totalSystolic = 0;
    let totalDiastolic = 0;
    let totalHeartRate = 0;
    let totalRespiratoryRate = 0;
    let totalTemperature = 0;
    let count = 0;

    if (!patients.length) {
      return {
        avgSystolic: 0,
        avgDiastolic: 0,
        avgHeartRate: 0,
        avgRespiratoryRate: 0,
        avgTemperature: 0,
      };
    }

    patients.forEach((patient) => {
      patient.diagnosis_history.forEach((record) => {
        totalSystolic += record.blood_pressure.systolic.value;
        totalDiastolic += record.blood_pressure.diastolic.value;
        totalHeartRate += record.heart_rate.value;
        totalRespiratoryRate += record.respiratory_rate.value;
        totalTemperature += record.temperature.value;
        count++;
      });
    });

    return {
      avgSystolic: count ? Math.round(totalSystolic / count) : 0,
      avgDiastolic: count ? Math.round(totalDiastolic / count) : 0,
      avgHeartRate: count ? Math.round(totalHeartRate / count) : 0,
      avgRespiratoryRate: count ? Math.round(totalRespiratoryRate / count) : 0,
      avgTemperature: count ? Math.round(totalTemperature / count) : 0,
    };
  }, [patients]);
}
