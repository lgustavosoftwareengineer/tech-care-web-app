import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { DiagnosisHistory } from "@/app/types";
import { useMemo } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type BloodPressureChartProps = {
  diagnosisHistory: DiagnosisHistory[];
};

const SYSTOLIC_DATA_OPTIONS = {
  color: "#E66FD2",
};

const DIASTOLIC_DATA_OPTIONS = {
  color: "#8C6FE6",
};

const DEFAULT_DATA_OPTIONS = {
  fill: true,
  pointStyle: "circle",
  pointRadius: 5,
  tension: 0.4,
};

const CHART_OPTIONS: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

export function BloodPressureChart({
  diagnosisHistory,
}: BloodPressureChartProps) {
  const months = useMemo(
    () =>
      diagnosisHistory.map(
        (record) => `${record.month.slice(0, 3)}, ${record.year}`
      ),
    [diagnosisHistory]
  );

  const systolicValues = useMemo(
    () =>
      diagnosisHistory.map((record) => record.blood_pressure.systolic.value),
    [diagnosisHistory]
  );

  const diastolicValues = useMemo(
    () =>
      diagnosisHistory.map((record) => record.blood_pressure.diastolic.value),
    [diagnosisHistory]
  );

  const data: ChartData<"line"> = useMemo<ChartData<"line">>(
    () => ({
      labels: months,
      datasets: [
        {
          label: "Systolic Pressure",
          data: systolicValues,
          borderColor: SYSTOLIC_DATA_OPTIONS.color,
          backgroundColor: SYSTOLIC_DATA_OPTIONS.color,
          pointBackgroundColor: SYSTOLIC_DATA_OPTIONS.color,
          pointBorderColor: SYSTOLIC_DATA_OPTIONS.color,
          ...DEFAULT_DATA_OPTIONS,
        },
        {
          label: "Diastolic Pressure",
          data: diastolicValues,
          borderColor: DIASTOLIC_DATA_OPTIONS.color,
          backgroundColor: DIASTOLIC_DATA_OPTIONS.color,
          pointBackgroundColor: DIASTOLIC_DATA_OPTIONS.color,
          pointBorderColor: DIASTOLIC_DATA_OPTIONS.color,
          ...DEFAULT_DATA_OPTIONS,
        },
      ],
    }),
    [diastolicValues, months, systolicValues]
  );

  return <Line data={data} options={CHART_OPTIONS} />;
}
