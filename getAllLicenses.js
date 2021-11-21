"use strict";

let cardHolder = document.querySelector("#parentDiv");


let viewAll = () => {
    fetch("http://localhost:9000/license/getAll").then((response) => {
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
    p.textContent = JSON.stringify(obj);

    let pactual = document.createElement("p");
    p.className = "card-text";
    p.textContent = `Return date: ${obj.returnDate}, Username: ${obj.recipientUsername}, Book Name:${obj.book.bookName}, Author Name:${obj.book.authorName}`

    card.appendChild(div2);
    card.appendChild(p);
    card.appendChild(pactual);
    cardHolder.appendChild(card);
};


viewAll();