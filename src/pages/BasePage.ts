import type { Page } from 'playwright';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(url: string) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async openBase(baseURL: string) {
    await this.goto(baseURL);
  }
}
