module.exports = {
  default: {
    requireModule: ['ts-node/register/transpile-only'],
    require: [
      'src/common/hooks.ts',
      'src/steps/**/*.ts'
    ],
    format: [
      'progress-bar',
      'json:reports/cucumber-report.json'
    ],
    paths: ['features/**/*.feature'],
    worldParameters: {
      baseURL: process.env.BASE_URL || 'https://demo.opencart.com/'
    },
    parallel: 2,
    failFast: false
  }
};
