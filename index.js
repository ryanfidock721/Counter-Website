const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const countLabel = document.getElementById('countLabel');

//Count is defined as a value of 0
let count = 0;

    //increaseBtn is the html button class name.
    //When increaseBtn is clicked, it executes the function
    //"count++" which adds one to the count value.
    //the .textcontent property is then used on countLabel to change the value of count on the html page
increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}
