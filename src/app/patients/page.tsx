"use client";

import {
  DiagnosticHistory,
  DiagnosticList,
  LabResults,
  PatientDetails,
  Patients,
} from "../patients/components";
import { useFetchPatients } from "./hooks";
import { Loading } from "../components";

export default function Home() {
  const { patients, isLoading } = useFetchPatients();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Loading showText />
      </div>
    );
  }

  return (
    <section className="grid grid-cols-12 gap-8">
      <div className="col-span-3">
        <Patients patients={patients} />
      </div>
      <div className="flex flex-col col-span-6 gap-8">
        <DiagnosticHistory />
        <DiagnosticList />
      </div>
      <div className="flex flex-col col-span-3 gap-8">
        <PatientDetails />
        <LabResults />
      </div>
    </section>
  );
}
