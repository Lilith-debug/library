let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function displayBooks() {
    for (let book in myLibrary) {
        const newRow = document.createElement("tr");

        for (let info in myLibrary[book]) {
            const newCell = document.createElement("td");
            newCell.textContent = `${(myLibrary[book])[info]}`;
            newRow.appendChild(newCell);
        }

        tableBody.appendChild(newRow);
    }
}

const tableBody = document.querySelector("tbody");

let theHobbit = Object.create(Book.prototype);
theHobbit.title = "The Hobbit";
theHobbit.author = "J.R.R. Tolkien";
theHobbit.pages = "300";
theHobbit.read = "yes";


addBookToLibrary(theHobbit);
displayBooks();