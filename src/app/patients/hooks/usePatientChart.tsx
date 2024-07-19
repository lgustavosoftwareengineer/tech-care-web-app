import { create } from "zustand";

type State = {
  selectedYear?: number;
};

type Actions = {
  setSelectedYear: (selectedYear?: number) => void;
};

type UserStore = State & Actions;

export const usePatientChart = create<UserStore, any>((set) => ({
  selectedYear: undefined,
  setSelectedYear: (selectedYear) => set(() => ({ selectedYear })),
}));
