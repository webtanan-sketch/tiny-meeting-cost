import '../styles.css';
import type { MeetingCostInput, TinyLocale } from '../domain/types';
import { MeetingCostWorkspace } from '../components/MeetingCostWorkspace';
import { calculateMeetingCost } from '../domain/calculator';
import { createDefaultMeetingCostInput } from '../domain/defaults';

export { MeetingCostWorkspace, calculateMeetingCost, createDefaultMeetingCostInput };
export type { MeetingCostInput, MeetingCostResult, TinyMeetingCurrency, TinyLocale } from '../domain/types';

export interface TinyMeetingCostModuleContext {
  locale: TinyLocale;
  direction: 'rtl' | 'ltr';
}

export const meetingCostManifest = {
  id: 'tiny-meeting-cost',
  version: '0.1.0-alpha.1',
  name: { fa: 'هزینه جلسه', en: 'Meeting Cost' },
  description: {
    fa: 'محاسبه سریع هزینه زمانی و مالی جلسه با حداقل ورودی.',
    en: 'Calculate meeting time and financial cost with minimal input.',
  },
  icon: 'Clock3',
  route: '/modules/meeting-cost',
  maturity: 'alpha',
} as const;

export const createTinyManagerModule = () => {
  let context: TinyMeetingCostModuleContext | null = null;
  return {
    manifest: meetingCostManifest,
    initialize(nextContext: TinyMeetingCostModuleContext) {
      context = nextContext;
    },
    dispose() {
      context = null;
    },
    getContext() {
      return context;
    },
  };
};

export const calculateFromInput = (input: MeetingCostInput) => calculateMeetingCost(input);
