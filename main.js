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

// Show the "Back to Top" button after scrolling down a certain amount
window.addEventListener("scroll", function() {
    const backToTopButton = document.getElementById("backToTop");
    if (window.scrollY > 300) {  // Adjust 300 to the point where you want it to appear
        backToTopButton.style.opacity = "1";
        backToTopButton.style.visibility = "visible";
    } else {
        backToTopButton.style.opacity = "0";
        backToTopButton.style.visibility = "hidden";
    }
});

// Scroll smoothly to the top when the button is clicked
document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// FADE IN ANIMATIONS LEFT RIGHT BOTTOM

//LEFT
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with .fade-in-left
    const fadeInElements = document.querySelectorAll(".fade-in-left");
    
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          // Check if the element is in view
          if (entry.isIntersecting) {
            // Add .visible to start the animation
            entry.target.classList.add("visible");
            // Optionally stop observing this element after it becomes visible
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1 // Adjust as needed; 0.1 means element is 10% in view
      }
    );

    // Observe each element
    fadeInElements.forEach((el) => observer.observe(el));
  });
//test comment
//   document.addEventListener("DOMContentLoaded", () => {
//     // IntersectionObserver setup
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//         } else {
//           // Remove .visible to fade out again if scrolling out of viewport
//           entry.target.classList.remove("visible");
//         }
//       });
//     });
  
//     // Select all elements to observe
//     const fadeInElements = document.querySelectorAll(".fade-in-left");
  
//     // Observe each element
//     fadeInElements.forEach((el) => observer.observe(el));
//   });
  

//RIGHT

  document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with .fade-in-left
    const fadeInElements = document.querySelectorAll(".fade-in-right");
    
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          // Check if the element is in view
          if (entry.isIntersecting) {
            // Add .visible to start the animation
            entry.target.classList.add("visible");
            // Optionally stop observing this element after it becomes visible
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1 // Adjust as needed; 0.1 means element is 10% in view
      }
    );

    // Observe each element
    fadeInElements.forEach((el) => observer.observe(el));
  });

//   document.addEventListener("DOMContentLoaded", () => {
//     // IntersectionObserver setup
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//         } else {
//           // Remove .visible to fade out again if scrolling out of viewport
//           entry.target.classList.remove("visible");
//         }
//       });
//     });
  
//     // Select all elements to observe
//     const fadeInElements = document.querySelectorAll(".fade-in-right");
  
//     // Observe each element
//     fadeInElements.forEach((el) => observer.observe(el));
//   });
  


  //BOTTOM
  document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with .fade-in-left
    const fadeInElements = document.querySelectorAll(".fade-in-bottom");
    
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          // Check if the element is in view
          if (entry.isIntersecting) {
            // Add .visible to start the animation
            entry.target.classList.add("visible");
            // Optionally stop observing this element after it becomes visible
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1 // Adjust as needed; 0.1 means element is 10% in view
      }
    );

    // Observe each element
    fadeInElements.forEach((el) => observer.observe(el));
  });

//   document.addEventListener("DOMContentLoaded", () => {
//     // IntersectionObserver setup
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//         } else {
//           // Remove .visible to fade out again if scrolling out of viewport
//           entry.target.classList.remove("visible");
//         }
//       });
//     });
  
//     // Select all elements to observe
//     const fadeInElements = document.querySelectorAll(".fade-in-bottom");
  
//     // Observe each element
//     fadeInElements.forEach((el) => observer.observe(el));
//   });
  
