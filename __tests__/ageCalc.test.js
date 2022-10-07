import {PersonAge} from "../src/agecalculator";

describe('calcAge', () => {
  test("It should take a user's age", () => {
    //code
    const personAge = new PersonAge(6);
    //expect statements
    expect(personAge.age).toEqual(6);
  });
});