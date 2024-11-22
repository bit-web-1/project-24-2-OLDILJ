

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CkuGHyZh.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.DoHr32oH.js","_app/immutable/chunks/template.BqmvvVI0.js"];
export const stylesheets = ["_app/immutable/assets/3.BuHFaqtH.css"];
export const fonts = [];
