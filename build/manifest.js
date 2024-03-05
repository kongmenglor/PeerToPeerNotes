export const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.Dib1i5WI.js","app":"_app/immutable/entry/app.Ba3OXKc8.js","imports":["_app/immutable/entry/start.Dib1i5WI.js","_app/immutable/chunks/entry.D-hK_ttp.js","_app/immutable/chunks/scheduler.DIEZGXoH.js","_app/immutable/chunks/index.BO4oSOSv.js","_app/immutable/entry/app.Ba3OXKc8.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.DIEZGXoH.js","_app/immutable/chunks/index.6lkpOiKv.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./server/nodes/0.js')),
			__memo(() => import('./server/nodes/1.js')),
			__memo(() => import('./server/nodes/2.js')),
			__memo(() => import('./server/nodes/3.js'))
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

export const prerendered = new Set([]);
