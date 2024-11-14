import { e as escape_html } from "../../../chunks/escaping.js";
import { E as pop, B as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  $$payload.out += `<p>Testing cookies ${escape_html(data.visited ? "Visited = true" : "Visited = False")}!</p>`;
  pop();
}
export {
  _page as default
};
