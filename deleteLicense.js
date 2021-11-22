"use strict";

//Declare it all.
let licenseIdField = document.querySelector("#licenseId");
let deleteLicenseButton = document.querySelector("#deleteLicense");

let resultDLicField = document.querySelector("#confirm");

//Functions next

let deleteLicense = () => {
    let num = Number(licenseIdField.value);
    deleteRequest(num);
};

let deleteRequest = (num) => {
    let url = "http://localhost:9000/license/delete/" + num;
    console.log(url);

    fetch(url, {
        method: `DELETE`
    })
        .then((response) => {
            if (response.status !== 204) {
                console.error(`status: ${response.status}`);
                resultDLicField.innerHTML = `Error code: ${response.status}`;
                return;
            }
            console.log("Successful delete.");
            resultDLicField.innerHTML = "Deletion successful of License with id " + num + ". Please leave a note as to why once we implement a deletion tracker.";
        });
};

//Buttons at the bottom.

deleteLicenseButton.addEventListener('click', deleteLicense);