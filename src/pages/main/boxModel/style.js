import styled from "styled-components";

export const Container = styled.div`
  width: 90%;

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
    width: 80%;
    height: 80%;
  }

  h2 {
    margin: 0px;
    font-size: 50px;
    font-family: "Yusei Magic", sans-serif;
      color: white;
  }

  @media (max-width: 700px){

    width: 150px;
    height: 150px;

    margin-bottom: 30px;

    img{
      width: 60%;
      height: 60%;
    }
    h2{
      font-size: 30px;
    }
  }

`;
