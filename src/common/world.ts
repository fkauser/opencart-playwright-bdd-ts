import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium, firefox, webkit, Browser, BrowserContext, Page } from 'playwright';
import { BROWSER, HEADLESS } from './env';

export class PlaywrightWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  baseURL: string;

  //Registers this class as the default World in Cucumber.
  constructor(options: IWorldOptions) {
    super(options);
    this.baseURL = (options.parameters as any).baseURL;
  }

  async launch() {
    const launcher = BROWSER === 'firefox' ? firefox : BROWSER === 'webkit' ? webkit : chromium;
    this.browser = await launcher.launch({ headless: HEADLESS });
    this.context = await this.browser.newContext({ viewport: { width: 1366, height: 900 } });
    this.page = await this.context.newPage();
  }

  async close() {
    await this.context?.close();
    await this.browser?.close();
  }
}
//telling Cucumber to use PlaywrightWorld
setWorldConstructor(PlaywrightWorld);
