export const moduleManifest = {
  schemaVersion: 1,
  id: 'tiny-meeting-cost',
  version: '0.1.0-alpha.1',
  name: { fa: 'هزینه جلسه', en: 'Meeting Cost' },
  description: {
    fa: 'محاسبه سریع هزینه زمانی و مالی جلسه با حداقل ورودی.',
    en: 'Calculate meeting time and financial cost with minimal input.',
  },
  icon: 'Clock3',
  route: '/modules/meeting-cost',
  repository: 'https://github.com/webtanan-sketch/tiny-meeting-cost',
  category: 'insight',
  maturity: 'alpha',
  capabilities: {
    dashboardWidget: false,
    globalSearch: true,
    exportData: false,
    sharedPeople: false,
    sharedProjects: false,
    notifications: false,
    assistantActions: true,
  },
  assistantActions: ['tiny-meeting-cost.calculate'],
} as const;

export default moduleManifest;
