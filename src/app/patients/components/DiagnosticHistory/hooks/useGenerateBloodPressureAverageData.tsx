import { useMemo } from "react";

import ArrowDownIcon from "assets/icons/ArrowDown.svg";
import ArrowUpIcon from "assets/icons/ArrowUp.svg";

import { AVERAGE_LABELS } from "../constant";

type UseGenerateBloodPressureAverageDataParams = {
  average: number;
  patientAvg: number;
};
export function useGenerateBloodPressureAverageData({
  average,
  patientAvg,
}: UseGenerateBloodPressureAverageDataParams) {
  const isAverageBiggerThanOverall = patientAvg > average;

  return useMemo<{
    arrowIcon: any;
    label: string;
  }>(() => {
    if (patientAvg === average)
      return {
        label: AVERAGE_LABELS.normal,
        arrowIcon: null,
      };

    return isAverageBiggerThanOverall
      ? { label: AVERAGE_LABELS.high, arrowIcon: ArrowUpIcon }
      : { label: AVERAGE_LABELS.low, arrowIcon: ArrowDownIcon };
  }, [average, isAverageBiggerThanOverall, patientAvg]);
}
