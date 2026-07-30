async function getFemaleUserWithAsync() {
    const url = 'https://randomuser.me/api/';
    while (true) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network error');
            }
            const data = (await response.json());
            const rawUser = data.results[0];
            if (rawUser && rawUser.gender === 'female') {
                return {
                    first_name: rawUser.name.first,
                    gender: rawUser.gender,
                };
            }
        }
        catch (error) {
            console.error('Request error retrying', error);
        }
    }
}
(async () => {
    const user = await getFemaleUserWithAsync();
    console.log('Found user:', user.first_name, user.gender);
})();
export {};
