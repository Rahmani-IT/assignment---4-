(() => {
    'use strict';

    const form = document.getElementById('registerForm');
    if (!form) return;

    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const confirmFeedback = document.getElementById('confirmFeedback');
    const genderInvalid = document.getElementById('genderInvalid');
    const genderValid = document.getElementById('genderValid');
    const genderInputs = form.querySelectorAll('input[name="gender"]');

    // Passwords must match
    const checkPasswordMatch = () => {
        const isEmpty = confirmPassword.value === '';
        const matches = confirmPassword.value === password.value;

        confirmPassword.setCustomValidity(matches ? '' : 'Passwords do not match');
        confirmFeedback.textContent = isEmpty
            ? 'Please confirm your password.'
            : 'Passwords do not match.';
    };

    const updateGenderFeedback = () => {
        if (!form.classList.contains('was-validated')) return;

        const selected = [...genderInputs].some(input => input.checked);
        genderInvalid.classList.toggle('d-block', !selected);
        genderValid.classList.toggle('d-block', selected);
    };

    password.addEventListener('input', checkPasswordMatch);
    confirmPassword.addEventListener('input', checkPasswordMatch);
    genderInputs.forEach(input => input.addEventListener('change', updateGenderFeedback));

    form.addEventListener('submit', event => {

        event.preventDefault();

        checkPasswordMatch();
        form.classList.add('was-validated');
        updateGenderFeedback();

        if (form.checkValidity()) {
            alert('Registration successful!');
        }
    });

    form.addEventListener('reset', () => {
        setTimeout(() => {
            form.classList.remove('was-validated');
            confirmPassword.setCustomValidity('');
            confirmFeedback.textContent = 'Please confirm your password.';
            genderInvalid.classList.remove('d-block');
            genderValid.classList.remove('d-block');
        }, 0);
    });
})();
