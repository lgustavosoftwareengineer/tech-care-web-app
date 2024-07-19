import { EnvironmentVariables } from "@/app/configs";
import { Patient } from "@/app/types";
import useSWR from "swr";

const fetchPatients = async () => {
  const credentials = btoa(
    `${EnvironmentVariables.API_USERNAME}:${EnvironmentVariables.API_PASSWORD}`
  );

  const response = await fetch(EnvironmentVariables.API_URL, {
    headers: {
      Authorization: `Basic ${credentials}`,
    },
  });

  return response.json();
};

export function useFetchPatients() {
  const {
    data: patients = [],
    isLoading,
    error,
  } = useSWR<Patient[]>("fetch-patients", fetchPatients);

  return { patients, isLoading, error };
}
