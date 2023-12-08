document.addEventListener("DOMContentLoaded", function() {
    const bookForm = document.getElementById("bookForm");
    const bookListContainer = document.getElementById("bookListContainer");

    function addBookToList(title, author) {
        const bookEntry = document.createElement("div");
        bookEntry.classList.add("book-entry");
        bookEntry.innerHTML = `<strong>${title}</strong> - ${author} <button class="delete-button">Удалить</button>`;
        bookListContainer.appendChild(bookEntry);

        const deleteButton = bookEntry.querySelector(".delete-button");
        deleteButton.addEventListener("click", function() {
            bookListContainer.removeChild(bookEntry);
            updateLocalStorage();
        });
    }

    function updateLocalStorage() {
        const bookEntries = Array.from(bookListContainer.querySelectorAll(".book-entry"));
        const booksData = bookEntries.map(bookEntry => {
            const title = bookEntry.querySelector("strong").textContent;
            const author = bookEntry.textContent.split(" - ")[1];
            return { title, author };
        });
        localStorage.setItem("books", JSON.stringify(booksData));
    }

    bookForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const bookTitle = document.getElementById("bookTitle").value;
        const authorName = document.getElementById("authorName").value;

        addBookToList(bookTitle, authorName);

        const bookData = {
            title: bookTitle,
            author: authorName
        };
        let books = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : [];
        books.push(bookData);
        localStorage.setItem("books", JSON.stringify(books));

        bookForm.reset();
    });

    let savedBooks = localStorage.getItem("books");
    if (savedBooks) {
        savedBooks = JSON.parse(savedBooks);
        savedBooks.forEach(book => {
            addBookToList(book.title, book.author);
        });
    }
});
