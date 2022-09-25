const inputRef = document.querySelector('#font-size-control')
console.log(inputRef);
const textRef = document.querySelector('#text')
console.log(textRef);
const inputChange = (event) => {
textRef.style.fontSize =` ${event.target.value}px`    
}
inputRef.addEventListener('input', inputChange)