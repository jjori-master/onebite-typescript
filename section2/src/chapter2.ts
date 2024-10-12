// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ['hello', 'im', 'winterwood']

let boolArr: Array<boolean> = [true, false, true]

// 배열에 들어가는 요소가 다양할 경우
let multiArr:(number | string | boolean)[] = [1, 'hello', true]

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, ,2, 3],
  [4, 5]
]

// 튜플
// 길이와 타입이 고정된 배열
let tuple1: [number, number] = [1, 2]

let tuple2: [number, string, boolean] = [1, 'hello', true]

const users: [string, number][] = [
  ['쪼리', 1],
  ['가나', 2],
  ['길동', 3],
  // [4, '루비']
]