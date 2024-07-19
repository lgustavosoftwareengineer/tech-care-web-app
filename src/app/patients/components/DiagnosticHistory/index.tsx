"use client";

import { useState } from "react";
import { Card } from "@/app/components/Card";

import { usePatient, usePatientChart } from "@/app/patients/hooks";

import {
  BloodPressureAverageSection,
  HealthStatusAverageItem,
  BloodPressureChart,
} from "./components";

export function DiagnosticHistory() {
  const { currentPatient } = usePatient();
  const diagnosisHistory = currentPatient.diagnosis_history;

  const { setSelectedYear, selectedYear } = usePatientChart();

  const years = Array.from(
    new Set(diagnosisHistory.map((record) => record.year))
  );

  const filteredDiagnosisHistory = selectedYear
    ? diagnosisHistory.filter((record) => record.year === selectedYear)
    : diagnosisHistory;

  return (
    <Card className="rounded-2xl p-5">
      <div className="bg-purple-light rounded-xl p-4 grid grid-cols-3 gap-10 mb-5">
        <div className="flex flex-col gap-5 col-span-2">
          <div className="flex justify-between">
            <h2 className="font-bold text-lg">Blood Pressure</h2>
            <select
              id="year-select"
              className="bg-purple-light"
              value={selectedYear || ""}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
            >
              <option value="">All</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="font-sans">
            <BloodPressureChart diagnosisHistory={filteredDiagnosisHistory} />
          </div>
        </div>
        <BloodPressureAverageSection />
      </div>

      <div className="grid grid-cols-3 gap-5">
        <HealthStatusAverageItem type="respiratory_rate" />
        <HealthStatusAverageItem type="temperature" />
        <HealthStatusAverageItem type="heart_rate" />
      </div>
    </Card>
  );
}
