import styled from 'styled-components';

export const Button = styled.button`
  margin: auto;
  outline: none;
  padding: 0 10px;
  width: 30px;
  height: 20px;
  color: #ffffff;
  background-image: linear-gradient(#1f3c7a, #7192da, #1f3c7a);
  border: none;
  cursor: pointer;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    background-color: #8080ff;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  border: none;
  color: #ffffff;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  background-image: linear-gradient(#1f3c7a, #7192da, #1f3c7a);
  box-shadow: rgb(0 0 0 / 70%) 5px 5px 13px 0px;
  &::placeholder {
    font: inherit;
    font-size: 17px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border-radius: 5px;
  overflow: hidden;
  padding-left: 35px;
`;
