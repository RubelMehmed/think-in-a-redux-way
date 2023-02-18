// select dom element

const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

// intial state
let count = 0;

//event listeners
incrementEl.addEventListener('click', () => {
    count++;
    counterEl.innerText = count;
})

decrementEl.addEventListener('click', () => {
    count--;
    counterEl.innerText = count;

})