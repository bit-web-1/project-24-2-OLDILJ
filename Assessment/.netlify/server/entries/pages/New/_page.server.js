import "../../../chunks/index2.js";
function load({ cookies }) {
  cookies.get("priorRuns");
  const visited = cookies.get("visited");
  const InProgress = cookies.get("InProgress");
  cookies.set("visited", "true", { path: "/" });
  let CharVal = 0;
  cookies.set("Character", { CharVal }, { path: "/" });
  return {
    InProgress: InProgress === "true",
    visited: visited === "true"
  };
}
export {
  load
};
