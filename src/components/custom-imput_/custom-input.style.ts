import styled from "styled-components";

export const CustomInputContainer = styled.div`
  position: relative;
  width: 100%;

  input {
    background: none;
    color: #f7f7f7;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 97%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #666;
    transition: all 0.5s ease;

    &:focus {
      outline: none;
      border-bottom: 1px solid #ea580c;
    }

    &:focus ~ .custom-input-label {
      top: -14px;
      font-size: 12px;
      color: #ea580c;
    }
  }

  .custom-input-label {
    color: #666;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      top: -14px;
      font-size: 12px;
      color: #00ffa3;
    }
  }
`;
