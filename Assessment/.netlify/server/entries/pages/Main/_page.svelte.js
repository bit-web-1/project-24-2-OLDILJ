import { I as escape_html, E as pop, B as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  $$payload.out += `<h1>Hello ${escape_html(data.visited ? "friend" : "stranger")}!</h1>`;
  pop();
}
export {
  _page as default
};
