import styled from "styled-components";

export const Container = styled.div``;

export const Model = styled.div`
  width: 250px;
  height: 370px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 10px;
  margin: 10px;
  background-color: #f4f4f4;
  box-shadow: 4px 4px 50px black;

  img {
    width: 150px;
    height: 150px;

    padding: 10px;
  }

  p {
    margin: 8px;

    text-align: center;
    font-family: "Yusei Magic", sans-serif;

    &.title {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 2px;
    }

    &.price {
      font-weight: 600;
    }

    &.description {
      font-weight: 200;
    }
  }

  input.default {
    width: 80%;
    height: 30px;
    margin: 5px 0px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Yusei Magic", sans-serif;
    font-size: 15px;
    letter-spacing: 2px;

    color: white;

    border: 0px;
    border-radius: 8px;
    background-color: rgba(59, 65, 137, 0.8);
    margin-top: auto;

    cursor: pointer;
    outline: none;

    :hover {
      background-color: rgba(59, 65, 137, 1);
      transition: all 300ms ease-in;
    }
  }
  input.chosen {
    width: 80%;
    height: 30px;
    margin: 5px 0px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Yusei Magic", sans-serif;
    font-size: 15px;
    letter-spacing: 2px;

    color: white;

    border: 0px;
    border-radius: 8px;
    background-color: rgba(0, 183, 9, 1);
    margin-top: auto;

    cursor: pointer;
    outline: none;

    :hover {
      background-color: rgba(0, 183, 9, 0.6);
      transition: all 300ms ease-in;
    }
  }
`;
