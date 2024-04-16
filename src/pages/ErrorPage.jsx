import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import useAuth from "../hooks/useAuth";


const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 20px;
`;

const StyledTitle = styled.h2``;

const ErrorPage = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <StyledContainer>

      <StyledTitle>Página não encontrada! 404</StyledTitle>
      
      <Button className="w-100" onClick={() => [navigate(-1), navigate("/home")]}>
        Voltar
      </Button>
    
    </StyledContainer>
  );
};

export default ErrorPage;