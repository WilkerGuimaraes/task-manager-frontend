import { useNavigate } from "react-router-dom";
import { CustomButtom } from "../../components/custom-buttom_/custom-button";
import { ButtonContainer, WelcomeContainer } from "./welcome.page.style";

export function Welcome() {
  const navigate = useNavigate();

  function handleSignInClick() {
    navigate("/");
  }

  return (
    <WelcomeContainer>
      <h1>Bem-vindo(a)!</h1>
      <h3>Este é o Gerenciador de tarefas</h3>
      <ButtonContainer>
        <CustomButtom onClick={handleSignInClick}>Entrar</CustomButtom>
      </ButtonContainer>
    </WelcomeContainer>
  );
}
