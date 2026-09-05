import { Clock3, Coins, Users } from 'lucide-react';
import { calculateMeetingCost } from '../domain/calculator';
import type { MeetingCostInput, TinyLocale, TinyMeetingCurrency } from '../domain/types';

export interface MeetingCostWorkspaceProps {
  locale: TinyLocale;
  value: MeetingCostInput;
  onChange(value: MeetingCostInput): void;
}

const currencyLabel = (currency: TinyMeetingCurrency, locale: TinyLocale): string => {
  const labels: Record<TinyMeetingCurrency, { fa: string; en: string }> = {
    TOMAN: { fa: 'تومان', en: 'toman' },
    IRR: { fa: 'ریال', en: 'IRR' },
    USD: { fa: 'دلار', en: 'USD' },
    EUR: { fa: 'یورو', en: 'EUR' },
    OTHER: { fa: 'واحد', en: 'unit' },
  };
  return labels[currency][locale];
};

const format = (value: number, locale: TinyLocale): string =>
  new Intl.NumberFormat(locale === 'fa' ? 'fa-IR' : 'en-US', { maximumFractionDigits: 0 }).format(value);

export function MeetingCostWorkspace({ locale, value, onChange }: MeetingCostWorkspaceProps) {
  const result = calculateMeetingCost(value);
  const dir = locale === 'fa' ? 'rtl' : 'ltr';
  const setNumber = (key: 'participants' | 'durationMinutes' | 'averageHourlyCost', raw: string) => {
    const parsed = Number(raw);
    if (!Number.isFinite(parsed)) return;
    onChange({ ...value, [key]: parsed });
  };

  return (
    <section className="tmc-workspace" dir={dir}>
      <header className="tmc-heading">
        <div className="tmc-heading-icon"><Clock3 size={22} /></div>
        <div>
          <h1>{locale === 'fa' ? 'هزینه واقعی جلسه' : 'Real meeting cost'}</h1>
          <p>{locale === 'fa' ? 'فقط سه عدد؛ نتیجه همان لحظه محاسبه می‌شود.' : 'Only three numbers. The result updates instantly.'}</p>
        </div>
      </header>

      <div className="tmc-input-grid">
        <label>
          <span><Users size={16} />{locale === 'fa' ? 'تعداد افراد' : 'Participants'}</span>
          <input type="number" min="1" value={value.participants} onChange={(event) => setNumber('participants', event.currentTarget.value)} />
        </label>
        <label>
          <span><Clock3 size={16} />{locale === 'fa' ? 'مدت جلسه (دقیقه)' : 'Duration (minutes)'}</span>
          <input type="number" min="1" value={value.durationMinutes} onChange={(event) => setNumber('durationMinutes', event.currentTarget.value)} />
        </label>
        <label>
          <span><Coins size={16} />{locale === 'fa' ? 'هزینه ساعتی متوسط هر نفر' : 'Average hourly cost / person'}</span>
          <div className="tmc-money-input">
            <input type="number" min="0" value={value.averageHourlyCost} onChange={(event) => setNumber('averageHourlyCost', event.currentTarget.value)} />
            <select value={value.currency} onChange={(event) => onChange({ ...value, currency: event.currentTarget.value as TinyMeetingCurrency })}>
              <option value="TOMAN">{locale === 'fa' ? 'تومان' : 'Toman'}</option>
              <option value="IRR">IRR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </label>
      </div>

      <div className="tmc-result-card">
        <span>{locale === 'fa' ? 'هزینه برآوردی جلسه' : 'Estimated meeting cost'}</span>
        <strong>{format(result.totalCost, locale)} <small>{currencyLabel(result.currency, locale)}</small></strong>
        <div className="tmc-result-meta">
          <div><b>{format(result.personHours, locale)}</b><span>{locale === 'fa' ? 'نفر-ساعت' : 'person-hours'}</span></div>
          <div><b>{format(result.costPerMinute, locale)}</b><span>{locale === 'fa' ? 'هزینه هر دقیقه' : 'cost / minute'}</span></div>
        </div>
      </div>
    </section>
  );
}
