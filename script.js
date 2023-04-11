
function todoHandler() {
    let user = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        city: document.getElementById("city").value,
        number: document.getElementById("number").value
    }

    if (Object.values(user).includes("")) {
        alert("Please fill the required fields");
    }
    else {
        appendData(user);
    }
    // console.log(user);
}

function resetData() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("number").value = "";

}

function displayList() {
    let list = document.querySelectorAll(".list");
    // debugger;
    list[0].classList.remove("list");
    list[1].classList.remove("list");
}

function appendData(user) {

    let contentContainer = document.getElementById("content");

    let userContainer = document.createElement("div");
    userContainer.classList.add("userContainer");

    let nameContainer = document.createElement("div");
    nameContainer.innerHTML = `Name:- ${user.name}`;
    nameContainer.setAttribute("id", "nameUser");

    let ageContainer = document.createElement("div");
    ageContainer.innerHTML = `Age:- ${user.age}`;
    nameContainer.setAttribute("id", "ageUser");

    let cityContainer = document.createElement("div");
    cityContainer.innerHTML = `City:- ${user.city}`;
    nameContainer.setAttribute("id", "cityUser");

    let numberContainer = document.createElement("div");
    numberContainer.innerHTML = `Number:- ${user.number}`;
    nameContainer.setAttribute("id", "numberUser");

    let btnContainer = document.createElement("div");
    btnContainer.classList.add("btnContainer");

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.remove();

        if(contentContainer.childNodes.length <= 1){
            document.getElementById("header").classList.add("list");
            contentContainer.classList.add("list");
        }
    })

    let editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.classList.add("editBtn");
    editBtn.addEventListener("click", (e) => {
        let user = editValues();
        // debugger;
        e.target.parentElement.parentElement.childNodes[0].innerText = user.name;
        e.target.parentElement.parentElement.childNodes[1].innerText = user.age;
        e.target.parentElement.parentElement.childNodes[2].innerText = user.city;
        e.target.parentElement.parentElement.childNodes[3].innerText = user.number;
    });

    btnContainer.append(deleteBtn);
    btnContainer.append(editBtn);

    userContainer.append(nameContainer);
    userContainer.append(ageContainer);
    userContainer.append(cityContainer);
    userContainer.append(numberContainer);
    userContainer.append(btnContainer);

    contentContainer.append(userContainer);

    resetData();
    displayList();
}

function editValues() {

    let updatedName = prompt("Enter correct Name");
    let updatedAge = prompt("Enter correct Age");
    let updatedCity = prompt("Enter correct City");
    let updatedNumber = prompt("Enter correct Number");

    let user = {
        name: `Name:- ${updatedName}`,
        age: `Age:- ${updatedAge}`,
        city: `City:- ${updatedCity}`,
        number: `Number:- ${updatedNumber}`
    }

    return user;

}

