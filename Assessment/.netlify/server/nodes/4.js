import * as server from '../entries/pages/Load/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Load/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/Load/+page.server.js";
export const imports = ["_app/immutable/nodes/4.wWl1DjNa.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.DoHr32oH.js","_app/immutable/chunks/render.CJH61E6F.js","_app/immutable/chunks/template.BqmvvVI0.js"];
export const stylesheets = [];
export const fonts = [];
