// Different type of browser - env either headless or browser | nodejs process.env
export const BROWSER = (process.env.BROWSER || 'chromium') as 'chromium'|'firefox'|'webkit';
export const HEADLESS = (process.env.HEADLESS ?? 'true') !== 'false';

