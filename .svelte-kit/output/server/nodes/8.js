import * as server from '../entries/pages/_slug_/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/8.d9734489.js","_app/immutable/chunks/scheduler.4e6a9c3a.js","_app/immutable/chunks/index.f869b299.js","_app/immutable/chunks/MobileMenu.fb3566d7.js","_app/immutable/chunks/vectorplant.6862d3ca.js"];
export const stylesheets = ["_app/immutable/assets/8.3386c8ff.css","_app/immutable/assets/MobileMenu.b3c9f339.css"];
export const fonts = [];
