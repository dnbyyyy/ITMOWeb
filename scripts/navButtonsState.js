document.addEventListener("DOMContentLoaded", function() {
    var profileLink = document.getElementById("profileLink");
    var blogLink = document.getElementById("blogLink");
    var ratingLink = document.getElementById("ratingLink");
    var bookListLink = document.getElementById("bookListLink")

    var currentPage = window.location.href;

    if (currentPage.includes("index.html")) {
        profileLink.classList.add("active");
    } else if (currentPage.includes("blog.html")) {
        blogLink.classList.add("active");
    } else if (currentPage.includes("table.html")) {
        ratingLink.classList.add("active");
    } else if (currentPage.includes("bookList.html")) {
        bookListLink.classList.add("active")
    }


    profileLink.addEventListener("mouseenter", function() {
        profileLink.classList.add("hover");
    });
    profileLink.addEventListener("mouseleave", function() {
        profileLink.classList.remove("hover");
    });

    blogLink.addEventListener("mouseenter", function() {
        blogLink.classList.add("hover");
    });
    blogLink.addEventListener("mouseleave", function() {
        blogLink.classList.remove("hover");
    });

    ratingLink.addEventListener("mouseenter", function() {
        ratingLink.classList.add("hover");
    });
    ratingLink.addEventListener("mouseleave", function() {
        ratingLink.classList.remove("hover");
    });

    bookListLink.addEventListener("mouseenter", function() {
        bookListLink.classList.add("hover");
    });
    bookListLink.addEventListener("mouseleave", function() {
        bookListLink.classList.remove("hover");
    });
});