function load({ cookies }) {
  const priorRuns = cookies.get("priorRuns");
  const visited = cookies.get("visited");
  const GameInProgress = cookies.get("InProgress");
  cookies.set("visited", "true", { path: "/" });
  cookies.set("InProgress", "true", { path: "/" });
  if (cookies.set("priorRuns") == null, void 0)
    ;
  cookies.set("priorRuns", Number(priorRuns) + 1, { path: "/" });
  return {
    visited: visited === "true",
    InProgress: GameInProgress === "true"
  };
}
export {
  load
};
