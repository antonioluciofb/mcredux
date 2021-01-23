import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: rgb(7, 7, 54);
  border-radius: 10px;

  padding: 20px;

  :hover{
    background-color: rgb(31, 31, 119);
    transition: all 0.1s cubic-bezier(0, 1.85, 0.9, -0.43)
  }

  

  img {
    width: 250px;
    height: 250px;
  }

  h2 {
    margin: 0px;
    font-size: 50px;
    font-family: "Yusei Magic", sans-serif;
      color: white;
  }
`;
