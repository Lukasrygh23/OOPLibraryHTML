"use strict";

//Declare fields
let bookIdField = document.querySelector("#bookId");
let returnDateField = document.querySelector("#returnDate");
let usernameField = document.querySelector("#username");
let createLicenseButton = document.querySelector("#createLicense");
let createLicenseResultField = document.querySelector("#resultField");

//Declare methods.
let createLicense = () => {

    let bId = bookIdField.value;
    let rtDate = returnDateField.value;
    let username = usernameField.value;

    let newLicense = {
        "recipientUsername": username,
        "returnDate": rtDate,
        "book": {
            "bookId": bId
        }
    }

    console.log(newLicense);
    createLicenseRequest(newLicense);

};

let createLicenseRequest = (license) => {

    fetch("http://localhost:9000/license/create", {
        method: "POST", //Data!
        headers: {
            "Content-type": "application/JSON",
        },
        body: JSON.stringify(license),
    }).then((response) => {
        if (response.status !== 201) {
            console.error(`Status: ${response.status}`);
            return;
        }
        console.log("Creation successful!");
        createLicenseResultField.innerHTML = "New license added to the database!";
    });
};



//Add event listeners.
createLicenseButton.addEventListener('click', createLicense);