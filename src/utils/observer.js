export const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("play");
      obs.unobserve(entry.target); // se ejecuta solo una vez
    }
  });
});
