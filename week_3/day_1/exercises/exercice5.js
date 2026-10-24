
const container = document.getElementById("container");

console.log(container);

const lists = document.querySelectorAll("ul.list");

lists[0].children[1].textContent = "Richard";
lists[1].children[1].remove();

for (const list of lists) {
    list.children[0].textContent = "Nadia";
}

for (const list of lists) {
    list.classList.add("student_list");
}

lists[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

const dan = [...document.querySelectorAll("li")]
    .find(li => li.textContent.trim() === "Dan");

if (dan) {
    dan.style.display = "none";
}

const richard = [...document.querySelectorAll("li")]
    .find(li => li.textContent.trim() === "Richard");

if (richard) {
    richard.style.border = "2px solid black";
}

document.body.style.fontSize = "18px";

if (container.style.backgroundColor === "lightblue") {
    const users = [...document.querySelectorAll("li")]
        .filter(li => li.style.display !== "none")
        .map(li => li.textContent.trim());

    alert(`Hello ${users[0]} and ${users[1]}`);
}
