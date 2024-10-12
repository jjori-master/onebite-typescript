// any
// 특정 타입의 변수를 우리가 확실히 모를때

let anyVar: any = 10;
anyVar = 'hello'

let num : number = 20;
anyVar = num;


// unknown
let unknownVar : unknown;
unknownVar = "hello"
unknownVar = 10;
unknownVar = () => {}