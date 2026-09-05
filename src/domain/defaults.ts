import type { MeetingCostInput } from './types';

export const createDefaultMeetingCostInput = (): MeetingCostInput => ({
  participants: 6,
  durationMinutes: 60,
  averageHourlyCost: 500_000,
  currency: 'TOMAN',
});
