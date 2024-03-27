import SearchBar from "./searchBar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  position: relative;
`;
const BackgroundImage = styled.img`
  width: 100vw;
`;

export default function BackgroundSearch() {
  return (
    <Container>
      <BackgroundImage draggable="false" src="./heroic.png" alt="apartments" />
      <SearchBar />
    </Container>
  );
}
