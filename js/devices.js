const DEVICES_API = "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
let cardsContainer = document.getElementById('cards-container');
const picturesArray = [
"https://www.ivory.co.il/files/catalog/org/1652966067c67NF.jpg",
"https://www.ivory.co.il/files/catalog/org/1651050178d78UC.jpg",
"https://www.ivory.co.il/files/catalog/org/1656598251p51Nv.jpg"

];
let counter = 0;
async function getDevices() {
    try {
        loading_gif.innerHTML = `<img src = '../images/loading_gif-3.png'>`;
        let devices = await fetch(DEVICES_API).then(res => res.json())
        devices.forEach(device => {
            cardsContainer.innerHTML += cardTemplate(device)
        });
    }
    catch (error) {
        console.log("error");
    }
    finally { 
        loading_gif.innerHTML = " ";
 
    }
}

function cardTemplate(device) {
    let { id, brand, price, isAvailable, color, picture, ram } = device
    return `
    <div class="row row-cols-1 px-4 pb-4">
    <div class="card col">
      <img src="../images/${picturesArray[counter++]}" class="card-img-top" >
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