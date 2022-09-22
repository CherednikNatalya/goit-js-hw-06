
const listRef = document.querySelector('#categories');
console.log(`Number of categories: ${listRef.children.length}`);

const item = document.querySelectorAll('.item'); 

item.forEach (item => {
   const title = item.querySelector('h2');
   const amounElements = item .querySelectorAll('li');
   console.log(`Category: ${title.textContent}`);
   console.log(`Elements: ${amounElements.length}`);
});
    
