import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <img
        width="100"
        src="https://s.gr-assets.com/assets/layout/goodreads_logo_324-a908b923dc3ed9b7a13f3da4d1ffb2df.png"
      ></img>
      <Maincontainer>
        <Header />
        <Footer />
      </Maincontainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ebe8df;
  width: 100vw;
  height: 100vh;

  & img {
    padding: 2rem 0rem 0rem 1rem;
  }
`;
const Maincontainer = styled.div`
  margin-left: 13rem;
  width: 600px;
  height: 420px;
  background-color: white;
  border-style: solid;
  border-color: #d0d0c8;
  border-width: 1.5px;
`;
export default App;
