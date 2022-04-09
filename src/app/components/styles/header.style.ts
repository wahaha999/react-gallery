import styled from "styled-components";
import { buttonProps } from "../../types/props";

export const DesktopHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 2.5rem 0 0;
  margin: 0;
  background: #2e3f4f;
`;

export const LogoWidget = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.3rem;
  color: #ced2d6;
  font-size: 18px;
`;

export const TabWidget = styled.div`
  display: flex;
  margin-right: 1.3em;
`;

export const Button = styled.button`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  border-top-left-radius: ${(props: buttonProps) => props.left}px;
  border-bottom-left-radius: ${(props: buttonProps) => props.left}px;
  border-top-right-radius: ${(props: buttonProps) => props.right}px;
  border-bottom-right-radius: ${(props: buttonProps) => props.right}px;
  outline: 0;
  border: 0;
  padding: 10px 0;
  cursor: pointer;
  text-transform: capitalize;
  color: #ffffff;
  background: ${(props: buttonProps) => (props.active ? "#005ad3" : "#808080")};
  width: 130px;
  height: 40px;

  :hover {
    background: #3380e6;
    color: #ffffff;
  }
`;
