# Movie Graphes

상영중인 영화에 대한 전반적인 정보를 사용자가 편리하게 볼 수 있도록 돕는 애플리케이션.

## Stack

### Tech

> - FE: HTML5, CSS3, SCSS, Javascript, Typescript, Vue2, Vuex, Google-Charts, Axios
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
- 인스턴스 라이프사이클(`created`)에서 데이터 할당
- 컴포넌트 데이터 할당 오류 해결[3]

![mg-화면 캡처 2022-02-22 221255](https://user-images.githubusercontent.com/61080445/155139881-af4bf73c-0fca-454e-9646-0955ce2e7c7f.png)

#### 0223

- 클라이언트 측 폴더와 서버 측 폴더 분리
- Vue3에서 Vue2로 변경
- 서비스 포트 변경

![image](https://user-images.githubusercontent.com/61080445/155449709-e12659d0-8db4-47e2-b3b9-6383ef6ee5a7.png)

#### 0224~0226

- 그래프 추가 및 관련 에러 해결 (Vue 프레임워크 관련)
  - 서버에서 불러온 데이터를 가공
  - 가공한 데이터를 렌더링 후 데이터가 변경되지 않는 이상 계산하지 않도록 의존성 대입
  - 브라우저 화면에 영화 정보를 렌더링
  - 그래프의 흐름을 위해 날짜 데이터를 가공하여 문자열로 변경 후, Date 형식으로 변경
- 서버 관련 로직 작성
  - The Movie DB API (목록, 세부사항, 이미지 등)
  - 그래프 데이터 업데이트하는 로직
  - MongoDB에 저장 및 API 사용량을 줄이기 위한 로직
  - 요청 지연 시간 감소를 위한 병렬 처리

```
렌더링하는 날짜마다 DB에 데이터를 추가하는 방식이라 현재는 데이터가 없습니다.
1번째 사진은 데이터베이스에서 이전 날짜로 수정 후 현재 날짜의 데이터가 추가되는지 확인한 것
```

![image](https://user-images.githubusercontent.com/61080445/155843590-38a77c84-d450-40f5-a18c-2d659aba6115.png)
![image](https://user-images.githubusercontent.com/61080445/155844561-3b2f349f-1df2-435a-8502-f0bbb49b1f71.png)

#### 0227

- 그래프 박스, 상세 정보 박스(포스터 영역, 영화 정보 영역) 스타일 적용
  - 영화 포스터의 각기 다른 높이 / 영화 장르의 개수에 따라 줄바꿈 현상 등으로 인해 박스의 크기가 영화 요소마다 달라짐.
    - 그래프의 위치를 그래프 박스의 밑에 위치시키고 배경을 같은 색으로 변경하여 모두 같은 크기로 보이도록 적용
    - 타이틀 줄바꿈 방지, ...처리
    - 포스터 영역의 크기를 auto로 변경하여 영화 정보 영역과의 간격이 자연스럽도록 변경
    - 단락 크기를 설정하여 영화 정보 간 간격이 자연스럽도록 변경
  - 그라데이션으로 입체감 적용
  - 배경 이미지가 영화 요소의 개수에 의해 그라데이션이 깨지는 현상 해결
- 최신 항목이 아닌 최고 매출 항목을 서버 상에서 요청해서 데이베이스에 저장하도록 작성
  - 최신 항목은 Movies -> Movie로 이동
  - 최고 매출 항목을 Movies에 추가하고 Config 작성

![image](https://user-images.githubusercontent.com/61080445/155878541-5d303f01-61d9-4c34-b034-77b25f31fe7d.png)

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

```
[4] Cannot find module '@/components/main/index.vue' or its corresponding type declarations.

https://www.inflearn.com/questions/30459
: tsconfig.json 파일이 프로젝트의 루트에 있는것이 중요한 것이 아닌, Vue 프로젝트가 vscode workspace의 루트에 있는지가 중요.
: 프로젝트 폴더를 열어서 사용한 것인지, 프로젝트 폴더가 포함된 상위 폴더를 열어서 사용한 것인지 먼저 확인.
```

```
[5] Cannot resolve definitions for module 'xxx'

https://cpdev.tistory.com/166?category=687261
: 대부분의 라이브러리들은 Typescript에 대응하여 .d.ts 파일을 제공. 그러나 일부 라이브러리의 해당 기능을 지원하지 않으므로, 에러 발생(오래되거나, 관리가 안된 경우)
: d.ts 파일을 생성하여 모듈 선언
```
