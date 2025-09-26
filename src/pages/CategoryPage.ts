//Since for all Testscripts, same validation required, thus creating Category (Name(s), Price(s) page )
import { BasePage } from './BasePage';
import type { Page } from 'playwright';

export class CategoryPage extends BasePage {
  constructor(page: Page) { super(page); }

  async waitForProducts() {
      // wait for at least 1 product card to appear [My Notes: product-list:top div 'id', product-thumb:product cards/tiles]
    await this.page.waitForSelector('.product-thumb, #product-list', { timeout: 10000 });
  }

  productCards() {
    return this.page.locator('.product-thumb, #product-list');
  }

  productNameAt(index: number) {
    return this.productCards().nth(index).locator('h4 a, .description a, a').first();
  }

  productPriceAt(index: number) {
    return this.productCards().nth(index).locator('.price, .price-new, [class*="price"]').first();
  }

  async getAllNamesAndPrices() {
    await this.waitForProducts();
    const count = await this.productCards().count();
    const items: { name: string; price: string }[] = []; // expected array format  [{ name: "MacBook", price: "$602.00" }, { name: "iPhone", price: "$123.20" }]
    for (let i = 0; i < count; i++) {
      const name = (await this.productNameAt(i).innerText().catch(()=>'')).trim();
      const rawPrice = (await this.productPriceAt(i).innerText().catch(()=>'')).replace(/\s+/g, ' ').trim();
      if (name) items.push({ name, price: rawPrice });
    }
    return items;
  }
}
