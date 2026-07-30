type IpCallback = (ip: string) => void;

function function1(callback: IpCallback): void {
    fetch('https://api.ipify.org?format=json')
        .then((res) => res.json())
        .then((data: { ip: string }) => callback(data.ip))
        .catch((err) => console.error(err));
}

function function2(callback: IpCallback): void {
    function1((ip) => {
        callback(ip);
    });
}

function getIP(): Promise<string> {
    return new Promise<string>((resolve) => {
        function1((ip: string) => {
            resolve(ip);
        });
    });
}

async function main(): Promise<void> {
    function2((ip) => {
        console.log('Your IP:', ip);
    });
}

main();

export {};