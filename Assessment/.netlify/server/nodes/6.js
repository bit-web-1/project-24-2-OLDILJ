import * as universal from '../entries/pages/New/_page.js';
import * as server from '../entries/pages/New/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/New/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/New/+page.js";
export { server };
export const server_id = "src/routes/New/+page.server.js";
export const imports = ["_app/immutable/nodes/6.QnAlZp0m.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.DoHr32oH.js","_app/immutable/chunks/template.BqmvvVI0.js"];
export const stylesheets = ["_app/immutable/assets/6.AqFQ-m1P.css"];
export const fonts = [];
