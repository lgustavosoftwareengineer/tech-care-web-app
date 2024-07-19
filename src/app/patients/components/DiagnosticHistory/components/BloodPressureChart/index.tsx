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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type BloodPressure = {
  value: number;
  levels: string;
};

type DiagnosisHistoryItem = {
  month: string;
  year: number;
  blood_pressure: {
    systolic: BloodPressure;
    diastolic: BloodPressure;
  };
};

type BloodPressureChartProps = {
  diagnosisHistory: DiagnosisHistoryItem[];
};

export function BloodPressureChart({
  diagnosisHistory,
}: BloodPressureChartProps) {
  const months = diagnosisHistory.map(
    (record) => `${record.month.slice(0, 3)}, ${record.year}`
  );
  const systolicValues = diagnosisHistory.map(
    (record) => record.blood_pressure.systolic.value
  );
  const diastolicValues = diagnosisHistory.map(
    (record) => record.blood_pressure.diastolic.value
  );

  const data: ChartData<"line"> = {
    labels: months,
    datasets: [
      {
        label: "Systolic Pressure",
        data: systolicValues,
        borderColor: "rgba(230, 111, 210, 1)",
        backgroundColor: "rgba(230, 111, 210, 0.2)",
        fill: true,
        pointStyle: "circle", // You can change this to 'rect', 'triangle', 'star', etc.
        pointRadius: 5,
        pointBackgroundColor: "rgba(230, 111, 210, 1)",
        pointBorderColor: "rgba(230, 111, 210, 1)",
        tension: 0.4, // Ajuste a curvatura da linha
      },
      {
        label: "Diastolic Pressure",
        data: diastolicValues,
        borderColor: "rgba(140, 111, 230, 1)",
        backgroundColor: "rgba(140, 111, 230, 0.2)",
        fill: true,
        pointStyle: "circle", // You can change this to 'rect', 'triangle', 'star', etc.
        pointRadius: 5,
        pointBackgroundColor: "rgba(140, 111, 230, 1)",
        pointBorderColor: "rgba(140, 111, 230, 1)",
        tension: 0.4, // Ajuste a curvatura da linha
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Blood Pressure Over the Year",
      },
    },
  };

  return <Line data={data} options={options} />;
}
