const formEmailRef = document.querySelector('.login-form')
console.log(formEmailRef);

const handleSubmit = (event) => {
    event.preventDefault();
    const {
      elements: {email, password}
    } = event.currentTarget;

    // console.log(email.value);
    // console.log(password.value);
if (email.value === "" || password.value === "") {
        alert('Заповніть всі поля');
        return;
      }
    
const userData = {
        Email: email.value,
        Password: password.value,
      };
console.log(userData);
event.currentTarget.reset();
}
formEmailRef.addEventListener('submit', handleSubmit)