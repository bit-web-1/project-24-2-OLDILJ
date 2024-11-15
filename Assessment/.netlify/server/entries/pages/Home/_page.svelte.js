function ButtonSelector($$payload) {
  $$payload.out += `<div class="wrapper svelte-14jrl54"><a href="/New" class="New svelte-14jrl54">New</a> <a href="/Load" class="Load svelte-14jrl54">Load</a> <a href="/Options" class="Options svelte-14jrl54">Options</a> <p class="Prior svelte-14jrl54">Prior Runs</p></div>`;
}
function _page($$payload) {
  $$payload.out += `<h1 class="title">Welcome</h1> `;
  ButtonSelector($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
