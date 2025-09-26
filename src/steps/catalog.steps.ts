// src/steps/catalog.steps.ts
import { Then } from '@cucumber/cucumber';
import type { PlaywrightWorld } from '../common/world';
import { CategoryPage } from '../pages/CategoryPage';
import { strict as assert } from 'assert';

Then('every listed product shows a name and a price', async function (this: PlaywrightWorld) {
  const cat = new CategoryPage(this.page);
  const items = await cat.getAllNamesAndPrices();
  await this.attach(JSON.stringify(items, null, 2), 'application/json');
  assert.ok(items.length > 0, 'No products found');
  items.forEach(it => {
    assert.ok(it.name, 'Missing product name');
    assert.ok(it.price, `Missing price for "${it.name}"`);
  });
});
