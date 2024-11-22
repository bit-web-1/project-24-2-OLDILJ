import { I as escape_html, E as pop, B as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  $$payload.out += `<p>${escape_html(data.GameInProgress ? "Game Is In Progress" : "No Game Found")}</p>`;
  pop();
}
export {
  _page as default
};
