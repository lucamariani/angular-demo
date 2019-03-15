import { Persona, Sesso } from './persona';

describe('Persona', () => {
  it('should create an instance', () => {
    expect(new Persona("", "", 1, Sesso.Femmina)).toBeTruthy();
  });
});
