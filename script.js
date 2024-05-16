// validation.js
function validateForm() {
    // Clear previous error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('phone-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    let isValid = true;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate name
    if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Invalid email format';
        isValid = false;
    }
      // Validate phone
      const phoneRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!phoneRegex.test(email)) {
          document.getElementById('phone-error').textContent = 'Invalid phone number';
          isValid = false;
      }

    // Validate query
    if (query.length < 50) {
        document.getElementById('query-error').textContent = 'Mandatory';
        isValid = false;
    }

    return isValid;
}
