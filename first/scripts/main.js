let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/dog.jpg') 
    {
        myImage.setAttribute('src', 'images/cat.jpg');
    } else {
        myImage.setAttribute('src', 'images/dog.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let name = prompt();
    if (!name || name === null) 
    {
        setUserName();
    }
    localStorage.setItem('name', name);
    myHeading.textContent = "加油 冲！" + name;
}

if (!localStorage.getItem('name')) 
{
    setUserName(); 
} else {
    myHeading.textContent = "加油 冲！" + localStorage.getItem('name');
}

myButton.onclick = function() {
    setUserName();
};