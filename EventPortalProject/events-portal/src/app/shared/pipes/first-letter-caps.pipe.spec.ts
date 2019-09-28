import { FirstLetterCapsPipe } from './first-letter-caps.pipe';

describe('FirstLetterCapsPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstLetterCapsPipe();
    expect(pipe).toBeTruthy();
  });
});
