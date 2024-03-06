import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Autocomplete } from "../../chunks/Autocomplete.js";
import "../../chunks/supabaseClient.js";
const css = {
  code: "h1.svelte-68536u{width:100%;color:black;text-align:center;padding:4rem}h2.svelte-68536u{width:100%;color:black;text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let dept_input = "";
  let number_input = "";
  let teacher_input = "";
  let class_dept_list = data.props.departments;
  let class_number_list = data.props.class_numbers;
  let teacher_list = data.props.professors;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1s78mo4_START -->${$$result.title = `<title>Peer To Peer Notes</title>`, ""}<meta name="description" content="Information To Enter"><!-- HEAD_svelte-1s78mo4_END -->`, ""} ${`<aside class="alert max-w-xs mx-auto h-22 p-4 bg-gray-300 shadow-md rounded-md space-x-4"><div class="alert-message" data-svelte-h="svelte-1ylmh80"><span class="block text-gray-700 font-bold mb-2 text-center p-2">Upload Notes</span> <span class="block text-gray-700 font-bold mb-2 text-center text-sm">Takes as little as 30 seconds!</span></div> <div class="alert-actions"><a href="/upload" class="btn w-full bg-blue-400 text-black p-2 rounded-md text-center text-lg" data-svelte-h="svelte-9oc9x3">Upload</a> <button class="btn w-full bg-red-400 text-black p-2 rounded-md text-center text-sm" data-svelte-h="svelte-1xlpq7c">Dismiss</button></div></aside>`} <div data-svelte-h="svelte-1ap9poi"><h1 class="svelte-68536u">Peer To Peer Notes</h1></div> <form class="max-w-2xl mx-auto p-8 bg-gray-300 shadow-md rounded-md grid grid-cols-2 space-x-4"><div class="mb-4"><label for="teacher_name" class="block text-gray-700 font-bold mb-2" data-svelte-h="svelte-gtcwqn">Teacher Name:</label> <input class="input autocomplete border-0 bg-white p-2 mb-2" type="search" name="autocomplete-search-num" placeholder="Neil Dantam"${add_attribute("value", teacher_input, 0)}> <div data-popup="popupAutocompleteTeacher" class="bg-gray-400 text-gray-700 mb-2 text-center w-70 p-2 rounded-md">${validate_component(Autocomplete, "Autocomplete").$$render(
      $$result,
      {
        options: teacher_list,
        input: teacher_input
      },
      {
        input: ($$value) => {
          teacher_input = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="mb-4"><label for="class" class="block text-gray-700 font-bold mb-2" data-svelte-h="svelte-1eux2cd">Class Number:</label> <div class="mb-4 grid grid-cols-2 space-x-4"><input class="input autocomplete border-0 bg-white p-2 mb-2" type="search" name="autocomplete-search-dept" placeholder="CSCI"${add_attribute("value", dept_input, 0)}> <div data-popup="popupAutocompleteDept" class="bg-gray-400 text-gray-700 mb-2 text-center w-50 p-2 rounded-md">${validate_component(Autocomplete, "Autocomplete").$$render(
      $$result,
      {
        options: class_dept_list,
        input: dept_input
      },
      {
        input: ($$value) => {
          dept_input = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <input class="input autocomplete border-0 bg-white p-2 mb-2" type="search" name="autocomplete-search-num" placeholder="400"${add_attribute("value", number_input, 0)}> <div data-popup="popupAutocompleteNum" class="bg-gray-400 text-gray-700 mb-2 text-center w-50 p-2 rounded-md">${validate_component(Autocomplete, "Autocomplete").$$render(
      $$result,
      {
        options: class_number_list,
        input: number_input
      },
      {
        input: ($$value) => {
          number_input = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div></div>  <div class="col-span-2 text-center" data-svelte-h="svelte-1k7uu2w"><button type="submit" class="w-30 bg-blue-400 text-black p-2 rounded-md mx-auto">Search</button></div></form> ${``} ${``} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
