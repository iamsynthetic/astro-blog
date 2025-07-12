import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_yeqXpKvY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_C6ACVTX2.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_8yWp45sk.mjs';
export { renderers } from '../renderers.mjs';

const error = new Proxy({"src":"/_astro/error-404.Ox42KQdE.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tomo/Documents/01_code/frameworks/astro/astro-blog/src/images/error-404.png";
							}
							
							return target[name];
						}
					});

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - page not found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-items-center gap-7"> ${renderComponent($$result2, "Image", $$Image, { "src": error, "alt": "an image indicating this page doesnt exist", "height": 250, "width": 250, "class": "mt-10" })} <h1 class="text-5xl">page not found</h1> <p class="text-2xl mb-10">sorry we couldn't find the page you're looking for</p> <a href="/" class="inline-block bg-blue-500 p-2 mb-6 hover:bg-indigo-500 hover:text-white">go back home</a> </div> ` })}`;
}, "/Users/tomo/Documents/01_code/frameworks/astro/astro-blog/src/pages/404.astro", void 0);

const $$file = "/Users/tomo/Documents/01_code/frameworks/astro/astro-blog/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
