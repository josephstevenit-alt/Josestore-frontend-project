export const scrollReveal = (elements, options = {}) => {
  if (!elements) return;

  const defaultOptions = {
    threshold: 0.2,
    rootMargin: "0px",
    animationClass: "reveal-visible",
  };

  const finalOptions = { ...defaultOptions, ...options };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(finalOptions.animationClass);
        observer.unobserve(entry.target);
      }
    });
  }, finalOptions);

  // If a single element is passed
  if (elements instanceof Element) {
    observer.observe(elements);
  }

  // If multiple elements are passed (NodeList or Array)
  else if (elements.length) {
    elements.forEach((el) => observer.observe(el));
  }
};
