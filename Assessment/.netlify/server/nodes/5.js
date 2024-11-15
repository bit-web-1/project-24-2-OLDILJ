import * as server from '../entries/pages/Main/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Main/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/Main/+page.server.js";
export const imports = ["_app/immutable/nodes/5.BD6qlk-4.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.DoHr32oH.js","_app/immutable/chunks/render.CJH61E6F.js","_app/immutable/chunks/template.BqmvvVI0.js"];
export const stylesheets = [];
export const fonts = [];
