const myButton = document.getElementById("mybutton");
// console.log(myButton);
myButton.addEventListener('click', function() {
    console.log('Button clicked');
})




const body = document.querySelector('body');
// const body = document.querySelector('.blue-background');
console.log(body);

// const buttonBackground = getdocument.querySelector('button-background');
// const buttonBackground = document.getElementById('button-background');
const buttonBackground = document.querySelector('.btn-background');
console.log(buttonBackground);

buttonBackground.addEventListener('click', function () {
    body.classList.toggle('red-background');
})


