function fixedHeader() {
  const fh = document.getElementById("bg-black-header");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      fh.classList.add("is-show");
    } else {
      fh.classList.remove("is-show");
    }
  });
}

fixedHeader();