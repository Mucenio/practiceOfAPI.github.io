const input = document.querySelector("#searchInput");
const userList = document.querySelector("#users");
let changeLenguage = document.querySelector("#Lenguage");
let changeTheme = document.querySelector("#Theme");
let SelectedLenguage = document.querySelector(".lenguageItem");
let users = [];





async function loadUsers(){
    const response = await fetch('https://fakerapi.it/api/v1/persons?_quantity=100&_gender=male&_birthday_start=2005-01-01')
    return await response.json();
}


const createUserItems = users => users.map(user => `<li class="bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer">${user.firstname} ${user.lastname}</li>`).join(' ');


function renderUsers(users){
    const itemsStrings = createUserItems(users);
    console.log(users)
    userList.innerHTML = itemsStrings;
}

function filtro(user){

//
if(`${user.firstname.toLowerCase()}`.startsWith(input.value.toLowerCase()) || `${user.lastname.toLowerCase()}`.startsWith(input.value.toLowerCase()) ){
    return user;
}

}


function languageMenu(){
    let menu = `
        <li class="lenguageItem"><span>Lenguage</span></li>
        <li class="lenguageItem"><span>Español</span></li>
        <li class="lenguageItem"><span>Ingles</span></li>`;
    changeLenguage.innerHTML = menu;
    console.log("hola")

      
}










window.addEventListener('load', async e => {

    userList.innerHTML = "<h1>Loading</h1>";



    const data = await loadUsers();
    users = data.data;
    renderUsers(users);
})

input.addEventListener('keyup', e => {
    input.placeholder=" ";
    input.style.textAlign = "left";

    const newUsers = users.filter(user => filtro(user));
    renderUsers(newUsers);



})

changeLenguage.addEventListener('click', e => languageMenu());
