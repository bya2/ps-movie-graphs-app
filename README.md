# Movie Graphes

상영중인 영화에 대한 전반적인 정보를 사용자가 편리하게 볼 수 있도록 돕는 애플리케이션.

### Current Stack

> - FE: HTML5, CSS3, SCSS, Javascript, Typescript, Vue, Vuex, Axios
> - BE: NodeJS, Express, Mongoose(MongoDB)

### Device

> - Mobile
> - Tablet
> - Laptop
> - Desktop

## Demo

#### 0220 (Start)

- 그리드 레이아웃 구성
- 미디어쿼리 반응형 웹
- 백그라운드 임시 이미지
- CSS 재사용성을 위한 SCSS의 `extend`, `mixin` 작성

#### 0222

- 컴포넌트(Logo, Movies, Graph, Info)
- Props 전달 오류 해결[1]
- 컴포넌트 데이터 할당 오류 해결[3]

#### Error

```
[1] 전달하려는 Prop가 배열이라는 것을 인식하지 못하고 문자열로 인식하는 에러

https://kr.vuejs.org/v2/guide/components-props.html
: 해당 배열은 정적인 값이지만, Vue에서 해당 값이 배열이라는 것을 알 수 있도록 하기 위해 `v-bind`를 이용해 문자열이 아닌 JavaScript 표현식이라는 것을 알림.
```

```
[2] Type 'void | { name: string; }[]' is not assignable to type 'Movies'. Type 'void' is not assignable to type 'any[]'

: 프로미스의 오류 처리기에서도 값을 반환하므로 표기.
```

```
[3] Conversion of type 'never[]' to type '() => ArrMovies' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

: 컴포넌트의 data에 값을 할당할 때는 Props와 다른 방식의 타입 선언이 필요.
: Props는 Constructor as () => Type,
: Data는 Instance as Type,
```
