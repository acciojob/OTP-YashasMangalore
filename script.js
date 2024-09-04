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

const codes=document.querySelectorAll('.code');
codes.forEach((code,idx)=>{
	code.setAttribute("id",`code-${++idx}`);
	code.addEventListener('keydown', (event) => {
		event.preventDefault();
		if(event.key>="0" && event.key<="9")
		{
			codes[idx].value=event.key;
			codes[idx+1] && codes[idx+1].focused();
		}
		else if(event.key==="Backspace")
		{
			if(codes[idx-1])
			{
				codes[idx].remove('focused');
				codes[idx-1].focused();
				codes[idx-1].value="";
			}
		}
	});
});