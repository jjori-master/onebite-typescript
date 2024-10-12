// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해 두고 사용하는 타입

enum Role {
  ADMIN, // 아무것도 정의 하지 않으면 0부터 시작
  USER,
  GUEST
}

enum Language {
  korean ='ko',
  english = 'en',
}

type User = {
  name : string,
  role : Role,
  language: Language
}

const user1: User = {
  name: '홍길동',
  role: Role.ADMIN,
  language: Language.korean
}

console.table(user1)