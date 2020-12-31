import GlobalContextProvider from "./context/GlobalContext";
import PatentContextProvider from "./context/PatentContext";

import "./assets/scss/main.scss";

function App() {
  return (
    <GlobalContextProvider>
      <PatentContextProvider>
        <div className="basf-coding-challenge"></div>;
      </PatentContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
