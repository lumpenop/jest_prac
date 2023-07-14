import {forEach} from './forEach';

const mockCallback = jest.fn(x => 42 + x);

test('forEach mock function', () => {
  forEach([0, 1], mockCallback);

  // The mock function was called twice
  // - mockCallback 함수가 두 번 호출되었는지 검사
  expect(mockCallback.mock.calls).toHaveLength(2);

  // The first argument of the first call to the function was 0
  // - 첫 번째 호출의 첫 번째 인수가 0 인지 검사
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  // - 두 번째 호출의 첫 번째 인수가 1인지 검사
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  // - 첫 번째 호출의 반환 값이 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});

const myMock1 = jest.fn();
const a = new myMock1();
console.log(myMock1.mock.instances, 'mock 1');
// > [ <a> ]

const myMock2 = jest.fn();
const b = {};
const bound = myMock2.bind(b);
bound();
console.log(myMock2.mock.contexts, 'mock 2');
// > [ <b> ]

const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true
