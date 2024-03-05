import { c as create_ssr_component, h as compute_rest_props, e as escape, i as spread, j as escape_attribute_value, k as escape_object, d as compute_slots, v as validate_component, a as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { A as Autocomplete } from "../../../chunks/Autocomplete.js";
import "../../../chunks/supabaseClient.js";
const cBase = "textarea relative flex justify-center items-center";
const cInput = "w-full absolute top-0 left-0 right-0 bottom-0 z-[1] opacity-0 disabled:!opacity-0 cursor-pointer";
const cInterface = "flex justify-center items-center text-center";
const FileDropzone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesInput;
  let classesInterface;
  let $$restProps = compute_rest_props($$props, [
    "files",
    "fileInput",
    "name",
    "border",
    "padding",
    "rounded",
    "regionInterface",
    "regionInterfaceText",
    "slotLead",
    "slotMessage",
    "slotMeta"
  ]);
  let $$slots = compute_slots(slots);
  let { files = void 0 } = $$props;
  let { fileInput = void 0 } = $$props;
  let { name } = $$props;
  let { border = "border-2 border-dashed" } = $$props;
  let { padding = "p-4 py-8" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { regionInterface = "" } = $$props;
  let { regionInterfaceText = "" } = $$props;
  let { slotLead = "mb-4" } = $$props;
  let { slotMessage = "" } = $$props;
  let { slotMeta = "opacity-75" } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.fileInput === void 0 && $$bindings.fileInput && fileInput !== void 0)
    $$bindings.fileInput(fileInput);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.regionInterface === void 0 && $$bindings.regionInterface && regionInterface !== void 0)
    $$bindings.regionInterface(regionInterface);
  if ($$props.regionInterfaceText === void 0 && $$bindings.regionInterfaceText && regionInterfaceText !== void 0)
    $$bindings.regionInterfaceText(regionInterfaceText);
  if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0)
    $$bindings.slotLead(slotLead);
  if ($$props.slotMessage === void 0 && $$bindings.slotMessage && slotMessage !== void 0)
    $$bindings.slotMessage(slotMessage);
  if ($$props.slotMeta === void 0 && $$bindings.slotMeta && slotMeta !== void 0)
    $$bindings.slotMeta(slotMeta);
  classesBase = `${cBase} ${border} ${padding} ${rounded} ${$$props.class ?? ""}`;
  classesInput = `${cInput}`;
  classesInterface = `${cInterface}`;
  return `<div class="${[
    "dropzone " + escape(classesBase, true),
    $$restProps.disabled ? "opacity-50" : ""
  ].join(" ").trim()}" data-testid="file-dropzone">  <input${spread(
    [
      { type: "file" },
      { name: escape_attribute_value(name) },
      {
        class: "dropzone-input " + escape(classesInput, true)
      },
      escape_object(prunedRestProps())
    ],
    {}
  )}>  <div class="${"dropzone-interface " + escape(classesInterface, true) + " " + escape(regionInterface, true)}"><div class="${"dropzone-interface-text " + escape(regionInterfaceText, true)}"> ${$$slots.lead ? `<div class="${"dropzone-lead " + escape(slotLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="${"dropzone-message " + escape(slotMessage, true)}">${slots.message ? slots.message({}) : `<strong data-svelte-h="svelte-13uz6lq">Upload a file</strong> or drag and drop`}</div>  ${$$slots.meta ? `<small class="${"dropzone-meta " + escape(slotMeta, true)}">${slots.meta ? slots.meta({}) : ``}</small>` : ``}</div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let input_file;
  let dept_input = "";
  let number_input = "";
  let teacher_input = "";
  let class_dept_list = data.props.departments;
  let class_number_list = data.props.class_numbers;
  let teacher_list = data.props.professors;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-fsr6ac_START -->${$$result.title = `<title>Peer To Peer Notes - Upload</title>`, ""}<meta name="description" content="Information To Enter"><!-- HEAD_svelte-fsr6ac_END -->`, ""} ${``} ${validate_component(FileDropzone, "FileDropzone").$$render(
      $$result,
      {
        name: "file_in",
        accept: ".docx, .pdf, .png",
        class: "h-80 text-4xl max-w-xl mx-auto p-8 bg-white shadow-md rounded-md p-4",
        files: input_file
      },
      {
        files: ($$value) => {
          input_file = $$value;
          $$settled = false;
        }
      },
      {
        message: () => {
          return `Select or Drag and Drop one file... <br> (png, docx, pdf)`;
        }
      }
    )} ${input_file ? `<span class="block text-gray-700 font-bold mb-2 text-center p-2">File: ${escape(input_file[0].name)} accepted!</span>` : ``} <form class="max-w-xl mx-auto p-8 shadow-md rounded-md"><div class="mb-4 grid grid-cols-2 space-x-4"><label for="class" class="bg-gray-300 block text-gray-700 mb-2 text-center w-30 p-2 border rounded-md" data-svelte-h="svelte-ygpps7">Class Number:</label> <div class="grid grid-cols-2 space-x-4"><input class="input autocomplete border-0 bg-gray-300 rounded-md" type="search" name="autocomplete-search-dept" placeholder="CSCI"${add_attribute("value", dept_input, 0)}> <div data-popup="popupAutocompleteDept" class="bg-gray-400 text-gray-700 mb-2 text-center w-30 p-2 rounded-md">${validate_component(Autocomplete, "Autocomplete").$$render(
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
    )}</div> <input class="input autocomplete border-0 bg-gray-300 rounded-md" type="search" name="autocomplete-search-num" placeholder="400"${add_attribute("value", number_input, 0)}> <div data-popup="popupAutocompleteNum" class="bg-gray-400 text-gray-700 mb-2 text-center w-30 p-2 rounded-md">${validate_component(Autocomplete, "Autocomplete").$$render(
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
    )}</div></div></div> <div class="mb-4 grid grid-cols-2 space-x-4"><label for="teacher_name" class="bg-gray-300 block text-gray-700 mb-2 text-center w-30 p-2 border rounded-md" data-svelte-h="svelte-1ghxucu">Teacher:</label> <input class="input autocomplete border-0 bg-gray-300 rounded-md" type="search" name="autocomplete-search-num" placeholder="Neil Dantam"${add_attribute("value", teacher_input, 0)}> <div data-popup="popupAutocompleteTeacher" class="bg-gray-400 text-gray-700 mb-2 text-center w-70 p-2 rounded-md">${validate_component(Autocomplete, "Autocomplete").$$render(
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
    )}</div></div>  <div class="mt-6 p-8 grid grid-cols-1 gap-2" data-svelte-h="svelte-1l3190s"><button type="submit" class="w-full bg-gray-300 text-black p-2 rounded-md">Upload!</button></div></form> ${``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
