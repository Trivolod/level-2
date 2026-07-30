"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('hi');
function getFirstWord(a) {
    return a.split(/ /)[0].length;
}
function getUserNamings(a) {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}
function getAllProductNames(a) {
    return a?.products?.map(prod => prod?.name) || [];
}
function hey(a) {
    return "hey! i'm " + a.name();
}
hey({ name: () => "roma", cuteness: 100 });
hey({ name: () => "vasya", coolness: 100 });
function heyAgain(abstractPet) {
    return "hey! i'm " + abstractPet.name();
}
function heyUnion(a) {
    return "hey! i'm " + a.name()
        + (a.type === "cat" ? ("cuteness: " + a.cuteness) : ("coolness: " + a.coolness));
}
function stringEntries(a) {
    return Array.isArray(a) ? a : Object.keys(a);
}
async function world(a) {
    return "*".repeat(a);
}
const hello = async () => {
    return await world(10);
};
hello().then(r => console.log(r)).catch(e => console.log("fail"));
//# sourceMappingURL=index.js.map