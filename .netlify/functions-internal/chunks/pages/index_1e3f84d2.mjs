import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, s as spreadAttributes, i as renderSlot, j as renderComponent, k as renderHead } from '../astro_01ef1c8e.mjs';
import 'clsx';
/* empty css                           *//* empty css                           */
const $$Astro$5 = createAstro("https://sillyangel.me");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/ss.png" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><meta name="theme-color" content="#ffffff">`;
}, "/workspace/personalweb/src/components/BaseHead.astro", void 0);

const $$Astro$4 = createAstro("https://sillyangel.me");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/workspace/personalweb/src/components/HeaderLink.astro", void 0);

const SITE_TITLE = "Sillyangel.me";
const SITE_DESCRIPTION = "Welcome to my website!";

const $$Astro$3 = createAstro("https://sillyangel.me");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> <h2 data-astro-cid-3ef6ksr2><a href="/" data-astro-cid-3ef6ksr2>${SITE_TITLE}</a></h2> <div class="internal-links" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Home` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/projects", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Projects` })} </div> <a href="https://github.com/sillyangel" target="_blank" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>Go to My GitHub Page</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" data-astro-cid-3ef6ksr2><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-astro-cid-3ef6ksr2></path></svg> </a> </nav> </header> `;
}, "/workspace/personalweb/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro("https://sillyangel.me");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte>
&copy; ${today.getFullYear()} Angel. All rights reserved.
</footer> `;
}, "/workspace/personalweb/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://sillyangel.me");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE })} <main> <h1>Hi 👋, I'm Sillyangel!</h1> <p>
Welcome to my personal website, you can check out my <a href="projects">projects</a> </p> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/workspace/personalweb/src/pages/index.astro", void 0);

const $$file$1 = "/workspace/personalweb/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://sillyangel.me");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en" data-astro-cid-2hwget37> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-2hwget37": true })}${renderHead()}</head> <body data-astro-cid-2hwget37> ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE, "data-astro-cid-2hwget37": true })} <main data-astro-cid-2hwget37> <h1 data-astro-cid-2hwget37>Projects</h1> <a href="https://music.sillyangel.me" class="button" style="background-color: #222222;" data-astro-cid-2hwget37> <img src="musicss.png" alt="Music Site Preview" width="1365" height="610" data-astro-cid-2hwget37>
Music Player
</a> <a href="https://bfgs.sillyangel.me" class="button" style="background-color: #222222;" data-astro-cid-2hwget37> <img src="bfgss.png" alt="Bigfoot Game Shack Preview" width="1365" height="614" data-astro-cid-2hwget37>
Bigfoot (Login Required)
</a> </main>  </body> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-2hwget37": true })} </html>`;
}, "/workspace/personalweb/src/pages/projects/index.astro", void 0);

const $$file = "/workspace/personalweb/src/pages/projects/index.astro";
const $$url = "/projects";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { SITE_TITLE as S, SITE_DESCRIPTION as a, index as b, index$1 as i };
