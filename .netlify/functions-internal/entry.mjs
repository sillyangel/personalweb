import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_98e4c7ed.mjs';

const _page0  = () => import('./chunks/generic_a3ddba2a.mjs');
const _page1  = () => import('./chunks/index_8180a1fe.mjs');
const _page2  = () => import('./chunks/index_52fc8aae.mjs');
const _page3  = () => import('./chunks/rss_d35fab68.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/projects/index.astro", _page2],["src/pages/rss.xml.js", _page3]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
