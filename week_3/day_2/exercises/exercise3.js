// 1. Global variable for all bold items.
let allBoldItems;

// 2. Collect the bold items inside the paragraph.
function getBoldItems() {
    allBoldItems = document.querySelectorAll("#myParagraph strong");
}

// 3. Change all bold text to blue.
function highlight() {
    allBoldItems.forEach((item) => {
        item.style.color = "blue";
    });
}

// 4. Return all bold text to black.
function returnItemsToDefault() {
    allBoldItems.forEach((item) => {
        item.style.color = "black";
    });
}

getBoldItems();

const paragraph = document.getElementById("myParagraph");

// 5. Highlight on mouseover and restore on mouseout.
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);
