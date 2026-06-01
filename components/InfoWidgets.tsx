import React, { useEffect, useState } from 'react';
import {
  Clock as ClockIcon,
  Sun,
  CloudSun,
  Cloud,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  CloudLightning,
} from 'lucide-react';

const pad = (n: number) => String(n).padStart(2, '0');

const ClockWidget: React.FC = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

  return (
    <div className="liquid-glass flex items-center gap-3 rounded-xl px-4 py-2.5 text-white">
      <ClockIcon className="h-5 w-5 text-white/80" />
      <div className="leading-tight">
        <p className="font-mono text-base font-medium tabular-nums">{time}</p>
        <p className="text-[0.6rem] uppercase tracking-[0.16em] text-white/70">São Mateus do Sul - PR</p>
      </div>
    </div>
  );
};

const weatherIcon = (code: number) => {
  if (code === 0) return Sun;
  if (code === 1 || code === 2) return CloudSun;
  if (code === 3) return Cloud;
  if (code === 45 || code === 48) return CloudFog;
  if (code >= 51 && code <= 57) return CloudDrizzle;
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return CloudRain;
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return CloudSnow;
  if (code >= 95) return CloudLightning;
  return Cloud;
};

const WeatherWidget: React.FC = () => {
  const [temp, setTemp] = useState<number | null>(null);
  const [code, setCode] = useState<number>(3);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-25.87&longitude=-50.38&current_weather=true')
      .then((r) => r.json())
      .then((data) => {
        if (!active) return;
        if (data?.current_weather) {
          setTemp(Math.round(data.current_weather.temperature));
          setCode(data.current_weather.weathercode);
        } else {
          setError(true);
        }
      })
      .catch(() => active && setError(true));
    return () => {
      active = false;
    };
  }, []);

  const Icon = weatherIcon(code);

  return (
    <div className="liquid-glass flex items-center gap-3 rounded-xl px-4 py-2.5 text-white">
      <Icon className="h-5 w-5 text-white/80" />
      <div className="leading-tight">
        <p className="text-base font-medium tabular-nums">
          {error ? '--' : temp === null ? '...' : `${temp}°C`}
        </p>
        <p className="text-[0.6rem] uppercase tracking-[0.16em] text-white/70">São Mateus do Sul</p>
      </div>
    </div>
  );
};

const InfoWidgets: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <ClockWidget />
      <WeatherWidget />
    </div>
  );
};

export default InfoWidgets;
