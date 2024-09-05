document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  function checkVisibility() {
      const windowHeight = window.innerHeight;
      
      elements.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.top < windowHeight && rect.bottom > 0) {
              element.classList.add('in-view');
          }
      });
  }
  
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  checkVisibility(); // Initial check
});

