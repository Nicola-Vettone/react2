import { Container } from "react-bootstrap";
import "./App.css";
import Libri from "./assets/components/AllTheBooks";
import MyFooter from "./assets/components/Myfooter";
import TopBar from "./assets/components/myNav";
import Welcome from "./assets/components/Welcome";

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
