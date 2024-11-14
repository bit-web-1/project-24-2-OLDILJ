import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.Dv-sjqp3.js","_app/immutable/chunks/entry.B86fzNVW.js","_app/immutable/chunks/runtime.Sob7JkQl.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/template.DGJJXTaA.js"];
export const stylesheets = [];
export const fonts = [];
