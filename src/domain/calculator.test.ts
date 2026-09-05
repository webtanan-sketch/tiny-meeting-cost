import { describe, expect, it } from 'vitest';
import { calculateMeetingCost } from './calculator';

describe('calculateMeetingCost', () => {
  it('calculates person-hours and total cost', () => {
    const result = calculateMeetingCost({
      participants: 8,
      durationMinutes: 90,
      averageHourlyCost: 500_000,
      currency: 'TOMAN',
    });

    expect(result.personHours).toBe(12);
    expect(result.totalCost).toBe(6_000_000);
    expect(result.costPerMinute).toBeCloseTo(66_666.6667, 2);
  });

  it('normalizes invalid minimum values safely', () => {
    const result = calculateMeetingCost({
      participants: 0,
      durationMinutes: 0,
      averageHourlyCost: -2,
      currency: 'USD',
    });
    expect(result.participants).toBe(1);
    expect(result.durationMinutes).toBe(1);
    expect(result.totalCost).toBe(0);
  });
});
