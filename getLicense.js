"use strict";

let idField = document.querySelector("#licenseId");
let getButton = document.querySelector("#getButton");
let resultPara = document.querySelector("#resultBox");

let usernameField = document.querySelector("#userName");
let returnDateField = document.querySelector("#returnDate");

let nameField = document.querySelector("#bookTitle");
let authorField = document.querySelector("#authorName");

let postData = () => {
    let num = Number(idField.value);
    let postData = getData(num);
    console.log(postData);
};

let getData = (num) => {
    let url = "http://localhost:9000/license/get/" + num;
    console.log(url)

    fetch(url)
        .then((response) => {
            if (response.status !== 200) {
                console.error(`status: ${response.status}`);
                resultPara.innerHTML = `status: ${response.status}`;
                return;
            }
            response.json().then((data) => {
                console.log(data);


                //TODO 
                resultPara.innerHTML = `Return date: ${data.returnDate}, Username: ${data.recipientUsername}, Book Name:${data.book.bookName}, Author Name:${data.book.authorName}`;
                //usernameField.innerHTML = data.recipientUsername;
                //returnDateField.innerHTML = data.returnDate;
                //nameField.innerHTML = data.book.bookName;
                //authorField.innerHTML = data.book.authorName;

                return data;
            }
            );
        }).catch((error) => {
            console.error(`${error}`)
        });

};

//Buttons
getButton.addEventListener('click', postData);