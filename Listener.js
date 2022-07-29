window.addEventListener("load", () => {
    const loader = document.querySelector(".loader").classList.add("loader--hidden");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });