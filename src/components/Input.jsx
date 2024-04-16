import React from "react";
import styled from "styled-components";


const StyledInput = styled.input`
  outline: none;
  padding: 16px 20px;
  width:100%;
  border-radius: 5px;
  font-size: 16px;

  background-color: #f0f2f5;
  border: none;
`;


const Input = (prop) => {
  return (
    <StyledInput
      value={prop.value}
      onChange={prop.onChange}
      type={prop.type}
      placeholder={prop.placeholder}
    />
  );
}

export default Input;


