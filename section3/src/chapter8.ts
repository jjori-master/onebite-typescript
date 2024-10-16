/**
 * 서로소 유니온 타입
 * 서로소 유니온 타입은 교집합이 없는 타입들 즉 서로소 관계에 있는 타입들을 모아 만든 유니온 타입을 말 합니다.
 */

/**
 * 각 타입의 유일한 파라미터를 통해 사용자(User)의 타입을 좁히는데,
 * 그럴 경우 파라미터만 봐서는 사용자 타입이 어떤 것인지 추론하기 힘들어서 타입을 번갈아봐야 하는 불편함이 생긴다.
 * 만약 프러퍼티가 추가되어 겹치는 경우에는 타입을 좁히기 위해 다시 유일한 프로퍼티를 조건에 넣어줘야 한다.
 */

{
  type Admin = {
    name: string;
    kickCount: number;
  };

  type Member = {
    name: string;
    point: number;
  };

  type Guest = {
    name: string;
    visitCount: number;
  };

  type User = Admin | Member | Guest;

  function login(user: User) {
    if ("kickCount" in user) {
      console.log(
        `${user.name} 관리자님께서는 ${user.kickCount}명 강퇴하셨습니다.`
      );
    } else if ("point" in user) {
      console.log(`${user.name} 사용자님은 ${user.point}가 있습니다.`);
    } else if ("visitCount" in user) {
      console.log(`${user.name}님은 ${user.visitCount}번 방문허셨습니다.`);
    }
  }
}

{
  /**
   * 각 타입 tag 프로퍼티에 문자열 리터럴 타입을 선언하여 각 타입이 겹치지 않는 공집합 형태로 만든다.
   * 서로 겹치지 않기 때문에 tag 값을 통해 타입을 좁힐 수 있다.
   */

  type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
  };

  type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
  };

  type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
  };

  type User = Admin | Member | Guest;

  function login(user: User) {
    switch (user.tag) {
      case "ADMIN":
        console.log(
          `${user.name} 관리자님께서는 ${user.kickCount}명 강퇴하셨습니다.`
        );
        break;
      case "MEMBER":
        console.log(`${user.name} 사용자님은 ${user.point}가 있습니다.`);
        break;
      case "GUEST":
        console.log(`${user.name}님은 ${user.visitCount}번 방문허셨습니다.`);
        break;
    }
  }
}
