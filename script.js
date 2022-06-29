let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read === true ? "Yes" : "No"
    
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function displayBooks() {
    for (let book in myLibrary) {
        if (!document.getElementById(`${myLibrary[book].title}`)) {    
            const newRow = document.createElement("tr");
            newRow.setAttribute("id", `${myLibrary[book].title}`)

            for (let info in myLibrary[book]) {
                const newCell = document.createElement("td");
                newCell.textContent = `${(myLibrary[book])[info]}`;
                newRow.appendChild(newCell);
            }

            tableBody.appendChild(newRow);
        }
    }
}

const tableBody = document.querySelector("tbody");

const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookRead = document.querySelector("#read");
const submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
    addBookToLibrary(newBook);
    displayBooks();
})

let theHobbit = Object.create(Book.prototype);
theHobbit.title = "The Hobbit";
theHobbit.author = "J.R.R. Tolkien";
theHobbit.pages = "300";
theHobbit.read = "yes";


addBookToLibrary(theHobbit);
displayBooks();