import { Kata } from '../src';

describe('Kata scenarios', () => {
  it('should create instance', () => {
    const sut = new Kata();
  });

  it('should execute', () => {
    const sut = new Kata();

    const actual = sut.execute('something', 2);
  });

  it('should not return null', () => {
    const sut = new Kata();

    const actual = sut.execute('something', 2);

    expect(actual).not.toBeNull();
  });

  it('should return expected result', () => {
    const sut = new Kata();

    const actual = sut.execute('something', 2);

    expect(actual).toBe('something2');
  });
});