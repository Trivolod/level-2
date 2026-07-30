interface RandomUserResponse {
  results: Array<{
    name: {
      first: string;
    };
    gender: string;
  }>;
}

interface User {
  first_name: string;
  gender: string;
}

function getFemaleUserWithoutAsync(): Promise<User> {
  const url = 'https://randomuser.me/api/';

  return fetch(url)
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error('Network error');
      }
      return response.json() as Promise<RandomUserResponse>;
    })
    .then((data: RandomUserResponse) => {
      const rawUser = data.results[0];

      if (rawUser && rawUser.gender === 'female') {
        return Promise.resolve({
          first_name: rawUser.name.first,
          gender: rawUser.gender,
        });
      }

      return getFemaleUserWithoutAsync();
    })
    .catch((error: unknown) => {
      console.error("Request error retrying", error);
      return getFemaleUserWithoutAsync();
    });
}

getFemaleUserWithoutAsync().then((user: User) => {
  console.log('Found user:', user.first_name, user.gender);
});