import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import Input from "../components/Input";
import useAuth from "../hooks/useAuth";


const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

const StyledContent = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

const StyledLabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

const StyledLabelError = styled.label`
  font-size: 14px;
  color: red;
`;

const StyledStrong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;


const SignIn = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <StyledContainer>

      <StyledLabel>SIGNIN ou LOGIN</StyledLabel>
      
      <StyledContent>
      
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
      
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
      
        <StyledLabelError>{error}</StyledLabelError>
      
        <Button className="w-100" onClick={handleLogin}>Entrar</Button>
      
        <StyledLabelSignup>
          Não tem uma conta?
      
          <StyledStrong>
      
            <Link to="/signup">&nbsp;Registre-se</Link>
      
          </StyledStrong>
      
        </StyledLabelSignup>
      
      </StyledContent>
    
    </StyledContainer>
  );
};

export default SignIn;


