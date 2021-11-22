"use strict";

//Declare Fields
let bookIdField = document.querySelector("#bookId");
let bookNameField = document.querySelector("#bookName");
let authorNameField = document.querySelector("#authorName");
let updateBookButton = document.querySelector("#updateBook");
let updateResultField = document.querySelector("#resultField");

//Declare methods.
let updateBook = () => {
    let bId = bookIdField.value;
    let bName = bookNameField.value;
    let aName = authorNameField.value;

    let newBook = {
        bookName: bName,
        authorName: aName
    };

    console.log(newBook);
    updateBookRequest(bId, newBook);
};

let updateBookRequest = (id, book) => {
    if (id == "") {
        updateResultField.innerHTML = `This cannot be null.`;
        return;
    }
    let url = "http://localhost:9000/book/update/" + id;
    fetch(url, {
        method: "PUT",
        headers: {
            "Content-type": "application/JSON",
        },
        body: JSON.stringify(book),
    }).then((response) => {
        if (response.status !== 202) {
            console.error(`Status: ${response.status}`);
            updateResultField.innerHTML = `Status: ${response.status}`;
            return;
        }
        console.log("Update Successful!");
        updateResultField.innerHTML = "Book updated.";
    });
};

updateBookButton.addEventListener('click', updateBook);