import GlobalContextProvider from "./context/GlobalContext";
import PatentContextProvider from "./context/PatentContext";

import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";

import "./assets/scss/main.scss";

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalContextProvider>
        <PatentContextProvider>
          <main className="basf-coding-challenge">
            <Header />
            <Content />
            <Footer />
          </main>
        </PatentContextProvider>
      </GlobalContextProvider>
    </ApolloProvider>
  );
}

export default App;
