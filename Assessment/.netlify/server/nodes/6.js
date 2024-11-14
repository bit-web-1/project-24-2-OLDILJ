import * as server from '../entries/pages/New/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/New/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/New/+page.server.js";
export const imports = ["_app/immutable/nodes/6.D-aer1eU.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js"];
export const stylesheets = [];
export const fonts = [];
