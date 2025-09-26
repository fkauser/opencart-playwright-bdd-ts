
import { After, Before, Status, setDefaultTimeout } from '@cucumber/cucumber';
import type { PlaywrightWorld } from './world';
import './world';
// default was 5s but launch page seems to be buggy so increasing from 5s to 60s - :( still seems to be issue)
setDefaultTimeout(60 * 1000); 

Before(async function (this: PlaywrightWorld) {
  await this.launch();
});

After(async function (this: PlaywrightWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const buf = await this.page.screenshot({ fullPage: true });
    await this.attach(buf, 'image/png');
  }
  await this.close();
});
