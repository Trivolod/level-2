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

async function getFemaleUserWithAsync(): Promise<User> {
  const url = 'https://randomuser.me/api/';

  while (true) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network error');
      }

      const data = (await response.json()) as RandomUserResponse;
      const rawUser = data.results[0];

      if (rawUser && rawUser.gender === 'female') {
        return {
          first_name: rawUser.name.first,
          gender: rawUser.gender,
        };
      }
    } catch (error) {
      console.error('Request error retrying', error);
    }
  }
}

(async () => {
  const user = await getFemaleUserWithAsync();
  console.log('Found user:', user.first_name, user.gender);
})();

export {};