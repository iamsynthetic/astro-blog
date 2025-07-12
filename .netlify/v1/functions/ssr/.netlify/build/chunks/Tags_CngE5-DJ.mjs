import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_yeqXpKvY.mjs';
import 'kleur/colors';
import 'clsx';
import { c as capitalize } from './layout_C6ACVTX2.mjs';

const $$Astro = createAstro();
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap gap-2"> ${tags.map((tag, index) => renderTemplate`<span${addAttribute(
    index % 2 === 0 ? "px-2 py-1 bg-blue-500 text-white rounded-full text-xs hover:opacity-90" : "px-2 py-1 bg-green-500 text-white rounded-full text-xs hover:opacity-90",
    "class"
  )}> <a${addAttribute("/articles/tag/" + tag, "href")}>#${capitalize(tag)}</a> </span>`)} </div>`;
}, "/Users/tomo/Documents/01_code/frameworks/astro/astro-blog/src/components/Tags.astro", void 0);

export { $$Tags as $ };
