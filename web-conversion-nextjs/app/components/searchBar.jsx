import styled from "styled-components";

const SearchContainer = styled.div`
  position: absolute;
  left: 27vw;
  top: 9.5vw;
`;
const Img = styled.img`
  object-fit: scale-down;
  width: 46vw;
`;

export default function SearchBar() {
  return (
    <SearchContainer>
      <Img
        draggable="false"
        id="searchBar"
        src="./searchBar.png"
        alt="temporary search bar"
      />
    </SearchContainer>
  );
}
