"use strict";

//Declare it all.
let bookIdField = document.querySelector("#bookId");
let deleteBookButton = document.querySelector("#deleteBook");

let resultDBookField = document.querySelector("#confirm");

//Functions next

let deleteBook = () => {
    let num = Number(bookIdField.value);
    deleteBookRequest(num);
};

let deleteBookRequest = (num) => {
    let url = "http://localhost:9000/book/delete/" + num;
    console.log(url);

    fetch(url, {
        method: `DELETE`
    })
        .then((response) => {
            if (response.status !== 204) {
                console.error(`status: ${response.status}`);
                return;
            }
            console.log("Successful delete.");
            resultDBookField.innerHTML = "Deletion successful of book with id " + num + ". Please leave a note as to why once we implement a deletion tracker.";
        });
};

//Buttons at the bottom.

deleteBookButton.addEventListener('click', deleteBook);