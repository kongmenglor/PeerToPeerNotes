const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "PeerToPeerNotes/_app",
	assets: new Set([".nojekyll","favicon.png","logo.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.Yciu147x.js","app":"_app/immutable/entry/app.BEPf6IYy.js","imports":["_app/immutable/entry/start.Yciu147x.js","_app/immutable/chunks/entry.BtnxLBR3.js","_app/immutable/chunks/scheduler.DIEZGXoH.js","_app/immutable/chunks/index.BO4oSOSv.js","_app/immutable/entry/app.BEPf6IYy.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.DIEZGXoH.js","_app/immutable/chunks/index.6lkpOiKv.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BKTYsXjH.js')),
			__memo(() => import('./chunks/1-Buu36PWF.js')),
			__memo(() => import('./chunks/2-CM_ekAAJ.js')),
			__memo(() => import('./chunks/3-HspWG_bp.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/upload",
				pattern: /^\/upload\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "/PeerToPeerNotes";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
