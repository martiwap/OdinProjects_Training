let myLibrary = [
    { title: "booktitle", author: "book author", pages: "2322" },
    { title: "booktitletwo", author: "author", pages: "300" },
    { title: "booktitlethree", author: "me", pages: "350" },
];

document.getElementById('myLibrary').innerHTML = myLibrary.map(book =>
    `<div data-id="${book.title}" class="card">
        <div class="container">
            <h4><b>${book.title}</b></h4>
            <p>Written by ${book.author}, this book has ${book.pages} pages.</p>
            <button id="removeBook">Remove</button>
        </div>
    </div >`
).join('');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    // alert('before' + myLibrary.length);
    var bookToAdd = new Book();
    bookToAdd.title = document.getElementById("title").value;
    bookToAdd.author = document.getElementById("author").value;
    bookToAdd.pages = document.getElementById("pages").value;
    bookToAdd.read = document.getElementsByName("gender").value;

    myLibrary.push(bookToAdd);
    // alert('after' + myLibrary.length);
    //location.reload();
}

function removeBookFromLibrary(titleToDelete) {
    alert('title to delete ' + titleToDelete);
    var bookToDelete = myLibrary.find(b => b.title == titleToDelete);

    const index = array.indexOf(bookToDelete);
    if (index > -1) {
        array.splice(index, 1);
    }

    //location.reload();
}

// ------ Add New Book

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var add_btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
add_btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// -------------------


// ------- Remove book

var remove_btn = document.getElementById("removeBook");

remove_btn.onclick = function () {
    this.removeBookFromLibrary(document.getElementById(this.getAttribute("data-id")));
}

// ------------------