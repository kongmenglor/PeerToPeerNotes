export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "PeerToPeerNotes/_app",
	assets: new Set(["favicon.png","logo.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.CQRcU2zr.js","app":"_app/immutable/entry/app.c3q_Bckn.js","imports":["_app/immutable/entry/start.CQRcU2zr.js","_app/immutable/chunks/entry.DecmKOGU.js","_app/immutable/chunks/scheduler.DIEZGXoH.js","_app/immutable/chunks/index.BO4oSOSv.js","_app/immutable/entry/app.c3q_Bckn.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.DIEZGXoH.js","_app/immutable/chunks/index.6lkpOiKv.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
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
