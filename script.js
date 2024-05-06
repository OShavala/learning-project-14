
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(function(star, index) {
      star.addEventListener('click', function() {
        resetStars();
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add('active');
        }
      });
    });
    
    function resetStars() {
      stars.forEach(function(star) {
        star.classList.remove('active');
      });
    }
  });
  