import styled, { css } from "styled-components";

interface TaskProp {
  $isCompleted: boolean;
}

export const TaskItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;

  .delete {
    padding-top: 1.5px;
    margin-left: 18px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const TaskDescription = styled.div`
  max-width: 80%;
`;

export const CheckboxLabel = styled.label<TaskProp>`
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 25px;
  cursor: pointer;
  font-size: 1rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding-top: 1.5px;

  ${(props) =>
    props.$isCompleted
      ? css`
          color: #9d9aad;
          text-decoration: line-through;
        `
      : null}

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;

export const Checkmark = styled.span<TaskProp>`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background: linear-gradient(259.93deg, #475569 -41.68%, #00171f 146.85%);
  border: 2px solid #ffffff;
  border-color: #fff;
  border-radius: 5px;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }

  &:hover {
    background-color: #fff;
  }

  ${CheckboxLabel} input:checked ~ & {
    background: linear-gradient(262.71deg, #00d1ff -30.04%, #00ffa3 124.74%);
  }

  ${(props) =>
    props.$isCompleted
      ? css`
          background: #3a3847;
          border-color: #3a3847;
          border-radius: 5px;

          ${CheckboxLabel} input:checked ~ & {
            background: #3a3847;
          }

          &:after {
            display: block;
            left: 6px;
            top: 2px;
            width: 3px;
            height: 7px;
            border: solid white;
            border-color: #fff;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
          }
        `
      : null}
`;
