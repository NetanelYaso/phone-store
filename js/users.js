const USERS_API = "https://my-json-server.typicode.com/Jeck99/fake-server/users";
let user_Table = document.getElementById("user_Table");
async function getUsers() {
    try {
        return await fetch(USERS_API)
            .then(res => res.json())
    }
    catch (error) {
        console.log("error");
    }
    finally { }
}
function usersTable() {
    getUsers()
        .then(result => {
            result.forEach(item => {
                user_Table.innerHTML +=
                    `
                <tr>
                <td>${item.age}</td>
                <td>${item.name.first}</td>
                <td>${item.name.last}</td>
                <td>${item.email}</td>
                <td>${item.index}</td>
                <td>${item.phone}</td>
                <td>${item.picture}</td>
                </tr>
                `
            });
        })
}
usersTable();

async function sendObject() {
    const data = {
        age: Inputage.value,
        name: InputFirstName.value,
        email: InputLastName.value,
        index: Inputemail.value,
        phone: Inputindex.value,
        picture: Inputphone.value
    }
    try {
        load_gif.innerHTML = "<img src = '../images/loading_gif-3.png'>";
        return await fetch(USERS_API, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )

    }
    catch (error) {
        console.log("error");
    }
    finally { 
        load__gif.innerHTML += " ";
    }
}