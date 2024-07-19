import { PATIENTS } from "../mocked-data/patients";
import {
  DiagnosticHistory,
  DiagnosticList,
  LabResults,
  PatientDetails,
  Patients,
} from "../patients/components";

export default function Home() {
  return (
    <section className="grid grid-cols-12 gap-8 h-[100%]">
      <div className="col-span-3">
        <Patients patients={PATIENTS} />
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
