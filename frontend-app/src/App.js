import GlobalContextProvider from "./context/GlobalContext";
import PatentContextProvider from "./context/PatentContext";

import Header from "./components/header/Header";

import "./assets/scss/main.scss";

function App() {
  return (
    <GlobalContextProvider>
      <PatentContextProvider>
        <div className="basf-coding-challenge">
          <Header />
        </div>
        ;
      </PatentContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
