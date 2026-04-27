const scrollToHash = (hash: string) =>
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });

export default scrollToHash;
