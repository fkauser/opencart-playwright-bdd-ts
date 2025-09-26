# 🛒 OpenCart BDD Automation Framework - FAISAL KAUSER

This project is an **end-to-end test automation framework** for the [OpenCart demo site](https://demo.opencart.com/).  
It is built with:

- [Playwright](https://playwright.dev/) – browser automation  
- [Cucumber.js](https://cucumber.io/) – BDD test runner  
- [TypeScript](https://www.typescriptlang.org/) – strongly typed language  
- **Page Object Model (POM)** – scalable test design pattern  
- [multiple-cucumber-html-reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter) – rich HTML reports  

---

## 📂 Project Structure

```
opencart-bdd/
├── features/               # Gherkin feature files [Cucumber]
│   ├── desktops.feature
│   ├── laptops.feature
│   └── phones.feature
├── src/
│   ├── pages/              # Page Object classes
│   │   ├── BasePage.ts
│   │   ├── HomePage.ts
│   │   └── CategoryPage.ts
│   └── common/            # Cucumber world & hooks
│       ├── world.ts
│       ├── hooks.ts
│       └── env.ts
├── reports/                # JSON + HTML test reports
├── cucumber.cjs            # Cucumber config
├── playwright.config.ts    # Playwright config
├── tsconfig.json           # TypeScript config
├── package.json
└── README.md
```

---

## ⚙️ Setup

### 1. Clone & Install
```bash
git clone <repo-url>
cd opencart-bdd
npm install
```

### 2. Install Playwright Browsers
```bash
npx playwright install
```

---

## ▶️ Running Tests

### Run in **Chromium** (default)
```bash
npm run test:bdd:chromium
```

### Run in **Firefox**
```bash
npm run test:bdd:firefox
```

### Run in **WebKit**
```bash
npm run test:bdd:webkit
```

---

## 👀 Headed Mode (see the browser)

With headed mode:
```bash
HEADLESS=false npm run test:bdd:chromium
```


---

## 📊 Reports

After a run, generate the HTML report:

```bash
npm run report
```

Open:
```
reports/html/index.html
```

You’ll see scenario results, steps, screenshots (on failure), and attached product JSON from each category page.

---

## ⚡ Environment Variables

- `BROWSER` → `chromium` | `firefox` | `webkit` (default: `chromium`)
- `HEADLESS` → `true` | `false` (default: `true`)


Example:
```bash
BROWSER=firefox HEADLESS=false npm run test:bdd
```

---

## 🧪 Scenarios Covered

1. **Desktops → Show All Desktops** → validate product names & prices.  
2. **Laptops & Notebooks → Show All** → validate product names & prices.  
3. **Phones & PDAs** → validate product names & prices.  

Each step attaches product JSON into the report for traceability.

---

## 🙌 Contributing

- Add new **feature files** under `features/`  
- Create/update **Page Objects** in `src/pages/`  
- Define steps in `src/steps/`  

Run tests before pushing changes:
```bash
npm run test:bdd:chromium
npm run report
```

---

## 👤 Author

Maintained by **FAISAL**  
Test execution metadata in the HTML report includes `"Executed By": "FAISAL KAUSER"`.
