import { c as create_ssr_component, a as subscribe, l as createEventDispatcher, e as escape, n as each } from './ssr-sWaCbAS4.js';
import { p as prefersReducedMotionStore } from './ProgressBar.svelte_svelte_type_style_lang-B-hVWcCU.js';

function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function slide(node, { delay = 0, duration = 400, easing = cubicOut, axis = "y" } = {}) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const primary_property = axis === "y" ? "height" : "width";
  const primary_property_value = parseFloat(style[primary_property]);
  const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
  const capitalized_secondary_properties = secondary_properties.map(
    (e) => `${e[0].toUpperCase()}${e.slice(1)}`
  );
  const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
  const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
  const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
  const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
  const border_width_start_value = parseFloat(
    style[`border${capitalized_secondary_properties[0]}Width`]
  );
  const border_width_end_value = parseFloat(
    style[`border${capitalized_secondary_properties[1]}Width`]
  );
  return {
    delay,
    duration,
    easing,
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;`
  };
}
const Autocomplete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let listedOptions;
  let optionsFiltered;
  let sliceLimit;
  let classesBase;
  let classesNav;
  let classesList;
  let classesItem;
  let classesButton;
  let classesEmpty;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  createEventDispatcher();
  let { input = void 0 } = $$props;
  let { options = [] } = $$props;
  let { limit = void 0 } = $$props;
  let { allowlist = [] } = $$props;
  let { denylist = [] } = $$props;
  let { emptyState = "No Results Found." } = $$props;
  let { regionNav = "" } = $$props;
  let { regionList = "list-nav" } = $$props;
  let { regionItem = "" } = $$props;
  let { regionButton = "w-full" } = $$props;
  let { regionEmpty = "text-center" } = $$props;
  let { filter = filterOptions } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = slide } = $$props;
  let { transitionInParams = { duration: 200 } } = $$props;
  let { transitionOut = slide } = $$props;
  let { transitionOutParams = { duration: 200 } } = $$props;
  function filterByAllowDeny(allowlist2, denylist2) {
    let _options = [...options];
    if (allowlist2.length) {
      _options = _options.filter((option) => allowlist2.includes(option.value));
    }
    if (denylist2.length) {
      _options = _options.filter((option) => !denylist2.includes(option.value));
    }
    if (!allowlist2.length && !denylist2.length) {
      _options = options;
    }
    listedOptions = _options;
  }
  function filterOptions() {
    let _options = [...listedOptions];
    _options = _options.filter((option) => {
      const inputFormatted = String(input).toLowerCase().trim();
      let optionFormatted = JSON.stringify([option.label, option.value, option.keywords]).toLowerCase();
      if (optionFormatted.includes(inputFormatted))
        return option;
    });
    return _options;
  }
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  if ($$props.allowlist === void 0 && $$bindings.allowlist && allowlist !== void 0)
    $$bindings.allowlist(allowlist);
  if ($$props.denylist === void 0 && $$bindings.denylist && denylist !== void 0)
    $$bindings.denylist(denylist);
  if ($$props.emptyState === void 0 && $$bindings.emptyState && emptyState !== void 0)
    $$bindings.emptyState(emptyState);
  if ($$props.regionNav === void 0 && $$bindings.regionNav && regionNav !== void 0)
    $$bindings.regionNav(regionNav);
  if ($$props.regionList === void 0 && $$bindings.regionList && regionList !== void 0)
    $$bindings.regionList(regionList);
  if ($$props.regionItem === void 0 && $$bindings.regionItem && regionItem !== void 0)
    $$bindings.regionItem(regionItem);
  if ($$props.regionButton === void 0 && $$bindings.regionButton && regionButton !== void 0)
    $$bindings.regionButton(regionButton);
  if ($$props.regionEmpty === void 0 && $$bindings.regionEmpty && regionEmpty !== void 0)
    $$bindings.regionEmpty(regionEmpty);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0)
    $$bindings.filter(filter);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  listedOptions = options;
  {
    filterByAllowDeny(allowlist, denylist);
  }
  optionsFiltered = input ? filter() : listedOptions;
  sliceLimit = limit ?? optionsFiltered.length;
  classesBase = `${$$props.class ?? ""}`;
  classesNav = `${regionNav}`;
  classesList = `${regionList}`;
  classesItem = `${regionItem}`;
  classesButton = `${regionButton}`;
  classesEmpty = `${regionEmpty}`;
  $$unsubscribe_prefersReducedMotionStore();
  return ` <div class="${"autocomplete " + escape(classesBase, true)}" data-testid="autocomplete">${optionsFiltered.length > 0 ? `<nav class="${"autocomplete-nav " + escape(classesNav, true)}"><ul class="${"autocomplete-list " + escape(classesList, true)}">${each(optionsFiltered.slice(0, sliceLimit), (option) => {
    return `<li class="${"autocomplete-item " + escape(classesItem, true)}"><button class="${"autocomplete-button " + escape(classesButton, true)}" type="button"><!-- HTML_TAG_START -->${option.label}<!-- HTML_TAG_END --></button> </li>`;
  })}</ul></nav>` : `<div class="${"autocomplete-empty " + escape(classesEmpty, true)}"><!-- HTML_TAG_START -->${emptyState}<!-- HTML_TAG_END --></div>`}</div>`;
});

export { Autocomplete as A };
//# sourceMappingURL=Autocomplete-BMm5REkW.js.map
