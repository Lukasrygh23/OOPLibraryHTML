"use strict";

//Declare Fields
let licenseIdField = document.querySelector("#licenseId");
let usernameField = document.querySelector("#username")
let returnDateField = document.querySelector("#returnDate");
let updateLicenseButton = document.querySelector("#updateLicense");
let updateResultField = document.querySelector("#resultField");

//Declare methods.
let updateLicense = () => {
    let lId = licenseIdField.value;
    let username = usernameField.value;
    let rDate = returnDateField.value;

    let newLicense = {
        recipientUsername: username,
        returnDate: rDate
    }

    console.log(newLicense);
    updateLicenseRequest(lId, newLicense);
};


let updateLicenseRequest = (id, license) => {
    let url = "http://localhost:9000/license/update/" + id;
    fetch(url, {
        method: "PUT",
        headers: {
            "Content-type": "application/JSON",
        },
        body: JSON.stringify(license),
    }).then((response) => {
        if (response.status !== 202) {
            console.error(`Status: ${response.status}`);
            return;
        }
        console.log("Update Successful!");
        updateResultField.innerHTML = "License updated.";
    });
};

updateLicenseButton.addEventListener('click', updateLicense);