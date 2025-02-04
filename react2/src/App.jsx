import { Container } from "react-bootstrap";
import "./App.css";
import Libri from "./assets/AllTheBooks";
import MyFooter from "./assets/Myfooter";
import TopBar from "./assets/myNav";
import Welcome from "./assets/Welcome";

function App() {
  return (
    <>
      <TopBar />
      <Welcome />
      <Container>
        <Libri />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
