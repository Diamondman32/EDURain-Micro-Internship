import styled from "styled-components";

export default function DontMissOutSection() {
  const Container = styled.div`
    font-family: "Poppins", sans-serif;
    width: 90%;
    margin: auto;
    margin-bottom: 3vw;
    margin-top: 3vw;
    display: flex;
    @media (orientation: landscape) {
      flex-flow: row-reverse nowrap;
    }
    @media (orientation: portrait) {
      flex-flow: column wrap;
      align-content: center;
    }
  `;
  const TextBlock = styled.div`
    width: 75vw;
    margin-right: 5vw;
    @media (orientation: landscape) {
      margin-right: 5vw;
    }
    @media (orientation: portrait) {
      align-self: center;
    }
  `;
  const Button = styled.button`
    padding: 2vw;
    font-size: 3.5vw;
    width: 25vw;
    color: #ffffff;
    background-color: #268ce5;
    border: 0px;
    border-radius: 40vw;
    @media (orientation: portrait) {
      padding: 2vw;
      font-size: 3.5vw;
      width: 75vw;
    }
  `;
  const H1 = styled.h1`
    font-size: 3vw;
    @media (orientation: portrait) {
      font-size: 5vw;
    }
  `;
  const Img = styled.img`
    width: 50vw;
    @media (orientation: portrait) {
      width: 90vw;
    }
    @media (orientation: landscape) {
      object-fit: scale-down;
    }
  `;
  const P = styled.p`
    font-weight: 300;
    font-size: 2vw;
    width: 100%;
    @media (orientation: portrait) {
      font-size: 3vw;
    }
  `;

  return (
    <Container>
      <Img draggable="false" src="images/image.png" alt="People on campus" />
      <TextBlock>
        <H1>Don't Miss Out On The Best Location.</H1>
        <P>
          Our Renters Guide lays out every step you need to take to secure
          off-campus housing by your school: Budgets, Renters Insurance, credit,
          security deposits, scholarships and more.
        </P>
        <Button
          onClick={() => window.open("https://www.edurain.org/srg-redesign")}
        >
          GO
        </Button>
      </TextBlock>
    </Container>
  );
}
