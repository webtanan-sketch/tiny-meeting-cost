import type { MeetingCostInput, MeetingCostResult } from './types';

const finite = (value: number, fallback = 0): number => Number.isFinite(value) ? value : fallback;

export const calculateMeetingCost = (input: MeetingCostInput): MeetingCostResult => {
  const participants = Math.max(1, Math.round(finite(input.participants, 1)));
  const durationMinutes = Math.max(1, finite(input.durationMinutes, 1));
  const averageHourlyCost = Math.max(0, finite(input.averageHourlyCost));
  const personHours = participants * (durationMinutes / 60);
  const totalCost = personHours * averageHourlyCost;
  const costPerMinute = totalCost / durationMinutes;

  return {
    participants,
    durationMinutes,
    averageHourlyCost,
    currency: input.currency,
    personHours,
    totalCost,
    costPerMinute,
  };
};
