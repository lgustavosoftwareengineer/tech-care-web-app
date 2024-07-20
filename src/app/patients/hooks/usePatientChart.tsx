import { create } from "zustand";

type State = {
  selectedYear?: number;
};

type Actions = {
  setSelectedYear: (selectedYear?: number) => void;
};

type PatientChartStore = State & Actions;

export const usePatientChart = create<PatientChartStore, any>((set) => ({
  selectedYear: undefined,
  setSelectedYear: (selectedYear) => set(() => ({ selectedYear })),
}));
