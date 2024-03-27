import SearchBar from "./searchBar";
import styled from "styled-components";
export default function BackgroundSearch() {
  const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    position: relative;
  `;
  const BackgroundImage = styled.img`
    width: 100vw;
  `;
  const SearchBarImg = styled(SearchBar)`
    position: absolute;
    left: 28vw;
    top: 9.5vw;
    width: 46vw;
  `;

  return (
    <Container>
      <BackgroundImage
        draggable="false"
        src="images/hero.png"
        alt="apartments"
      />
      <SearchBarImg />
    </Container>
  );
}
