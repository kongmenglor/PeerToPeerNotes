import { c as create_ssr_component, a as add_attribute, e as escape, b as add_styles, d as compute_slots, f as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { p as page } from "../../chunks/stores.js";
import { computePosition, autoUpdate, offset, shift, flip, arrow } from "@floating-ui/dom";
import { b as base } from "../../chunks/paths.js";
const storePopup = writable(void 0);
const cBaseAppShell = "w-full h-full flex flex-col overflow-hidden";
const cContentArea = "w-full h-full flex overflow-hidden";
const cPage = "flex-1 overflow-x-hidden flex flex-col";
const cSidebarLeft = "flex-none overflow-x-hidden overflow-y-auto";
const cSidebarRight = "flex-none overflow-x-hidden overflow-y-auto";
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesSidebarLeft;
  let classesSidebarRight;
  let classesPageHeader;
  let classesPageContent;
  let classesPageFooter;
  let classesFooter;
  let $$slots = compute_slots(slots);
  let { scrollbarGutter = "auto" } = $$props;
  let { regionPage = "" } = $$props;
  let { slotHeader = "z-10" } = $$props;
  let { slotSidebarLeft = "w-auto" } = $$props;
  let { slotSidebarRight = "w-auto" } = $$props;
  let { slotPageHeader = "" } = $$props;
  let { slotPageContent = "" } = $$props;
  let { slotPageFooter = "" } = $$props;
  let { slotFooter = "" } = $$props;
  if ($$props.scrollbarGutter === void 0 && $$bindings.scrollbarGutter && scrollbarGutter !== void 0)
    $$bindings.scrollbarGutter(scrollbarGutter);
  if ($$props.regionPage === void 0 && $$bindings.regionPage && regionPage !== void 0)
    $$bindings.regionPage(regionPage);
  if ($$props.slotHeader === void 0 && $$bindings.slotHeader && slotHeader !== void 0)
    $$bindings.slotHeader(slotHeader);
  if ($$props.slotSidebarLeft === void 0 && $$bindings.slotSidebarLeft && slotSidebarLeft !== void 0)
    $$bindings.slotSidebarLeft(slotSidebarLeft);
  if ($$props.slotSidebarRight === void 0 && $$bindings.slotSidebarRight && slotSidebarRight !== void 0)
    $$bindings.slotSidebarRight(slotSidebarRight);
  if ($$props.slotPageHeader === void 0 && $$bindings.slotPageHeader && slotPageHeader !== void 0)
    $$bindings.slotPageHeader(slotPageHeader);
  if ($$props.slotPageContent === void 0 && $$bindings.slotPageContent && slotPageContent !== void 0)
    $$bindings.slotPageContent(slotPageContent);
  if ($$props.slotPageFooter === void 0 && $$bindings.slotPageFooter && slotPageFooter !== void 0)
    $$bindings.slotPageFooter(slotPageFooter);
  if ($$props.slotFooter === void 0 && $$bindings.slotFooter && slotFooter !== void 0)
    $$bindings.slotFooter(slotFooter);
  classesBase = `${cBaseAppShell} ${$$props.class ?? ""}`;
  classesHeader = `${slotHeader}`;
  classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
  classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
  classesPageHeader = `${slotPageHeader}`;
  classesPageContent = `${slotPageContent}`;
  classesPageFooter = `${slotPageFooter}`;
  classesFooter = `${slotFooter}`;
  return `<div id="appShell"${add_attribute("class", classesBase, 0)} data-testid="app-shell"> ${$$slots.header ? `<header id="shell-header" class="${"flex-none " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : ``}</header>` : ``}  <div class="${"flex-auto " + escape(cContentArea, true)}"> ${$$slots.sidebarLeft ? `<aside id="sidebar-left"${add_attribute("class", classesSidebarLeft, 0)}>${slots.sidebarLeft ? slots.sidebarLeft({}) : ``}</aside>` : ``}  <div id="page" class="${escape(regionPage, true) + " " + escape(cPage, true)}"${add_styles({ "scrollbar-gutter": scrollbarGutter })}> ${$$slots.pageHeader ? `<header id="page-header" class="${"flex-none " + escape(classesPageHeader, true)}">${slots.pageHeader ? slots.pageHeader({}) : `(slot:header)`}</header>` : ``}  <main id="page-content" class="${"flex-auto " + escape(classesPageContent, true)}">${slots.default ? slots.default({}) : ``}</main>  ${$$slots.pageFooter ? `<footer id="page-footer" class="${"flex-none " + escape(classesPageFooter, true)}">${slots.pageFooter ? slots.pageFooter({}) : `(slot:footer)`}</footer>` : ``}</div>  ${$$slots.sidebarRight ? `<aside id="sidebar-right"${add_attribute("class", classesSidebarRight, 0)}>${slots.sidebarRight ? slots.sidebarRight({}) : ``}</aside>` : ``}</div>  ${$$slots.footer ? `<footer id="shell-footer" class="${"flex-none " + escape(classesFooter, true)}">${slots.footer ? slots.footer({}) : ``}</footer>` : ``}</div>`;
});
const home_button = "data:image/svg+xml,%3csvg%20width='128'%20height='128'%20viewBox='0%200%20128%20128'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_71_2)'%3e%3crect%20x='22.5'%20y='39.5'%20width='84'%20height='86'%20rx='7.5'%20fill='%23E2E8F0'%20stroke='black'%20stroke-width='5'/%3e%3cpath%20d='M64.2272%207.16061C64.3931%207.05266%2064.6069%207.05266%2064.7728%207.16061L66.1367%205.06544L64.7728%207.16061L119.184%2042.581C119.334%2042.6783%20119.376%2042.765%20119.395%2042.8225C119.421%2042.9001%20119.429%2043.014%20119.391%2043.1423C119.353%2043.2706%20119.284%2043.3616%20119.22%2043.4126C119.173%2043.4504%20119.09%2043.5%20118.911%2043.5H10.0885C9.91004%2043.5%209.82736%2043.4504%209.78005%2043.4126C9.71605%2043.3616%209.64727%2043.2706%209.6092%2043.1423C9.57112%2043.014%209.57908%2042.9001%209.60488%2042.8225C9.62395%2042.765%209.66616%2042.6783%209.81575%2042.581L64.2272%207.16062L62.8696%205.07506L64.2272%207.16061Z'%20stroke='black'%20stroke-width='5'/%3e%3cpath%20d='M64.2272%207.16061C64.3931%207.05266%2064.6069%207.05266%2064.7728%207.16061L66.1367%205.06544L64.7728%207.16061L119.184%2042.581C119.334%2042.6783%20119.376%2042.765%20119.395%2042.8225C119.421%2042.9001%20119.429%2043.014%20119.391%2043.1423C119.353%2043.2706%20119.284%2043.3616%20119.22%2043.4126C119.173%2043.4504%20119.09%2043.5%20118.911%2043.5H10.0885C9.91004%2043.5%209.82736%2043.4504%209.78005%2043.4126C9.71605%2043.3616%209.64727%2043.2706%209.6092%2043.1423C9.57112%2043.014%209.57908%2042.9001%209.60488%2042.8225C9.62395%2042.765%209.66616%2042.6783%209.81575%2042.581L64.2272%207.16062L62.8696%205.07506L64.2272%207.16061Z'%20fill='%23E2E8F0'%20stroke='black'%20stroke-width='5'/%3e%3crect%20x='52.5'%20y='88.5'%20width='23'%20height='41'%20rx='5.5'%20fill='white'%20stroke='black'%20stroke-width='5'/%3e%3crect%20x='22.5'%20y='47.5'%20width='23'%20height='25'%20rx='5.5'%20fill='white'%20stroke='black'%20stroke-width='5'/%3e%3crect%20x='83.5'%20y='47.5'%20width='23'%20height='25'%20rx='5.5'%20fill='white'%20stroke='black'%20stroke-width='5'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_71_2'%3e%3crect%20width='128'%20height='128'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const css = {
  code: ".app.svelte-1xknyrw{display:flex;flex-direction:column;min-height:100vh}main.svelte-1xknyrw{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}ul.svelte-1xknyrw{list-style:none;display:flex}a.btn.svelte-1xknyrw:hover{background-color:#9ae6b4}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  storePopup.set({
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    arrow
  });
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(AppShell, "AppShell").$$render($$result, {}, {}, {
    header: () => {
      return ` <ul class="horizontal svelte-1xknyrw"> <li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)}><a href="${escape(base, true) + "/"}" data-svelte-h="svelte-1gamly5"><img class="right-px"${add_attribute("src", home_button, 0)} alt="home_button" style="width:40px; height: 40px;"></a></li> <li${add_attribute("aria-current", $page.url.pathname === "/upload" ? "page" : void 0, 0)}><a type="button" class="btn variant-filled bg-gray-300 block text-center border rounded-md gap-4 svelte-1xknyrw" href="${escape(base, true) + "/upload"}" data-svelte-h="svelte-sw1zc8">Upload Notes</a></li></ul> `;
    }
  })} <div class="app svelte-1xknyrw"><main class="svelte-1xknyrw">${slots.default ? slots.default({}) : ``}</main> </div>`;
});
export {
  Layout as default
};
