import { MockLocalStorage } from './mock-local-storage';

describe('MockLocalStorage', () => {
  it('should create an instance', () => {
    expect(new MockLocalStorage()).toBeTruthy();
  });
});
