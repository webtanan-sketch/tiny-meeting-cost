import { Clock3, Languages, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { MeetingCostWorkspace } from '../components/MeetingCostWorkspace';
import { createDefaultMeetingCostInput } from '../domain/defaults';
import type { MeetingCostInput, TinyLocale } from '../domain/types';

const STATE_KEY = 'tiny-meeting-cost.state.v1';
const LOCALE_KEY = 'tiny-meeting-cost.locale';
const THEME_KEY = 'tiny-meeting-cost.theme';
type Theme = 'light' | 'dark';

const loadInput = (): MeetingCostInput => {
  try {
    const raw = window.localStorage.getItem(STATE_KEY);
    if (!raw) return createDefaultMeetingCostInput();
    return { ...createDefaultMeetingCostInput(), ...(JSON.parse(raw) as Partial<MeetingCostInput>) };
  } catch {
    return createDefaultMeetingCostInput();
  }
};

function App() {
  const [locale, setLocale] = useState<TinyLocale>(() => window.localStorage.getItem(LOCALE_KEY) === 'en' ? 'en' : 'fa');
  const [theme, setTheme] = useState<Theme>(() => window.localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light');
  const [input, setInput] = useState<MeetingCostInput>(loadInput);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'fa' ? 'rtl' : 'ltr';
    window.localStorage.setItem(LOCALE_KEY, locale);
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem(STATE_KEY, JSON.stringify(input));
  }, [input]);

  return (
    <div className="tmc-standalone">
      <header className="tmc-standalone-topbar">
        <a className="tmc-brand" href="https://github.com/webtanan-sketch/tinymanager" target="_blank" rel="noreferrer">
          <span className="tmc-brand-mark"><Clock3 size={18} /></span>
          TinyManager · Meeting Cost
        </a>
        <div className="tmc-shell-actions">
          <button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={locale === 'fa' ? 'تغییر پوسته' : 'Toggle theme'}>
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button type="button" onClick={() => setLocale(locale === 'fa' ? 'en' : 'fa')}>
            <Languages size={16} /> {locale === 'fa' ? 'EN' : 'فا'}
          </button>
        </div>
      </header>

      <main className="tmc-standalone-main">
        <MeetingCostWorkspace locale={locale} value={input} onChange={setInput} />
      </main>

      <footer className="tmc-standalone-footer">
        <span>TinyManager · Small tools. Better management.</span>
        <span>v0.1.0-alpha.1</span>
      </footer>
    </div>
  );
}

export default App;
