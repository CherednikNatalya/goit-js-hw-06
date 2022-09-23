const formRer = document.querySelector('#validation-input')
console.log(formRer );
const handSubmit = (event) => {
    event.preventDefault();
    console.log('event',event.target.elements);

} 
formRer.addEventListener('submit',handSubmit)