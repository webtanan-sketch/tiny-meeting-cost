export const moduleManifest = {
  id: 'tiny-meeting-cost',
  version: '0.1.0-foundation',
  name: { fa: 'هزینه جلسه', en: 'Meeting Cost' },
  description: {
    fa: 'محاسبه سریع هزینه زمانی و مالی جلسه.',
    en: 'Calculate the time and financial cost of a meeting.',
  },
  icon: 'Clock3',
  route: '/modules/meeting-cost',
  repository: 'https://github.com/webtanan-sketch/tiny-meeting-cost',
  category: 'insight',
  maturity: 'foundation',
  capabilities: {
    dashboardWidget: false,
    globalSearch: false,
    exportData: true,
    sharedPeople: false,
    sharedProjects: false,
    notifications: false,
  },
} as const;

export default moduleManifest;
