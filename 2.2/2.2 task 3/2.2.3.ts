interface NameResponse {
  name: string;
}

const API_URL = 'https://jsonplaceholder.typicode.com/users/1';
//task a
async function getThreeNamesA(): Promise<string[]> {
  const fetchName = async (): Promise<NameResponse> => {
    const res = await fetch(API_URL);
    return res.json();
  };

  const promises = [fetchName(), fetchName(), fetchName()];
  const results = await Promise.all(promises);

  return results.map(data => data.name);
}
//task b
async function getThreeNamesB(): Promise<string[]> {
  const fetchName = async (): Promise<NameResponse> => {
    const res = await fetch(API_URL);
    return res.json();
  };

  const promise1 = fetchName();
  const promise2 = fetchName();
  const promise3 = fetchName();

  const data1 = await promise1;
  const data2 = await promise2;
  const data3 = await promise3;

  return [data1.name, data2.name, data3.name];
}
//task c
function getThreeNamesC(): Promise<string[]> {
  const fetchName = (): Promise<NameResponse> => {
    return fetch(API_URL).then(res => res.json() as Promise<NameResponse>);
  };

  return new Promise<string[]>((resolve, reject) => {
    const results: string[] = [];
    let completedRequests = 0;

    const handleResponse = (index: number, data: NameResponse) => {
      results[index] = data.name;
      completedRequests += 1;

      if (completedRequests === 3) {
        resolve(results);
      }
    };

    fetchName()
      .then(data => handleResponse(0, data))
      .catch(reject);

    fetchName()
      .then(data => handleResponse(1, data))
      .catch(reject);

    fetchName()
      .then(data => handleResponse(2, data))
      .catch(reject);
  });
}

getThreeNamesA()
  .then(names => console.log('Received names (A):', names))
  .catch(err => console.error('Request error (A):', err));

getThreeNamesB()
  .then(names => console.log('Received names (B):', names))
  .catch(err => console.error('Request error (B):', err));

getThreeNamesC()
  .then(names => console.log('Received names (C):', names))
  .catch(err => console.error('Request error (C):', err));