// 1. Retrieve the form and log it.
const form = document.querySelector("form");
console.log(form);

// 2. Retrieve inputs by their IDs and log them.
const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
console.log(firstNameInput);
console.log(lastNameInput);

// 3. Retrieve inputs by their name attributes and log them.
const firstNameByName = document.querySelector('[name="firstname"]');
const lastNameByName = document.querySelector('[name="lastname"]');
console.log(firstNameByName);
console.log(lastNameByName);

// 4. Handle form submission without reloading the page.
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    if (firstName === "" || lastName === "") {
        alert("Please enter both your first name and last name.");
        return;
    }

    const usersAnswer = document.querySelector(".usersAnswer");
    const firstLi = document.createElement("li");
    const lastLi = document.createElement("li");

    // textContent safely inserts the values as text.
    firstLi.textContent = firstName;
    lastLi.textContent = lastName;
    usersAnswer.append(firstLi, lastLi);

    firstNameInput.value = "";
    lastNameInput.value = "";
});
