function anotherInsecurePassword() {
  // GOOD: the random suffix is cryptographically secure
  var suffixArray = new Uint32Array(1);
  window.crypto.getRandomValues(suffixArray);
  var suffix = suffixArray[0];
  var password = "sssAAAA" + suffix;
  return password;
}