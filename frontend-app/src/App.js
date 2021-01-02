import GlobalContextProvider from "./context/GlobalContext";
import PatentContextProvider from "./context/PatentContext";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./assets/scss/main.scss";

function App() {
  return (
    <GlobalContextProvider>
      <PatentContextProvider>
        <main className="basf-coding-challenge">
          <Header />
          <Footer />
        </main>
      </PatentContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
