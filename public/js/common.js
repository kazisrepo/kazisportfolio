// Go to top button - starts
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const scrollToBottom = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};

document
  .getElementById("btnScrollToTop")
  .addEventListener("click", scrollToTop);
