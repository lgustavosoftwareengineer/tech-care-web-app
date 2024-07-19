import { EnvironmentVariables } from "@/app/configs";
import { Patient } from "@/app/types";
import { useState, useEffect } from "react";
import { create } from "zustand";

export function useFetchPatients() {
  const { isLoading, patients, setIsLoading, setPatients } = usePatients();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      const credentials = btoa(
        `${EnvironmentVariables.API_USERNAME}:${EnvironmentVariables.API_PASSWORD}`
      );

      try {
        const response = await fetch(EnvironmentVariables.API_URL, {
          headers: {
            Authorization: `Basic ${credentials}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Patient[] = await response.json();
        setPatients(data);
      } catch (error: any) {
        setError(error.error_message);
      } finally {
        setIsLoading(false);
      }
    };

    if (!patients.length) {
      fetchPatients();
    }
  }, [patients, setIsLoading, setPatients]);

  return { patients, isLoading, error };
}

type State = {
  patients: Patient[];
  isLoading: boolean;
};

type Actions = {
  setPatients: (patients: Patient[]) => void;
  setIsLoading: (loading: boolean) => void;
};

type UserStore = State & Actions;

const INITIAL_STATE: Patient[] = [];

const usePatients = create<UserStore, any>((set) => ({
  patients: INITIAL_STATE,
  isLoading: true,
  setPatients: (patients) => set(() => ({ patients })),
  setIsLoading: (isLoading) => set(() => ({ isLoading })),
}));
