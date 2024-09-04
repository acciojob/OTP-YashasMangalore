// document.addEventListener('DOMContentLoaded', () => {
//     const inputs = document.querySelectorAll('.code');

//     inputs.forEach((input, index) => {
//         input.addEventListener('input', () => {
//             // Remove 'focused' class from all inputs
//             inputs.forEach(input => input.classList.remove('focused'));
//             // Add 'focused' class to the current input
//             input.classList.add('focused');

//             if (input.value.length === 1 && index < inputs.length - 1) {
//                 inputs[index + 1].focus();
//             }
//         });

//         input.addEventListener('keydown', (e) => {
//             if (e.key === 'Backspace' && input.value === '' && index > 0) {
//                 inputs[index - 1].focus();
//                 e.preventDefault();
//             } else if (!/^[0-9]$/.test(e.key) && e.key !== 'Backspace') {
//                 e.preventDefault();
//             }
//         });

//         input.addEventListener('focused', () => {
//             inputs.forEach(input => input.classList.remove('focused'));
//             input.classList.add('focused');
//         });

//         input.addEventListener('focused', () => {
//             input.classList.remove('focused');
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const codes = document.querySelectorAll('.code');

    codes.forEach((code, idx) => {
        // Set unique ID if needed
        code.setAttribute('id', `code-${idx + 1}`);
        
        // Event listener for keydown events
        code.addEventListener('keydown', (event) => {
            if (event.key >= '0' && event.key <= '9') {
                event.preventDefault();
                
                // Set value and focus next input
                code.value = event.key;
                if (idx < codes.length - 1) {
                    codes[idx + 1].focus();
                }
            } else if (event.key === 'Backspace') {
                event.preventDefault();
                
                // Clear current input and focus previous input
                if (code.value === '' && idx > 0) {
                    codes[idx - 1].focus();
                    codes[idx - 1].value = '';
                } else {
                    code.value = '';
                }
            }
        });

        // Event listener for input events to ensure only one character
        code.addEventListener('input', () => {
            if (code.value.length > 1) {
                code.value = code.value.slice(-1);
            }
        });

        // Event listener for focus events
        code.addEventListener('focus', () => {
            codes.forEach(input => input.classList.remove('focused'));
            code.classList.add('focused');
        });

        // Event listener for blur events
        code.addEventListener('blur', () => {
            code.classList.remove('focused');
        });
    });
});
