const heightEl = document.getElementById('height');
// const height = heightEl.value;
const weightEl = document.getElementById('weight');
// const weight = weightEl.value;
const buttonPress = document.querySelector('button');
//
const result = document.getElementById('results');

buttonPress.addEventListener('click', (event) => {
    event.preventDefault();
    if(isNaN(heightEl.value) || heightEl.value <= 0){
        alert('The provided value for height is invalid!');
    }
    else if(isNaN(weightEl.value) || weightEl.value <= 0){
        alert('The provided value for weight is invalid!');
    }
    const bmi = (weightEl.value / ((heightEl.value * heightEl.value) / 10000)).toFixed(2);
    // console.log(bmi);
    // const p = document.createElement('p');
    // p.innerHTML = bmi;
    result.append(bmi);
    // step 1: create element
    // step 2: append bmi to that element
    // step 3: append that element to results div
})