// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
};

let user1: User = {
  id: 1,
  name: "jjori",
  nickname: "jjorimaster",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "호부호형",
};

// 인덱스 시그니쳐
type CountryCodes = {
  Korea: string;
  UnitedState: string;
  UnitedKingdom: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

// 국가 코드를 위와 같이 하나하나 정의 할 수 있지만, 국가 코드가 늘어 날 수록 타입을 계속 추가해야 한다.
// 국가 코드의 타입을 Key값과 Value 값의 타입이 동일 한 것을 확인 할 수 있다.

// 아래와 같이 key와 value의 타입을 기준으로, 규칙을 이용해서 아주 유연하게 객체의 타입을 정의하는 문법을
// `인덱스 시그니쳐` 라고 한다.
type CountryCodes2 = {
  [key: string]: string;
};

let countryCodes2: CountryCodes2 = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

// 인덱스 시그니처를 사용할때 주의 할 점

// 1. 빈 객체는 규칙을 위반하지 않는다.
type CountryNumberCode = {
  [key: string]: number;
};

let countryNumberCode: CountryNumberCode = {};

// 2. 꼭 필요한 프로퍼티를 지정할 수 있다.
// 하지만 해당 프로퍼티 타입은 인덱스 시그니처 타입의 규칙과 일치해야 한다.
// type CountryNumberCode2 = {
//   [key: string]: number;
//   Korea: string; // 인덱스 시그니처 문법과 일치해야함
// };

// let countryNumberCode2: CountryNumberCode2 = {};
