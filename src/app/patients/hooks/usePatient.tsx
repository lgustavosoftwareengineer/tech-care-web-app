import { Patient } from "@/app/types";
import { create } from "zustand";

type State = {
  currentPatient: Patient;
};

type Actions = {
  setCurrentPatient: (patient: Patient) => void;
};

type PatientStore = State & Actions;

const INITIAL_STATE: Patient = {
  name: "",
  gender: "",
  age: 0,
  profile_picture: "",
  date_of_birth: "",
  phone_number: "",
  emergency_contact: "",
  insurance_type: "",
  diagnosis_history: [
    {
      month: "",
      year: 0,
      blood_pressure: {
        systolic: {
          value: 0,
          levels: "",
        },
        diastolic: {
          value: 0,
          levels: "",
        },
      },
      heart_rate: {
        value: 0,
        levels: "",
      },
      respiratory_rate: {
        value: 0,
        levels: "",
      },
      temperature: {
        value: 0,
        levels: "",
      },
    },
  ],
  diagnostic_list: [
    {
      name: "",
      description: "",
      status: "",
    },
  ],
  lab_results: [""],
};

export const usePatient = create<PatientStore, any>((set) => ({
  currentPatient: INITIAL_STATE,
  setCurrentPatient: (currentPatient) => set(() => ({ currentPatient })),
}));
