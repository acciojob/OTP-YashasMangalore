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

const codes = document.querySelectorAll('.code');

// Assign IDs and add event listeners
codes.forEach((code, idx) => {
    code.setAttribute("id", `code-${idx + 1}`);
    
    code.addEventListener('keydown', (event) => {
        event.preventDefault();

        if (event.key >= "0" && event.key <= "9") {
            code.value = event.key;

            // Move focus to the next input if it exists
            if (idx < codes.length - 1) {
                codes[idx + 1].focus();
            }
        } else if (event.key === "Backspace") {
            if (code.value === "" && idx > 0) {
                // Move focus to the previous input if it's empty and exists
                codes[idx - 1].focus();
                codes[idx - 1].value = "";
            }
        }
    });
});
