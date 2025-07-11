import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_yeqXpKvY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_C6ACVTX2.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_8yWp45sk.mjs';
export { renderers } from '../renderers.mjs';

const about = new Proxy({"src":"/_astro/about.C1FZ3Rbp.jpg","width":6000,"height":4000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tomo/Documents/01_code/frameworks/astro/astro-blog/src/images/about.jpg";
							}
							
							return target[name];
						}
					});

const team1 = new Proxy({"src":"/_astro/team1.CHXq7Isr.png","width":750,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tomo/Documents/01_code/frameworks/astro/astro-blog/src/images/team1.png";
							}
							
							return target[name];
						}
					});

const team2 = new Proxy({"src":"/_astro/team2.Ccx9qtIf.png","width":750,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tomo/Documents/01_code/frameworks/astro/astro-blog/src/images/team2.png";
							}
							
							return target[name];
						}
					});

const team3 = new Proxy({"src":"/_astro/team3.B0njnFun.png","width":750,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tomo/Documents/01_code/frameworks/astro/astro-blog/src/images/team3.png";
							}
							
							return target[name];
						}
					});

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-bold mb-5">About TechPeople</h1> <div class="flex flex-col md:flex-row items-center justify-between gap-6"> <div class="w-full md:w-1/2 mb-8 md:mb-0"> ${renderComponent($$result2, "Image", $$Image, { "src": about, "alt": "Tech People Team", "class": "w-full h-auto rounded-lg shadow-lg" })} </div> <div class="w-full md:w-1/2"> <h2 class="text-3xl font-extrabold text-gray-900 mb-4">Who We Are</h2> <p class="text-gray-700 leading-relaxed mb-6">
We are Tech People, a passionate team of tech enthusiasts dedicated to bringing you the latest news, articles, and tutorials
                on all things technology.
</p> <p class="text-gray-700 leading-relaxed mb-6">
Our mission is to empower and educate our readers, helping them stay up-to-date with the rapidly evolving world of
                technology. Whether you're a seasoned developer, a gadget enthusiast, or just curious about the latest tech trends, we've
                got you covered.
</p> </div> </div>  <div class="mt-10"> <h2 class="text-3xl font-extrabold text-gray-900 mb-8">Our Team</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> <div class="bg-white shadow-lg rounded-lg overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": team1, "alt": "Team Member 1", "class": "w-full h-auto" })} <div class="p-6"> <h3 class="text-xl font-semibold text-gray-900 mb-2">John Doe</h3> <p class="text-gray-70">Founder & Editor-in-Chief</p> </div> </div> <div class="bg-white shadow-lg rounded-lg overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": team2, "alt": "Team Member 2", "class": "w-full h-auto" })} <div class="p-6"> <h3 class="text-xl font-semibold text-gray-900 mb-2">Paul Newman</h3> <p class="text-gray-70">Lead Writer</p> </div> </div> <div class="bg-white shadow-lg rounded-lg overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": team3, "alt": "Team Member 3", "class": "w-full h-auto" })} <div class="p-6"> <h3 class="text-xl font-semibold text-gray-900 mb-2">Johanna Johnson</h3> <p class="text-gray-70">Tech Analyst</p> </div> </div> </div> </div> ` })}`;
}, "/Users/tomo/Documents/01_code/frameworks/astro/astro-blog/src/pages/about.astro", void 0);

const $$file = "/Users/tomo/Documents/01_code/frameworks/astro/astro-blog/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
