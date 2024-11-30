// Funções do Modal
function showModal(message, isError = false) {
    const modal = document.getElementById('message-modal');
    const modalMessage = document.getElementById('modal-message');
    
    modalMessage.textContent = message;
    modalMessage.className = isError ? 'error-message' : 'success-message';
    
    modal.classList.add('show');
    
    // Fechar modal ao clicar no X
    document.querySelector('.close-modal').onclick = function() {
        modal.classList.remove('show');
    }
    
    // Fechar modal ao clicar fora dele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('show');
        }
    }
    
    // Fechar modal automaticamente após 5 segundos
    setTimeout(() => {
        modal.classList.remove('show');
    }, 5000);
}

function sendEmail(event) {
    event.preventDefault();

    const form = document.getElementById('contact-form');
    
    // Validate form before sending
    if (!validateForm(form)) {
        return false;
    }

    const name = form.querySelector('input[name="name"]').value;
    const countryCode = form.querySelector('#country_code').value;
    const phone = form.querySelector('input[name="phone"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    const btn = form.querySelector('button[type="submit"]');
    const originalBtnText = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = 'Enviando...';

    const templateParams = {
        from_name: name,
        from_email: email,
        phone_number: countryCode + ' ' + phone,
        message: message
    };

    emailjs.send('service_50rhsz4', 'template_01', templateParams)
        .then(function(response) {
            showModal('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.');
            form.reset();
            // Clear any remaining error states
            form.querySelectorAll('input, textarea').forEach(input => clearError(input));
        }, function(error) {
            showModal('Lo siento, hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.', true);
        })
        .finally(() => {
            btn.disabled = false;
            btn.innerHTML = originalBtnText;
        });

    return false;
}
