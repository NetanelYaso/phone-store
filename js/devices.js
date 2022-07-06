const DEVICES_API = "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
let cardsContainer = document.getElementById('cards-container');
const picturesArray = [
    "phone-1.png",
    "phone-2.png",
    "phone-3.png",
    "phone-4.png",
    "phone-5.png",
    "phone-6.png",
    "phone-7.png",
    "phone-8.png",
    "phone-9.png",
    "phone-10.png",
    "phone-11.png",
    "phone-12.png",
    "phone-13.png",
    "phone-14.png",
    "phone-15.png",

];
let counter = 0;
async function getDevices() {
    try {
        let devices = await fetch(DEVICES_API).then(res => res.json())
        devices.forEach(device => {
            cardsContainer.innerHTML += cardTemplate(device)
        });
    }
    catch (error) {
        console.log("error");
    }
    finally { }
}

function cardTemplate(device) {
    let { id, brand, price, isAvailable, color, picture, ram } = device
    return `

    <div class="row row-cols-1 px-4 pb-4">
    <div class="card col">
      <img src="/images/${picturesArray[counter++]}" class="card-img-top" >
        <div>${brand}</div>
        <div>${price}</div>
        <div>${color}</div>
        <div>${ram}</div>
        <div>${isAvailable}</div>
        <div>${id}</div>
        <div>${picture}</div>
        <a herf=# class="btn btn-dark">Delete</a>
        </div>
    </div>
    `
}
getDevices()