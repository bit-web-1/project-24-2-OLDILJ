import * as server from '../entries/pages/Options/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Options/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/Options/+page.server.js";
export const imports = ["_app/immutable/nodes/7.Ce0gpHxb.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.Sob7JkQl.js","_app/immutable/chunks/render.BNsLQEoY.js","_app/immutable/chunks/template.DGJJXTaA.js"];
export const stylesheets = [];
export const fonts = [];
