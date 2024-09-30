document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('.animated-heading');
    heading.classList.add('animated'); // Add the 'animated' class to trigger the animation
  });
  

  function validateForm() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var warningMessage = document.getElementById('warningMessage');

    if (password !== confirmPassword) {
      warningMessage.style.display = 'block'; // Show the warning message
      setTimeout(function() {
        warningMessage.style.display = 'none'; // Hide the warning message after a few seconds
      }, 3000); // Adjust the time (in milliseconds) as needed
      return false;
    } else {
      warningMessage.style.display = 'none'; // Hide the warning message
      return true;
    }
  }