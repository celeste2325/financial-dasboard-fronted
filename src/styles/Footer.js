import styled from "@emotion/styled";

export const FooterItem = styled.a`
  color: black;
  text-decoration: none;
  background-color: white;
  padding: 5px 10px;
  border-radius: 10px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  gap: 10px;
  padding: 10px;
  justify-content: flex-start;
  background-color: #cfe5ff;
  border-radius: 10px;
`;