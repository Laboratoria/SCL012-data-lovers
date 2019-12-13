// importamos la función `example`
import { getPokemons } from "../src/data";

describe('getPokemons', () => {

  it('debería ser una función', () => {
    expect(typeof getPokemons).toBe('function');
  })
});
// importamos la función `example`
import { ordePokemons } from "../src/data";

describe('ordePokemons', () => {

  it('debería ser una función', () => {
    expect(typeof ordePokemons).toBe('function');
  })
});
// importamos la función `example`
import { ordeNumPokemons } from "../src/data";

describe('ordeNumPokemons', () => {

  it('debería ser una función', () => {
    expect(typeof ordeNumPokemons).toBe('function');
  })
});