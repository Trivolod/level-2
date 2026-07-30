function function1(callback) {
    fetch('https://api.ipify.org?format=json')
        .then((res) => res.json())
        .then((data) => callback(data.ip))
        .catch((err) => console.error(err));
}
function function2(callback) {
    function1((ip) => {
        callback(ip);
    });
}
function getIP() {
    return new Promise((resolve) => {
        function1((ip) => {
            resolve(ip);
        });
    });
}
async function main() {
    function2((ip) => {
        console.log('Your IP:', ip);
    });
}
main();
export {};
