const reporter = require('multiple-cucumber-html-reporter');
const fs = require('fs');
const path = require('path');

const jsonDir = path.join(process.cwd(), 'reports');
if (!fs.existsSync(jsonDir)) fs.mkdirSync(jsonDir, { recursive: true });

reporter.generate({
  jsonDir,
  reportPath: path.join(jsonDir, 'html'),
  pageTitle: 'DemoOpenCart BDD - Playwright',
  reportName: 'DemoOpenCart BDD Report',
  metadata: {
    browser: { name: process.env.BROWSER || 'chromium', version: 'latest' },
    device: 'Local',
    platform: { name: process.platform, version: process.version },
    'Executed By': 'FAISAL KAUSER'   
  },
  customData: {
    title: 'Run Info',
    data: [
      { label: 'Project', value: 'OpenCart BDD Playwright' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Executed By', value: 'FAISAL KAUSER' }, 
      { label: 'Execution Start', value: new Date().toLocaleString() }
    ]
  }
});

console.log('📊 HTML report generated at reports/html/index.html');
