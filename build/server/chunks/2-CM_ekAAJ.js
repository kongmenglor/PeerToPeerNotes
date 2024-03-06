import { s as supabase } from './supabaseClient-BAc029ti.js';
import '@supabase/supabase-js';

async function load({ params }) {
  const professors = await getProfData();
  const departments = await getDeptData();
  const class_numbers = await getNumData();
  return {
    props: {
      professors,
      departments,
      class_numbers
    }
  };
}
async function getProfData() {
  let data_to_return = [];
  const { data } = await supabase.schema("all_info").from("professors").select("*");
  data?.forEach((element) => {
    let tempObj = { label: element.full_name, value: element.full_name };
    data_to_return.push(tempObj);
  });
  console.log(data_to_return);
  return data_to_return;
}
async function getDeptData() {
  let data_to_return = [];
  const { data } = await supabase.schema("all_info").from("departments").select("*");
  data?.forEach((element) => {
    let tempObj = { label: element.department, value: element.department };
    data_to_return.push(tempObj);
  });
  console.log(data_to_return);
  return data_to_return;
}
async function getNumData() {
  let data_to_return = [];
  const { data } = await supabase.schema("all_info").from("class_numbers").select("*");
  data?.forEach((element) => {
    let tempObj = { label: element.class_number, value: element.class_number };
    data_to_return.push(tempObj);
  });
  console.log(data_to_return);
  return data_to_return;
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Bf0PVFio.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.CtA8xUfZ.js","_app/immutable/chunks/scheduler.DIEZGXoH.js","_app/immutable/chunks/index.6lkpOiKv.js","_app/immutable/chunks/supabaseClient.ppdD3oF2.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.CxvagtAm.js","_app/immutable/chunks/index.BO4oSOSv.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js"];
const stylesheets = ["_app/immutable/assets/2.DKOaPRFv.css","_app/immutable/assets/ProgressBar.Cirlo5Z8.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-CM_ekAAJ.js.map
