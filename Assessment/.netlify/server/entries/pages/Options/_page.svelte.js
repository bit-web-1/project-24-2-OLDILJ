import { I as escape_html, E as pop, B as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  $$payload.out += `<p>Testing cookies ${escape_html(data.visited ? "Visited = true" : "Visited = False")}!</p>`;
  pop();
}
export {
  _page as default
};
