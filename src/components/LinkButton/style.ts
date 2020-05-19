import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
  background-color:${({ theme }: any) => theme.palette.primary.main}
  &:hover {
    content: "";
    box-shadow: 0 0 20px -40px rgba(0, 0, 0, 0.6);
  }
`;
