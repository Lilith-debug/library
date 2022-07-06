let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }

    addToLibrary() {
        myLibrary.push(this);
    }
    
}

function deleteBook(button) {
    const deletedBook = button.classList;
    deletedBook.remove("delete");
    document.getElementById(deletedBook.value).remove();
}

function addDeleteButton(newRow, bookTitle) {
    const newCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    
    deleteButton.setAttribute("class", `delete ${bookTitle}`);
    deleteButton.textContent = "Delete";
    newCell.appendChild(deleteButton);
    
    newRow.appendChild(newCell);
}

function createBookTable() {
    for (let book in myLibrary) {
        //avoid repeating books
        if (!document.getElementById(`${myLibrary[book].title}`)) {    
            const newRow = document.createElement("tr");
            newRow.setAttribute("id", `${myLibrary[book].title}`)

            for (let info in myLibrary[book]) {
                const newCell = document.createElement("td");
                if (info == "read") {
                    const checkbox = document.createElement("input");
                    checkbox.setAttribute("type", "checkbox");
                    checkbox.setAttribute("class", "toggle");
                    checkbox.checked = myLibrary[book].read;
                    newCell.appendChild(checkbox);
                } else { 
                    newCell.textContent = `${(myLibrary[book])[info]}`;
                }
                newRow.appendChild(newCell);
            }

            addDeleteButton(newRow, myLibrary[book].title);

            tableBody.appendChild(newRow);
        }
    }
    /* needs to attach event listeners to the delete buttons 
    right after the table is created */
    const deleteBtns = tableBody.querySelectorAll(".delete");
    document.querySelectorAll(".delete").forEach((button) => {
        button.addEventListener("click", (event) => {
            deleteBook(button);
        });
    });
}


const tableBody = document.querySelector("tbody");

const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookRead = document.querySelector("#read");
const submit = document.querySelector(".submit");


submit.addEventListener("click", () => {
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
    newBook.addToLibrary();
    createBookTable();
})


let theHobbit = Object.create(Book.prototype);
theHobbit.title = "The Hobbit";
theHobbit.author = "J.R.R. Tolkien";
theHobbit.pages = "300";
theHobbit.read = "yes";


addBookToLibrary(theHobbit);
createBookTable();
