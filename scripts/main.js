// JavaScript für die Hochzeitswebseite

document.addEventListener('DOMContentLoaded', function() {
  console.log('Hochzeitswebseite geladen!');
  
  // Hier können später interaktive Funktionen hinzugefügt werden
  // z.B. Bildergalerie, RSVP-Formulare, etc.
  
  // Smooth Scrolling für Navigation (falls später hinzugefügt)
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
