import styled from "styled-components";

export const ParagraphSC = styled.p`
  color: #ff5d5d;
`;

export const InputMainSC = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  color: white;
  background: transparent;
  border-bottom: 2px solid #4aa9da;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  -moz-appearance: textfield;
  appearance: textfield;

  &::placeholder {
    color: white;
  }
`;

export const InputSC = styled.input`
  padding: 0.8em 1.8em;
  border: 2px solid #4aa9da;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  transition: 0.3s;
  z-index: 1;
  font-family: inherit;
  color: #4aa9da;

  &::before {
    content: "";
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: #4aa9da;
    transition: 0.5s ease;
    display: block;
    z-index: -1;

    &:hover::before {
      width: 105%;
    }
  }

  &:hover {
    cursor: pointer;
    color: white;
  }
`;

export const DivSC = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;
