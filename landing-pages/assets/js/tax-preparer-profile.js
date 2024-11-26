$(document).ready(function() {
    $('select').niceSelect();
  });

//   file input
document.querySelector('.tax-profile-input').addEventListener('click',function(){
    document.getElementById('fileInput').click();
})

// counter
document.addEventListener("DOMContentLoaded", function() {
    (() => {
        const counters = document.querySelectorAll('.experience-summary');
      
        const startCounting = (counter) => {
          const counterValue = counter.querySelector('.experience-summary-number');
          const target = +counter.getAttribute('data-target');
          const speed = +counter.getAttribute('data-speed');
          const increment = target / (speed / 100);
      
          let currentValue = 0;
      
          const updateCounter = () => {
            currentValue += increment;
            if (currentValue < target) {
              counterValue.textContent = Math.ceil(currentValue);
              setTimeout(updateCounter, 100);
            } else {
              counterValue.textContent = target;
            }
          };
      
          updateCounter();
        };
      
        const observerOptions = {
          root: null,
          threshold: 0.1
        };
      
        const observerCallback = (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              startCounting(entry.target);
              observer.unobserve(entry.target);
            }
          });
        };
      
        const observer = new IntersectionObserver(observerCallback, observerOptions);
      
        counters.forEach(counter => {
          observer.observe(counter);
        });
    })();
});








