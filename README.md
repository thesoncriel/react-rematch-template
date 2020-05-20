# React Template Project

본 프로젝트는 React & Redux & TypeScript 기반으로 신속히 업무를 진행할 수 있도록 기반이 마련된 템플릿이다.

사용된 라이브러리는 다음과 같다.

- react.js
  - styled-components
- redux
  - react-redux
  - @rematch/core
- lodash
- axios
- typescript

## 기본 명령어

로컬 개발 시작

```sh
npm start
```

명령어 수행 후 [http://localhost:3000](http://localhost:3000) 으로 접속하여 미리보기 가능하다.

개발 배포

```sh
npm run deploy:stage
```

운영 배포

```sh
npm run deploy:prod
```

## 프로젝트구조

- environments : 프로젝트 내 환경변수를 설정한다.
  - .env.dev : 개발 환경
  - .env.production : 운영 환경
  - .env.stage : 테스트용 스테이지 환경
- public : 정적 에셋(static assets)은 여기에 둔다.
  - data : 정적 json 파일들. 비동기로 불러올 때 쓰인다.
  - images : 사이트에서 쓰이는 각종 이미지 파일을 여기에 둔다.
  - sprites : CSS Background Image Sprite 결과물.
- src
  - common : 공용 모듈.
    - components : 컴포넌트들.
    - contexts: 컴포넌트간의 전역 상태 관리를 위한 컨텍스트 내용들.
    - hoc : High Order Component 모음
    - model : 프로젝트 내 공용으로 쓰이는 각종 모델들.
    - styles : 공용으로 쓰이는 부분 스타일을 정의한다.
    - app.config.ts : 앱 내 환경변수를 객체로 제공하는 서비스.
    - constants.ts : 앱 내에서 공통으로 쓰이는 각종 상수를 정의.
  - entries
    - routes.tsx : 각종 모듈에서 취합된 라우팅 정보를 모아 컴포넌트화 한 것. 모듈별 라우팅 정보가 있으면 여기에 합쳐 주어야 한다.
    - stores.ts : 각종 모듈에서 취합된 스토어 정보를 모아둔 곳. 미들웨어 설정도 여기서 한다.
  - factories : 각종 서비스를 만들기위한 팩토리들.
  - modules : 각 기능(feature)별 모듈 모음. 자세한 내용 아래 **모듈 구성요소** 참조
    - \_layout : 페이지 내 공통으로 쓰이는 header, footer 및 page container 등의 컴포넌트와 필요한 기능이 정의된 모듈.
    - root : 루트 경로(/)에 쓰이는 모듈.
    - {feature} : 특정 경로에서만 쓰이는 모듈.
  - styles
    - constants : 스타일링에 쓰이는 변수들.
    - GlobalStyle.tsx : 글로벌 스타일을 정의한다.
    - mixins.ts : 자주 쓰이는 믹스인을 정의한다.
    - SlickStyle.tsx : react-slick 에서 쓰이는 스타일.은
- util : 공통으로 쓰이는 각종 유틸리티들.

가급적 기본 구조는 수정하지 아니하며 기능 추가나 변경이 필요하다면 상의하여 반영한다.

### 모듈 구성요소

모든 기능(feature)은 modules 내에 구성하며 각 module 의 구성요소는 다음과 같다.

- components : 각종 컴포넌트들. atomic design 을 준수한다.
  - atoms : 단일 컴포넌트. 이 이상 쪼개질 수 없다. ReactDOM 및 SC로 직접 작성하거나 외부 UI 라이브러리(ex: Bootstrap, Material-UI 등)를 직접적으로 이용하는 컴포넌트 이다.
  - molecules : 최소한 1개 이상의 단일 컴포넌트를 이용한 조합 컴포넌트.
  - organisms : 최소한 1개 이상의 조합 컴포넌트를 이용한 복합 컴포넌트.
  - adaptives : 적응형 컴포넌트. 반응형으로 대응이 어려워서 상황에 맞는 컴포넌트를 다르게 적용시킬 때 사용.
- containers : Store 를 직접적으로 이용하는 컴포넌트. atomic design 의 template 에 대응된다.
- hoc : High Order Component 모음.
- hooks : Custom Hooks 모음.
- messages : UI 에서 쓰이는 각종 메시지 모음.
- models : 현재 기능에서만 쓰이는 모델을 정의. interface 나 enum, type 을 정의한다.
- pages: 최종적으로 컴포넌트를 내장하여 화면에 출력될 페이지 컴포넌트. 파라미터 처리는 이 곳에서만 하도록 한다.
- selectors : container 나 hooks 에서 쓰이는 셀렉터를 정의.
- services : 데이터를 전달/조작 하거나 생성하는 등의 서비스 역할을 맡는 모든 객체 및 함수를 포함한다.
- styles : 현재 기능 범위 내에서만 공통으로 쓰이는 각종 스타일을 정의한다.
- rematch: rematch 를 이용하는 Store Model 을 정의한다.
- routes.ts : 라우팅 내용을 설정한다.

## Snippets

본 프로젝트의 구조를 이용하는 개발자를 위해 vscode 전용 snippet 을 만들어 두었다.

### 적용하기

`/dev-helper/snippets` 폴더의 내용을 복사하고 `/.vscode` 폴더를 만들어 이 곳에 붙여넣는다.

### 사용하기

아래는 사용 가능한 snippet 을 표로 정리해 둔 것이다.

#### TypeScript - React

스니펫 사용 시 컴포넌트명은 기본적으로 파일명을 따른다.

| shortcut | name                      | desc.                                                                    | spec.                                            |
| :------- | :------------------------ | :----------------------------------------------------------------------- | :----------------------------------------------- |
| !rpc     | React Page Component      | SPA 형태로 이용되는 페이지 컴포넌트를 만든다.                            | useQueryParams 를 이용하여 파라미터 처리         |
| !rcc     | React Container Component | Store 와 자료교환을 하는 컨테이너 컴포넌트를 만든다.                     | useDispatch, useSelector 를 이용하여 스토어 연계 |
| !rwc     | React Wrapper Component   | Props 와 styled 가 미리 선언된 Wrapping 가능한 함수형 컴포넌트를 만든다. |                                                  |
| !rc      | React Component           | !rwc 와 같다 (일단은..)                                                  |                                                  |
| !ric     | React Input Component     | 입력 양식에 대한 간단한 기능이 포함된 입력 컴포넌트를 만든다.            | 기본적인 onChange 이벤트 처리가 되어있음         |

#### TypeScript - Redux

이펙트를 제외한 나머지는 모두 typesafe-actions 의 FSA 를 따른다.

| shortcut | name          | desc.                                           | spec.                                                                           |
| :------- | :------------ | :---------------------------------------------- | :------------------------------------------------------------------------------ |
| !racts   | Redux Actions | 액션이 모여진 파일의 초기 설정 내용을 만든다.   | createAction 이용.<br/>수행/성공/실패 3가지 액션을 기본으로 만든다.             |
| !ract    | Redux Action  | 하나의 액션을 만든다.                           | createAction 이용.                                                              |
| !reffs   | Redux Effects | 이펙트가 모여진 파일의 초기 설정 내용을 만든다. | createEffect 이용.                                                              |
| !reff    | Redux Effect  | 단일 이펙트 함수를 만든다.                      | createEffect 이용.                                                              |
| !rred    | Redux Reducer | 리듀서 파일의 초기 설정 내용을 만든다.          | 스토어에서 쓰이는 State, 초기화 함수, 그리고 reudcer 3가지가 세트로 만들어진다. |

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To-Do

- 로그인 샘플 페이지 및 기능 작성
- 파일 업로드 샘플 페이지
- 스니펫: 리듀서 보일러 플레이트 내 타입 명칭을 파일명에서 가져오기
- 유틸리티 함수들에 대한 테스트 코드 작성
- gulp 걷어내기 (...될까;;)
- 실시간 테마 변경 샘플 작성

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
