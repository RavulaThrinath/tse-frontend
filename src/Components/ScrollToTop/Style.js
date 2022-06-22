import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 95%;
  bottom: 50px;
  height: 20px;
  font-size: 1.7rem;
  z-index: 1;
  cursor: pointer;
  /* color: #1e3c72; */
  color: #ffffff;
  filter: drop-shadow(1px 1px 10px #00000090);
  @media (max-width: 480px) {
    left: 90%;
    bottom: 30px;
    font-size: 1.5rem;
  }
`;
