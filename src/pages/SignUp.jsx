import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import Input from "../components/Input";
import useAuth from "../hooks/useAuth";

// validacao de input
// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

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

const StyledLabelSignIn = styled.label`
  font-size: 16px;
  color: #676767;
`;

const StyledlabelError = styled.label`
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

const SignUp = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!email | !senhaConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (senha !== senhaConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <StyledContainer>

      <StyledLabel>SIGNUP</StyledLabel>

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

        <Input
          type="password"
          placeholder="Confirme sua Senha"
          value={senhaConf}
          onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
        />

        <StyledlabelError>{error}</StyledlabelError>

        <Button className="w-100" onClick={handleSignup}>Sign Up</Button>

        <StyledLabelSignIn>
          Já tem uma conta?
      
          <StyledStrong>
      
            <Link to="/">&nbsp;Entre</Link>
      
          </StyledStrong>
      
        </StyledLabelSignIn>
      
      </StyledContent>
    
    </StyledContainer>
  );
};

export default SignUp;
