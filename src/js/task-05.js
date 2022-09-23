const refs = {
input:document.querySelector('#name-input'),
nameLable:document.querySelector('#name-output'),

}
const defaultNameLable = refs.nameLable.textContent;
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (refs.input ===''){
        return defaultNameLable;
    } else 
    refs.nameLable.textContent = event.currentTarget.value;
}


