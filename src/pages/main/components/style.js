import styled from "styled-components";
import { flexCenter } from "../../../styles/common";

export const Form = styled.form`
  width: 360px;
  background-color: #fff;
  ${flexCenter}
  flex-direction: column;
  padding-top: 32px;
`;

export const InputBox = styled.div`
  position: relative;
  width: 88%;
  height: 48px;
  ${flexCenter}
  margin-bottom: 16px;
`;
