// TO DO: Add scroll animations and effects
// ex. you can fade in slides as they come into view
// function to set the background image for each slide
function setSlideBackgrounds() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => {
    const backgroundImage = slide.getAttribute("data-background");
    slide.style.backgroundImage = `url(${backgroundImage})`;
  });
}
setSlideBackgrounds();

// function to wrap each word in a span
function wrapWords(element) {
  const text = element.innerText;
  element.innerHTML = text
    .split(" ")
    .map((word) => {
      return `<span>${word}</span>`;
    })
    .join(" ");
}

const slides = document.querySelectorAll(".slide p");
slides.forEach((slide) => {
  wrapWords(slide);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      } else {
        entry.target.style.opacity = 0;
        entry.target.style.transform = "translateY(20px)";
      }
    });
  },
  {
    threshold: 0.5, // trigger when 50% of the slide is visible
  }
);

slides.forEach((slide) => {
  slide.style.opacity = 0;
  slide.style.transform = "translateY(20px)";
  slide.style.transition = "opacity 1s ease, transform 1s ease";
  observer.observe(slide);
});
