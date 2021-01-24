import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .products {
    width: 99%;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .options {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 99%;
    .back {
    }
    .cart {
      margin-right: 20px;
    }
  }
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: white;

  font-size: 20px;

  outline: none;
  border: none;
  margin: 10px;
  border-radius: 10px;
`;

export { Container, Button };
