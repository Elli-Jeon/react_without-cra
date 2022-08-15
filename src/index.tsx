// server entry point.

import { hydrate } from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { loadableReady } from "@loadable/component";
// import { Provider } from "react-redux";

// import configureStore from "./store";
// import GlobalStyle from "./styles/GlobalStyle";
import App from "./App";

// const store = configureStore();

// code splitting한 컴포넌트들을 랜더링할 수 있게 해줌
loadableReady(() => {
  const rootElement = document.getElementById("root");
  // hydrate : ReactDom.render 대신 사용. 서버에서 랜더링 된 html에 javascript이벤트 부착
  hydrate(
    // <Provider store={store}>
    <BrowserRouter>
      <>
        {/* <GlobalStyle /> */}
        <App></App>
      </>
    </BrowserRouter>,
    // </Provider>
    rootElement,
  );
});

if (module.hot) {
  module.hot.accept();
}
