function load({ cookies }) {
  cookies.get("visited");
  const GameInProgress = cookies.get("InProgress");
  cookies.set("visited", "true", { path: "/" });
  return {
    GameInProgress
  };
}
export {
  load
};
