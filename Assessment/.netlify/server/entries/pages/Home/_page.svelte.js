function ButtonSelector($$payload) {
  $$payload.out += `<div class="wrapper svelte-jfrljm"><a href="/Main" class="New svelte-jfrljm">New</a> <a href="/Load" class="Load svelte-jfrljm">Load</a> <a href="/Options" class="Options svelte-jfrljm">Options</a> <p class="Prior svelte-jfrljm">Prior Runs</p></div>`;
}
function _page($$payload) {
  $$payload.out += `<h1 class="title">Welcome</h1> `;
  ButtonSelector($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
