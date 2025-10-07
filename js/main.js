document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.querySelector('.contact-form');
  const formMessage = document.querySelector('.form-message');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name === '' || email === '' || message === '') {
        showMessage('Por favor, completa todos los campos.', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        showMessage('Por favor, introduce un email válido.', 'error');
        return;
      }

      const mailtoLink = `mailto:alboroinfo@gmail.com?subject=Mensaje de ${name}&body=${encodeURIComponent(
        message
      )}%0A%0AEmail: ${email}`;

      window.location.href = mailtoLink;

      showMessage('Redirigiendo a tu cliente de correo...', 'success');
      contactForm.reset();
    });
  }

  function showMessage(message, type) {
    if (formMessage) {
      formMessage.textContent = message;
      formMessage.className = `form-message ${type}`;
    }
  }

  function isValidEmail(email) {
    const re = /^(([^<>()[\\]\\.,;:\s@\"]+(\.[^<>()[\\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});
