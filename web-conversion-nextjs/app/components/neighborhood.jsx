import styled from "styled-components";

const Image = styled.img`
    width: 100vw;
    object-fit: contain;
  `;

export default function Neighborhood() {
  return (
    <div className="neighborhood">
      <Image
        draggable="false"
        id="neighborhood"
        src="./otherNeighborhood.png"
        alt="temporary search bar"
      />
    </div>
  );
}
