"use strict";

//Declare it all.
let idField = document.querySelector("#bookId");
let deleteButton = document.querySelector("#deleteBook");

//Functions next

let deleteBook = () => {
    let num = Number(idField.value);
    deleteRequest(num);
};

let deleteRequest = (num) => {
    let url = "http://localhost:9000/delete/" + num;
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
            resultField.innerHTML = "Deletion successful of book with id " + num + ". Please leave a note as to why once we implement a deletion tracker."
        });
};

//Buttons at the bottom.

deleteButton.addEventListener('click', deleteBook);