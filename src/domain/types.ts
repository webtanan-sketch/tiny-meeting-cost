export type TinyMeetingCurrency = 'TOMAN' | 'IRR' | 'USD' | 'EUR' | 'OTHER';

export interface MeetingCostInput {
  participants: number;
  durationMinutes: number;
  averageHourlyCost: number;
  currency: TinyMeetingCurrency;
}

export interface MeetingCostResult extends MeetingCostInput {
  personHours: number;
  totalCost: number;
  costPerMinute: number;
}

export type TinyLocale = 'fa' | 'en';
