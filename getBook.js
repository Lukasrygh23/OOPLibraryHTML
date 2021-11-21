"use strict";

let idField = document.querySelector("#bookId");
let getButton = document.querySelector("#getButton");
let resultPara = document.querySelector("#resultBox");

let nameField = document.querySelector("#bookTitle");
let authorField = document.querySelector("#authorName");

let postData = () => {
    let num = Number(idField.value);
    let postData = getData(num);
    console.log(postData);
};

let getData = (num) => {
    let url = "http://localhost:9000/book/getBook/" + num;
    console.log(url)

    fetch(url)
        .then((response) => {
            if (response.status !== 200) {
                console.error(`status: ${response.status}`);
                resultPara.innerHTML = `Error: ${response.status}`;
                return;
            }
            response.json().then((data) => {
                console.log(data);
                console.log(data.bookName);
                console.log(JSON.stringify(data));


                resultPara.innerHTML = `Book name: ${data.bookName}, Author Name: ${data.authorName}`;
                //nameField.innerHTML = data.bookName;
                //authorField.innerHTML = data.authorName;

                return data;
            }
            );
        }).catch((error) => {
            console.error(`${error}`)
        });

};

//Buttons
getButton.addEventListener('click', postData);