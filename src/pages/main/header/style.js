import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(244, 244, 244, 1);
  border-radius: 0px 0px 10px 10px;

  img {
    max-width: 200px;
    max-height: 200px;
  }

  h1 {
    font-size: 80px;
    font-family: "Pacifico", cursive;
    color: rgba(63, 66, 163, 1);
  }

  @media (max-width: 700px) {
    height: 120px;

    img {
      width: 120px;
      height: 120px;
    }

    h1 {
      font-size: 30px;
    }
  }
`;
