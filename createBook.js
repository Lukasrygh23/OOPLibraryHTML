"use strict";

//Declare fields
let bookNameField = document.querySelector("#bookName");
let authorNameField = document.querySelector("#authorName");
let createBookButton = document.querySelector("#createBook");
let createBookResultField = document.querySelector("#resultField");

//Declare methods.
let createBook = () => {

    let bName = bookNameField.value;
    let aName = authorNameField.value;

    let newBook = {
        bookName: bName,
        authorName: aName
    };

    console.log(newBook);
    createBookRequest(newBook);
};

let createBookRequest = (book) => {
    fetch("http://localhost:9000/book/create", {
        method: "POST", //Data!
        headers: {
            "Content-type": "application/JSON",
        },
        body: JSON.stringify(book),
    }).then((response) => {
        if (response.status !== 201) {
            console.error(`Status: ${response.status}`);
            return;
        }
        console.log("Creation successful!");
        createBookResultField.innerHTML = "New book added to the database!";
    });
};


//Add event listeners.
createBookButton.addEventListener('click', createBook);