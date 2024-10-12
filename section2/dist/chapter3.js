// object
// object 타입을 선언해도 되지만 이럴 경우 user.id 같이 객체 속성에 접근할때 에러 발생한다.
// object 타입은 객체 타입임을 알려줄 뿐이다.
// let user: object = {id: 1, name: '쪼리'}
// 이럴 경우 `객체 리터럴 타입 {}`으로 해줘야한다.
let user = { id: 1, name: "쪼리" };
let config = {
    apiKey: 'MyApiKey'
};
// readonly 키워드가 붙은 타입은 다시 설정이 불가능 하다.
config.apiKey = 'NewApiKey';
export {};
