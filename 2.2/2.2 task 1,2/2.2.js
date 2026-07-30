import fetch from "node-fetch";
async function getMyIp() {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = (await response.json());
    return data.ip;
}
async function main() {
    try {
        const ip = await getMyIp();
        console.log("My IP:", ip);
    }
    catch (error) {
        console.error("IP:", error);
    }
}
main();
