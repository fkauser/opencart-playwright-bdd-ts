
import { Given, When, Then } from '@cucumber/cucumber';
import type { PlaywrightWorld } from '../common/world';
import { HomePage } from '../pages/HomePage';
import { CategoryPage } from '../pages/CategoryPage';
import { strict as assert } from 'assert';

Given('I open the OpenCart demo home page', async function (this: PlaywrightWorld) {
  const home = new HomePage(this.page);
  await home.openBase();
  await this.attach(`Opened: ${process.env.BASE_URL || 'https://demo.opencart.com/'}`, 'text/plain');
});

When('I navigate to {string} and click Show All', async function (this: PlaywrightWorld, section: string) {
  const home = new HomePage(this.page);
  await home.openCategoryMenu(section);
  await home.clickShowAll(section);
});

When('I navigate to the {string} category page', async function (this: PlaywrightWorld, section: string) {
  const home = new HomePage(this.page);
  await home.openCategoryPageDirect(section);
});

Then('I should see at least {int} product(s) with name and price', async function (this: PlaywrightWorld, min: number) {
  const cat = new CategoryPage(this.page);
  const items = await cat.getAllNamesAndPrices();
  await this.attach(JSON.stringify(items, null, 2), 'application/json');
  assert.ok(items.length >= min, `Expected at least ${min} products, found ${items.length}`);
  items.forEach(it => {
    assert.ok(it.name, 'Product name missing');
    assert.ok(it.price, `Price missing for "${it.name}"`);
  });
});
