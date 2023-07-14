export function forEach(
  items: number[],
  callback: jest.Mock<any, [x: any], any>,
) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
