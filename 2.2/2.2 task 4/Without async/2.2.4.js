"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFemaleUserWithoutAsync() {
    const url = 'https://randomuser.me/api/';
    return fetch(url)
        .then((response) => {
        if (!response.ok) {
            throw new Error('Network error');
        }
        return response.json();
    })
        .then((data) => {
        const rawUser = data.results[0];
        if (rawUser && rawUser.gender === 'female') {
            return Promise.resolve({
                first_name: rawUser.name.first,
                gender: rawUser.gender,
            });
        }
        return getFemaleUserWithoutAsync();
    })
        .catch((error) => {
        console.error("Request error retrying", error);
        return getFemaleUserWithoutAsync();
    });
}
getFemaleUserWithoutAsync().then((user) => {
    console.log('Found user:', user.first_name, user.gender);
});
//# sourceMappingURL=2.2.4.js.map