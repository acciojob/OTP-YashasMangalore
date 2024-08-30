document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
        // Handle input changes
        input.addEventListener('input', () => {
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        // Handle backspace key press
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value === '' && index > 0) {
                inputs[index - 1].focus();
            }
        });

        // Add focused class on focus
        input.addEventListener('focus', () => {
            inputs.forEach(input => input.classList.remove('focused')); // Remove 'focused' class from all inputs
            input.classList.add('focused'); // Add 'focused' class to the currently focused input
        });

        // Remove focused class on blur
        input.addEventListener('blur', () => {
            input.classList.remove('focused');
        });
    });
});
