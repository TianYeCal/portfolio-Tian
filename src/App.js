import styled from "styled-components";
import Detail from "./components/Detail";
import SelfSection from "./components/SelfSection";

function App() {
  return (
    <Wrapper>
      <SelfSection />
      <Detail />
    </Wrapper>
  );
}
const Wrapper = styled.main`
  max-width: 100vw;
  /* display: grid;
  grid-template-columns: 2fr 3fr;
  position: relative; */
  @media (max-width: 768px) {
    position: relative;
  }
`;
export default App;
