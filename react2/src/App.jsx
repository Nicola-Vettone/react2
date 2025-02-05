import { Container } from "react-bootstrap";
import "./App.css";
import fantasy from "../src/assets/books/fantasy.json";
{
  /*import Libri from "./assets/components/AllTheBooks";*/
}

import MyFooter from "./assets/components/Myfooter";
import TopBar from "./assets/components/myNav";
import Welcome from "./assets/components/Welcome";
import BookList from "./assets/components/BooksList";

function App() {
  return (
    <>
      <TopBar />
      <Welcome />

      <Container>
        {/*<Libri />*/}
        <BookList list={fantasy} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
