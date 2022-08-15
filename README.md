# custom SSR (2022-08-15)

webpack, babel, @loadable-component를 사용해서 next 없이 SSR 구현

## How to Start

> development

```
npm run start
```

> production

```
npm run build
```

## dependencies

- react: 리액트
- react-dom: 브라우저 DOM을 제어한다. UI를 렌더링할때 사용한다.
- @babel/core: babel의 핵심 라이브러리로 es6를 es5로 컴파일해준다.
- babel-loader: babel과 webpack을 사용해서 자바스크립트 파일을 컴파일한다.
- @babel/preset-env: es6, es7 버전을 지정안해도 babel이 자동 탐지한다.
- @babel/preset-react: 리액트(JSX)를 js로 인식가능하게 한다.
- css-loader: css 파일을 import 또는 require할 수 있게 한다.
- style-loader: css파일을 style태그로 만들어 head에 삽입한다.
- html-webpack-plugin: 웹팩 번들에 html파일을 제공한다.
- webpack: 웹팩을 사용하기위한 주 이다.
- webpack-dev-server: 웹팩 개발 서버를 구동할수 있다.
- webpack-cli: 웹팩 커맨드라인을 사용할 수 있다.

## Reference

[Freedom from create-react-app](https://levelup.gitconnected.com/freedom-from-create-react-app-how-to-create-react-apps-without-cra-27fadeb79c82)

[리액트 웹팩으로 개발 환경 구축하기(without CRA)](https://velog.io/@_uchanlee/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%9B%B9%ED%8C%A9%EC%9C%BC%EB%A1%9C-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0without-CRA)

[eslint, prettier](https://velog.io/@kerem119/ESLint-Prettier-settings-for-in-Typescript-React)
