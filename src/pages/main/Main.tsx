import React from "react";
import * as S from "./Main.styles";

const App = () => {
  return (
    <S.AppContainer>
      <S.Header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <S.Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </S.Link>
      </S.Header>
    </S.AppContainer>
  );
};

export default App;
