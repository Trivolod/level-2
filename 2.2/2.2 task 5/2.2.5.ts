type IpCallback = (ip: string) => void;

function function1(callback: IpCallback): void {
  fetch('https://api.ipify.org?format=json')
    .then((res) => res.json())
    .then((data: { ip: string }) => callback(data.ip))
    .catch((err) => console.error(err));
}

function getIP(): Promise<string> {
  return new Promise<string>((resolve) => {
    function1((ip: string) => {
      resolve(ip);
    });
  });
}

async function main(): Promise<void> {
  const ip = await getIP();
  console.log('Your IP:', ip);
}

main();

export {};