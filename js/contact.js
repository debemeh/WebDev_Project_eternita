<script>
       document.getElementById('contactForm').addEventListener('submit', function(event) {
            const emailField = document.getElementById('email');
            const emailValue = emailField.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(emailValue)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
            }
        })
    </script>

