import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.CtA8xUfZ.js","_app/immutable/chunks/scheduler.DIEZGXoH.js","_app/immutable/chunks/index.6lkpOiKv.js","_app/immutable/chunks/supabaseClient.ppdD3oF2.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.CxvagtAm.js","_app/immutable/chunks/index.BO4oSOSv.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js"];
export const stylesheets = ["_app/immutable/assets/2.DKOaPRFv.css","_app/immutable/assets/ProgressBar.Cirlo5Z8.css"];
export const fonts = [];
