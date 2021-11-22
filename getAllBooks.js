"use strict";

let cardHolder = document.querySelector("#parentDiv");


let viewAll = () => {
    fetch("http://localhost:9000/book/getAll").then((response) => {
        if (response.status !== 200) {
            console.error(`Error Status Was ${response.status}`);
            return;
        }
        response.json()
            .then((data) => {
                for (let obj of data) {
                    console.log(obj);
                    makeCard(obj);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    });
};

let makeCard = (obj) => {

    let card = document.createElement("div");
    card.className = "card col-3";
    card.style = "width: 18rem";

    //Could put an image here.

    let div2 = document.createElement("div");
    div2.className = "card-body";

    let p = document.createElement("p");
    p.className = "card-text";
    p.textContent = `Book name: ${obj.bookName}, Author Name: ${obj.authorName}`;

    card.appendChild(div2);
    card.appendChild(p);
    cardHolder.appendChild(card);
};


viewAll();