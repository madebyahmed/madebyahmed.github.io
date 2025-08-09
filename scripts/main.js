// Animations
AOS.init({
  anchorPlacement: "top-left",
  duration: 1000,
});

// Add your javascript here

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      // Ensure it's an element node
      if (node.tagName === "IFRAME" && node.getAttribute("height") === "30px") {
        node.remove();
      }
    });
  });
});

window.addEventListener("DOMContentLoaded", () => {
  observer.observe(document, {
    childList: true,
    subtree: true,
  });
  console.log("MutationObserver started");
});
