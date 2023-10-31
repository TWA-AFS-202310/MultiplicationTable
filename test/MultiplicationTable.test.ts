import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.create(start, end)

    //then
    expect(rendered).toBe('1 * 1 = 1')
  });
  it('should return null for invalid inputs', () => {
    // given
    const table = new MultiplicationTable()
    const start = 4;
    const end = 2;
    // when 
    const rendered = table.create(start, end);
    // then
    expect(rendered).toBeNull();
  });
});
