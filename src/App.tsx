import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import loadable from "@loadable/component";

// lodable : 컴포넌트들을 code splitting 해주는 import 함수
// webpackChunkName은 나눠진 파일에 이름 지정해주는 magic comments
const Home = loadable(() => import(/* webpackChunkName: "Home" */ "./pages/home"));

class App extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>App</title>
        </Helmet>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </>
    );
  }
}

export default App;
