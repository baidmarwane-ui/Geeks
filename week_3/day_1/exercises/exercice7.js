const allBooks = [
	{
		title: "The Hobbit",
		author: "J. R. R. Tolkien",
		image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
		alreadyRead: true,
	},
	{
		title: "Pride and Prejudice",
		author: "Jane Austen",
		image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
		alreadyRead: false,
	},
	{
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
		alreadyRead: false,
	},
	{
		title: "1984",
		author: "George Orwell",
		image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
		alreadyRead: true,
	},

];

const bookList = document.querySelector(".listBooks");

allBooks.forEach((book) => {
	const bookDiv = document.createElement("div");
	const details = document.createElement("p");
	const image = document.createElement("img");

	details.textContent = `${book.title} written by ${book.author}`;
	if (book.alreadyRead) {
		details.style.color = "red";
	}

	image.src = book.image;
	image.alt = `Cover of ${book.title}`;
	image.style.width = "100px";

	bookDiv.append(details, image);
	bookList.appendChild(bookDiv);
});