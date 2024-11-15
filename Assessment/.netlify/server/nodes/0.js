

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DCvb9R3J.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.DoHr32oH.js","_app/immutable/chunks/template.BqmvvVI0.js"];
export const stylesheets = ["_app/immutable/assets/0.TV7Qc7O4.css"];
export const fonts = [];
