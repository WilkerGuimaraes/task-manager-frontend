import styled from "styled-components";

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;
  background: linear-gradient(to right, #001c3d, #255aaf);
`;

export const ButtonContainer = styled.div`
  button {
    width: 300px;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    color: #f7f7f7;

    &:hover {
      opacity: 0.9;
    }
  }
`;
