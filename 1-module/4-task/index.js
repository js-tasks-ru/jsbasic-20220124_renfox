function checkSpam(str) {
  let lowers = str.toLowerCase();
  if (lowers.includes("1xbet") || lowers.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}
