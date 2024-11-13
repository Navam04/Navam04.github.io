// Typewriter effect for rotating text
const phrases = [
    "Navam Goyani",
    "Computer Science @ U of T",
    "Game Developer @ MZN-X Studios"
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const delayBetweenPhrases = 2000;
  const typewriterElement = document.getElementById("typewriter-text");
  
  function type() {
    const currentPhrase = phrases[phraseIndex];
    if (charIndex < currentPhrase.length) {
      typewriterElement.innerHTML += currentPhrase.charAt(charIndex);
      charIndex++;
      setTimeout(type, typeSpeed);
    } else {
      setTimeout(erase, delayBetweenPhrases);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
        typewriterElement.innerHTML = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, deleteSpeed);
    } else {
        typewriterElement.innerHTML = "&nbsp;"; // Keeps space while waiting
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, typeSpeed);
    }
}
  
  // Start the typewriter effect
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, delayBetweenPhrases);
  });

  document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a[href^='#']");

    // Function to perform smooth scroll
    function smoothScroll(target, duration) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - 50;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Ease function for smooth scrolling effect
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Attach click event to all anchor links for smooth scrolling
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                smoothScroll(targetElement, 1500);  // Set duration in milliseconds (e.g., 1500ms = 1.5 seconds)
            }
        });
    });
});