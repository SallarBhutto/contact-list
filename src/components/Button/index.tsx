import styled from "styled-components";
import { Button as MuiButton } from "@mui/material";

const Button = styled((props) => <MuiButton {...props} />)`
  ${(props) => props.variant === "contained" && "color: white !important;"}
`;

export default Button;
