"use strict";

let idField = document.querySelector("#bookId");
let getButton = document.querySelector("#getButton");
let resultPara = document.querySelector("#resultBox");

let nameField = document.querySelector("#nameField");
let authorField = document.querySelector("#authorField");

let postData = () => {
    let num = Number(idField.value);
    let postData = getData(num);
    console.log(postData);
};

let getData = (num) => {
    let url = "http://localhost:9000/book/get/" + num;
    console.log(url)

    fetch(url)
        .then((response) => {
            if (response.status !== 202) {
                console.error(`status: ${response.status}`);
                return;
            }
            response.json().then((data) => {
                console.log(data);
                console.log(data.bookName);

                //TODO 
                resultPara.innerHTML = data;
                nameField.innerHTML = data.bookName;
                authorField.innerHTML = data.authorName;

                return data;
            }
            );
        }).catch((error) => {
            console.error(`${error}`)
        });

};

//Buttons
getButton.addEventListener('click', postData);