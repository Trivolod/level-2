console.log('hi')

function getFirstWord(a: string): number {
  return a.split(/ /)[0].length;
}

interface User {
  name: string;
  surname: string;
}

function getUserNamings(a: User) {
  return {
    fullname: a.name + " " + a.surname,
    initials: a.name[0] + "." + a.surname[0]
  };
}

interface Product {
  name: string;
}

interface ProductContainer {
  products?: Product[];
}

function getAllProductNames(a: ProductContainer): string[] {
  return a?.products?.map(prod => prod?.name) || [];
}

interface PersonWithFunc {
  name: () => string;
  cuteness?: number;
  coolness?: number;
}

function hey(a: PersonWithFunc): string {
  return "hey! i'm " + (a.name as () => string)();
}

hey({name: () => "roma", cuteness: 100});
hey({name: () => "vasya", coolness: 100});

interface AbstractPet {
  name: () => string;
}

function heyAgain(abstractPet: AbstractPet): string {
  return "hey! i'm " + abstractPet.name();
}

interface Cat {
  name: () => string;
  type: "cat";
  cuteness: number;
}

interface Dog {
  name: () => string;
  type: "dog";
  coolness: number;
}

type PetUnion = Cat | Dog;

function heyUnion(a: PetUnion): string {
  return "hey! i'm " + a.name()
    + (a.type === "cat" ? ("cuteness: " + a.cuteness) : ("coolness: " + a.coolness));
}

function stringEntries(a: unknown[] | Record<string, unknown>) {
  return Array.isArray(a) ? a : Object.keys(a);
}

async function world(a: number): Promise<string> {
  return "*".repeat(a);
}

const hello = async (): Promise<string> => {
  return await world(10);
};

hello().then(r => console.log(r)).catch(e => console.log("fail"));