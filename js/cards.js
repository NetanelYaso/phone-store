const DEVICES_API = "https://my-json-server.typicode.com/Jeck99/fake-server/devices";

async function someFunc() {
    try {
        return await fetch(DEVICES_API)

        
    }
    catch (error) {
        console.log("error");
    }
    finally { }
}