import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  margin-bottom: 3vw;
  margin-top: 3vw;
  @media (orientation: portrait) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (orientation: landscape) {
    flex-flow: row wrap;
    margin-left: 10vw;
  }
`;
const BalloonImg = styled.img`
  object-fit: contain;
  order: 2;
  @media (orientation: portrait) {
    width: 40vw;
  }
  @media (orientation: landscape) {
    margin-left: 17vw;
    width: 20vw;
  }
`;
const NeighborhoodImg = styled.img`
  object-fit: contain;
  order: 4;
  @media (orientation: portrait) {
    width: 80vw;
  }
  @media (orientation: landscape) {
    margin-left: 2vw;
    width: 50vw;
  }
`;
const H1 = styled.h1`
  font-size: 3vw;
  order: 1;
  @media (orientation: portrait) {
    text-align: center;
  }
  @media (orientation: landscape) {
    max-width: 30vw;
  }
`;
const P = styled.p`
  font-size: 2vw;
  order: 3;
  @media (orientation: portrait) {
    text-align: center;
  }
  @media (orientation: landscape) {
    max-width: 30vw;
  }
`;

export default function Balloon() {
  return (
    <Container>
      <BalloonImg
        draggable="false"
        src="./balloon.png"
        alt="an image of a balloon"
      />
      <NeighborhoodImg
        draggable="false"
        src="./neighborhood.png"
        alt="an image of a neighborhood"
      />
      <H1>We Build Official College Off-Campus Housing Communities</H1>
      <P>
        We connect students with landlords and property management groups in a
        closed software ecosystem in partnership with colleges, creating a
        transparent process for landlords and students.
      </P>
    </Container>
  );
}
