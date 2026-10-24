// 1. Retrieve the h1 and log it.
const h1 = document.querySelector("h1");
console.log(h1);

// 2. Remove the last paragraph in the article.
const article = document.querySelector("article");
const paragraphs = article.querySelectorAll("p");
paragraphs[paragraphs.length - 1].remove();

// 3. Change the h2 background to red when clicked.
const h2 = document.querySelector("h2");
h2.addEventListener("click", () => {
    h2.style.backgroundColor = "red";
});

// 4. Hide the h3 when clicked.
const h3 = document.querySelector("h3");
h3.addEventListener("click", () => {
    h3.style.display = "none";
});

// 5. Make all remaining paragraphs bold when the button is clicked.
const boldButton = document.getElementById("boldButton");
boldButton.addEventListener("click", () => {
    article.querySelectorAll("p").forEach((paragraph) => {
        paragraph.style.fontWeight = "bold";
    });
});

// 6. BONUS: Random h1 font size from 0 to 100 pixels on hover.
h1.addEventListener("mouseover", () => {
    const randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = `${randomSize}px`;
});

// 7. BONUS: The second paragraph fades out on hover using CSS in exercise1.html.
