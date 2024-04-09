import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  height: 100vh;
  padding: 60px 85px;
  overflow: hidden;
  flex: auto;

  h2 {
    margin-bottom: 24px;
  }

  h3 {
    font-size: 18px;
  }
`;

export const LastTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: hidden;

  h3 {
    margin-bottom: 18px;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(262.71deg, #00d1ff -30.04%, #00ffa3 124.74%);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .last-tasks-list {
    margin-top: 28px;
    overflow-y: scroll;
  }
`;

export const CompletedTaskContainer = styled.div`
  flex: 1;
  padding-top: 28px;

  .completed-tasks-list {
    margin-top: 28px;
  }
`;
