import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DGu7R3Zn.js","_app/immutable/chunks/entry.BuvCXpnC.js","_app/immutable/chunks/runtime.DoHr32oH.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/template.BqmvvVI0.js"];
export const stylesheets = [];
export const fonts = [];
