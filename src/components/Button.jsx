import { styled } from "solid-styled-components";

export const AddButton = styled("button")`
  width: 200px;
  cursor: pointer;
  align-self: flex-end;
  background: #004980;
  border: 0px;
  padding: 20px 10px;
  color: white;
  font-weight: 700;
  border-radius: 10px;
`;

export const CloseButton = styled("button")`
  align-self: flex-end;
  background: transparent;
  width: 28px;
  border: 0px;
  color: gray;
  cursor: pointer;
  font-size: 20px;
  &:before {
    content: "x";
  }
`;
