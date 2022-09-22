const counter = {
  value: 0,
  incremen () {
    this.value += 1;
  },
  decremen () {
    this.value -= 1;
  }, 
};

const decrementBtn = document.querySelector('[data-action="decrement"]')
console.log(decrementBtn);
const value = document.querySelector('#value')
const counterValue = value.textContent;
console.log(counterValue);
const incrementBtn = document.querySelector('[data-action="increment"]')
console.log(incrementBtn);

decrementBtn.addEventListener("click", function () {
  counter.decremen();
  console.log(counter);
  value.textContent = counter.value;
  });

  incrementBtn.addEventListener("click", function () {
    counter.incremen();
    console.log(counter);
    value.textContent = counter.value;
    });


