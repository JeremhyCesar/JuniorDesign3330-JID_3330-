function getProgress() {
  if (localStorage.getItem("progress") != null) {
    return localStorage.getItem("progress");
  } else {
    localStorage.setItem("progress", {});
    return localStorage.getItem("progress");
  }
}