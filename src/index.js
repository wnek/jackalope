"use strict"


import { Cursor2 } from './scripts/cursors/cursor2';
import { utils, getIndexPage } from './scripts/utils';
const index = 2;

new Cursor2(index);

window.addEventListener('load', async () => {
  await utils();
});