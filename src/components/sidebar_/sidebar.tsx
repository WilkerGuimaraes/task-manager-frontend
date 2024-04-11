import { useNavigate } from "react-router-dom";
import { SidebarContainer } from "./sidebar.style";
import { CustomButtom } from "../custom-buttom_/custom-button";

export function SideBar() {
  const navigate = useNavigate();

  function handleSignOutClick() {
    navigate("/welcome");
  }

  return (
    <SidebarContainer>
      <h2>Gerenciador de tarefas</h2>

      <div className="sign-out">
        <CustomButtom onClick={handleSignOutClick}>Sair</CustomButtom>
      </div>
    </SidebarContainer>
  );
}
