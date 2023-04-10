
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



function appendData(user) {

    let contentContainer = document.getElementById("content");

    let userContainer = document.createElement("div");
    userContainer.classList.add("userContainer");

    let nameContainer = document.createElement("div");
    nameContainer.innerHTML = `Name:- ${user.name}`;

    let ageContainer = document.createElement("div");
    ageContainer.innerHTML = `Age:- ${user.age}`;

    let cityContainer = document.createElement("div");
    cityContainer.innerHTML = `City:- ${user.city}`;

    let numberContainer = document.createElement("div");
    numberContainer.innerHTML = `Number:- ${user.number}`;

    let btnContainer = document.createElement("div");
    btnContainer.classList.add("btnContainer");

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.remove();
    })

    let editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.classList.add("editBtn");
    editBtn.addEventListener("click", (e) => {
        editValues();
    });

    btnContainer.append(deleteBtn);
    btnContainer.append(editBtn);

    userContainer.append(nameContainer);
    userContainer.append(ageContainer);
    userContainer.append(cityContainer);
    userContainer.append(numberContainer);
    userContainer.append(btnContainer);

    contentContainer.append(userContainer);
}

function editValues() {

    let updatedName = prompt("Enter correct Name");
    let updatedAge = prompt("Enter correct Age");
    let updatedCity = prompt("Enter correct City");
    let updatedNumber = prompt("Enter correct Number");

    let user = {
        name: updatedName,
        age: updatedAge,
        city: updatedCity,
        number: updatedNumber
    }
    appendData(user);

}

