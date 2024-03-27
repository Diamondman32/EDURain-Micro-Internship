import styled from "styled-components";
export default function Neighborhood() {
  const Image = styled.img`
    width: 100vw;
    object-fit: contain;
  `;

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
