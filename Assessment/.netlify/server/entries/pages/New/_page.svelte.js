import { L as attr, E as pop, B as push } from "../../../chunks/index.js";
const Char1 = "/_app/immutable/assets/Char1.Cg2A39RQ.png";
const Char2 = "/_app/immutable/assets/Char2.C7ocgeB1.png";
const Char3 = "/_app/immutable/assets/Char3.BnhTwUgM.png";
function _page($$payload, $$props) {
  push();
  new URL("....libCharactersChar1.png", import.meta.url).href;
  $$payload.out += `<h1 class="Title">Select Your Character</h1> <form method="POST"><div class="Wrapper"><label><input type="radio" name="CharSelect" value="Char1"> <img${attr("src", Char1)} alt="Char1" class="Char1"></label> <label><input type="radio" name="CharSelect" id="Char2"> <img${attr("src", Char2)} alt="Char2" class="Char2"></label> <label><input type="radio" name="CharSelect" id="Char3"> <img${attr("src", Char3)} alt="Char3" class="Char3"></label> <div class="HiddenDetail"><p>Light Weight. High Speed Low Attack</p></div> <div class="HiddenDetail"><p>Heavy Weight. High Attack Low Speed</p></div> <div class="HiddenDetail"><p>??? Weight. ??? Attack ??? Speed</p></div></div></form>`;
  pop();
}
export {
  _page as default
};
