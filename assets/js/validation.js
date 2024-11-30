// Form validation functions
function validateName(name) {
    return name.trim().length >= 3 && name.trim().length <= 50;
}

function validatePhone(phone) {
    return /^[0-9]{6,15}$/.test(phone.replace(/\D/g, ''));
}

function validateEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function validateMessage(message) {
    return message.trim().length >= 10;
}

function showError(input, message) {
    const errorDiv = input.parentElement.querySelector('.error-message');
    input.classList.add('invalid');
    input.classList.remove('valid');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.style.opacity = '1';
    }
}

function clearError(input) {
    const errorDiv = input.parentElement.querySelector('.error-message');
    input.classList.remove('invalid');
    input.classList.add('valid');
    if (errorDiv) {
        errorDiv.style.opacity = '0';
    }
}

function validateForm(form) {
    let isValid = true;
    
    // Name validation
    const nameInput = form.querySelector('input[name="name"]');
    if (!validateName(nameInput.value)) {
        showError(nameInput, 'El nombre debe tener entre 3 y 50 caracteres');
        isValid = false;
    } else {
        clearError(nameInput);
    }

    // Phone validation
    const phoneInput = form.querySelector('input[name="phone"]');
    if (!validatePhone(phoneInput.value)) {
        showError(phoneInput, 'Ingrese un número válido (6-15 dígitos)');
        isValid = false;
    } else {
        clearError(phoneInput);
    }

    // Email validation
    const emailInput = form.querySelector('input[name="email"]');
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Ingrese un correo electrónico válido');
        isValid = false;
    } else {
        clearError(emailInput);
    }

    // Message validation
    const messageInput = form.querySelector('textarea[name="message"]');
    if (!validateMessage(messageInput.value)) {
        showError(messageInput, 'El mensaje debe tener al menos 10 caracteres');
        isValid = false;
    } else {
        clearError(messageInput);
    }

    return isValid;
}

// Add input event listeners for real-time validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            clearError(input);
        });

        input.addEventListener('blur', () => {
            switch(input.name) {
                case 'name':
                    if (!validateName(input.value)) {
                        showError(input, 'El nombre debe tener entre 3 y 50 caracteres');
                    } else {
                        clearError(input);
                    }
                    break;
                case 'phone':
                    if (!validatePhone(input.value)) {
                        showError(input, 'Ingrese un número válido (6-15 dígitos)');
                    } else {
                        clearError(input);
                    }
                    break;
                case 'email':
                    if (!validateEmail(input.value)) {
                        showError(input, 'Ingrese un correo electrónico válido');
                    } else {
                        clearError(input);
                    }
                    break;
                case 'message':
                    if (!validateMessage(input.value)) {
                        showError(input, 'El mensaje debe tener al menos 10 caracteres');
                    } else {
                        clearError(input);
                    }
                    break;
            }
        });
    });
});
