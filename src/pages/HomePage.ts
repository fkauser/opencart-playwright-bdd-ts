// src/pages/HomePage.ts
import { BasePage } from './BasePage';
import type { Page, Locator } from 'playwright';

export class HomePage extends BasePage {
  constructor(page: Page) { super(page); }

  private topNav(): Locator {
    return this.page.locator('#menu'); // main nav container
  }

  async openBase() { await this.page.goto(process.env.BASE_URL || 'https://demo.opencart.com/', { waitUntil: 'domcontentloaded' }); }

  // Hover the top level category to show submenu
  async openCategoryMenu(name: string) {
    const cat = this.topNav().getByRole('link', { name, exact: true });
    await cat.waitFor({ state: 'visible' });
    await cat.hover();
    // wait for menu animation or window
    await this.page.waitForTimeout(150);
  }

  // submenu item [Show All 'Category']  e.g Show All Desktops or Show All Componenets
  async clickShowAll(name: string) {
    const showAll = this.topNav().getByRole('link', { name: new RegExp(`^Show All .*${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`) });
    await showAll.waitFor({ state: 'visible', timeout: 5000 });
    await showAll.click();
  }

  // submenu item without [Show All 'Category'] e.g Phones & PDAs  
  async openCategoryPageDirect(name: string) {
    const link = this.topNav().getByRole('link', { name, exact: true });
    await link.waitFor({ state: 'visible' });
    await link.click();
  }
}
