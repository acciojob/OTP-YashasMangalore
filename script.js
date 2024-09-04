document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.code');

   inputs.forEach((input, index) => {
        // Input event to automatically move to the next input when the current input is filled
        input.addEventListener('input', () => {
            // Add the 'focused' class to the current input
            input.classList.add('focused');
            
            // Remove the 'focused' class from other inputs
            inputs.forEach((otherInput, otherIndex) => {
                if (otherIndex !== index) {
                    otherInput.classList.remove('focused');
                }
            });
            
            if (input.value.length === 1 && index < inputs.length - 1) {
                // Move focus to the next input
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
