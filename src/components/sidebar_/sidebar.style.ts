import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 15vw;
  height: 100vh;
  text-align: center;
  background: #172554;
  padding: 56px 28px;
  position: relative;

  .sign-out {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    button {
      width: 100%;
      font-size: 1rem;
      color: #f7f7f7;
    }
  }
`;
