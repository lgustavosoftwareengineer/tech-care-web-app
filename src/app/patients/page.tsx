"use client";

import { Loading } from "../components";

import {
  DiagnosticHistory,
  DiagnosticList,
  LabResults,
  PatientDetails,
  Patients,
} from "./components";
import { useFetchPatients } from "./hooks";

export default function Home() {
  const { patients, isLoading } = useFetchPatients();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Loading showText />
      </div>
    );
  }

  if (!patients.length) {
    return (
      <section className="flex justify-center items-center h-screen">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-center mb-6">Ops!</h2>
          <h2 className="text-2xl font-bold text-center mb-6">
            In the moment does not exist patients to show
          </h2>
        </div>
      </section>
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
