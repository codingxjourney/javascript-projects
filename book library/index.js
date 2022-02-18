console.log("This is index.js");

// creating Constructor
function Book(name, author, type, twitter) {
    this.name = name;
    this.author = author;
    this.type = type;
    this.twitter = twitter;
}

// Display Constructor
function Display() {

}

// Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td style="text-align: center;">${book.name}</td>
                        <td style="text-align: center;">${book.author}</td>
                        <td style="text-align: center;">${book.type}</td>
                        <td style="text-align: center;">${book.twitter}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// Implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true;
    }
}

// Implement the show function
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''; style="text-align: center;"
    }, 3000);

}

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let twitter = document.getElementById('twitter').value;
    let type;
    let scifi = document.getElementById('sci-fi');
    let programming = document.getElementById('programming');
    let aeronautics = document.getElementById('aeronautics');

    if (scifi.checked) {
        type = scifi.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (aeronautics.checked) {
        type = aeronautics.value;
    }

    let book = new Book(name, author, type, twitter);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();
}


// To dos"
// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view