const formRer = document.querySelector('#validation-input')
// const inputLength= document.querySelector('data-length')

const inputLength= formRer.getAttribute('data-length')

const onInputBlur = (event) => {
  const isValid = event.currentTarget.value.length >= Number(inputLength)
  if(isValid) {
    event.currentTarget.classList.add('valid') 
  } else {
    event.currentTarget.classList.add('invalid')
  }  
}
formRer.addEventListener('blur', onInputBlur);

