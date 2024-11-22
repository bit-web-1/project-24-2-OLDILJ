async function load() {
  var RadioOption = Document.getElementsByName("CharSelect");
  var HiddenDiv = Document.getElementsByClassName("HiddenDetail");
  for (var i = 0; i < RadioOption.length; i++) {
    RadioOption[addEventListener("click", function() {
      if (this.checked) {
        HiddenDiv.style.display = "grid";
      } else {
        HiddenDiv.style.display = "none";
      }
    })];
  }
  return {};
}
export {
  load
};
