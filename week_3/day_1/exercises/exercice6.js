const navBar = document.getElementById('navBar');
navBar.setAttribute('id', 'socialNetworkNavigation');

const list = navBar.querySelector('ul');
const logoutItem = document.createElement('li');
const logoutText = document.createTextNode('Logout');
logoutItem.appendChild(logoutText);
list.appendChild(logoutItem);

console.log(list.firstElementChild.textContent);
console.log(list.lastElementChild.textContent);