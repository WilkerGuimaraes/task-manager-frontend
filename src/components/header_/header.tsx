import { useNavigate } from "react-router-dom";

import { CustomButtom } from "../custom-buttom_/custom-button";

import { HeaderContainer } from "./header.style";

export function Header() {
  const navigate = useNavigate();

  function handleSignOutClick() {
    navigate("/welcome");
  }

  return (
    <HeaderContainer>
      <h2>Gerenciador de tarefas</h2>

      <div className="sign-out">
        <CustomButtom onClick={handleSignOutClick}>Sair</CustomButtom>
      </div>
    </HeaderContainer>
  );
}
