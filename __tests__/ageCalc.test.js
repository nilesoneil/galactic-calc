import {PersonAge} from "../src/agecalculator";

describe('calcAge', () => {
  test("It should take a user's age", () => {
    //code
    const personAge = new PersonAge(10);
    //expect statements
    expect(personAge.age).toEqual(10);
  });
  test("It should take an age and convert to mercury age", () => {
    const mercuryAge = new PersonAge(10);
    expect(mercuryAge.convertToMercury()).toEqual(2.4)
  });
  test("It should take an age and convert to venus age", () => {
    const venusAge = new PersonAge(10);
    expect(venusAge.convertToVenus()).toEqual(6.2)
  });
});