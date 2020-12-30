import styled from "styled-components";

const CheckBox = styled.label`
  display: block;
  position: relative;
  user-select: none;

  input {
    display: none;

    &:checked ~ span {
      background: #9FCBF8;

      &::after {
        display: block;
      }
    }
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 2rem;
    width: 2rem;
    background: #9FCBF8;
    transition: background 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      left: 0.7rem;
      width: 0.4rem;
      height: 1.5rem;
      border: solid green;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      display: none;
    }
  }
`;

export default CheckBox;
