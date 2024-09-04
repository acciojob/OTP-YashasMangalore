document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            // Handle backspace to move focus to the previous input if empty
            if (e.key === 'Backspace' && input.value === '' && index > 0) {
                inputs[index - 1].focus();
                e.preventDefault(); // Prevent default backspace action
            }
            // Handle non-numeric input
            else if (!/^[0-9]$/.test(e.key) && e.key !== 'Backspace') {
                e.preventDefault(); // Prevent non-numeric characters
            }
        });

        input.addEventListener('focus', () => {
            inputs.forEach(input => input.classList.remove('focused')); // Remove 'focused' class from all inputs
            input.classList.add('focused'); // Add 'focused' class to the currently focused input
        });

        input.addEventListener('blur', () => {
            input.classList.remove('focused');
        });
    });
});
