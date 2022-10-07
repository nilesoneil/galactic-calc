import {PersonAge} from "../src/agecalculator";

describe('calcAge', () => {
  test("It should take a user's age", () => {
    //code
    const personAge = new PersonAge(6);
    //expect statements
    expect(personAge.age).toEqual(6);
  });
  test("It should take an age and convert to mercury age", () => {
    const mercuryAge = new PersonAge(6);
    expect(mercuryAge.calcMercuryAge()).toEqual(.6)
  });
});