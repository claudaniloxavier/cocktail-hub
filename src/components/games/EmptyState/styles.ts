import { Card as MuiCard } from "@mui/material";

import { styled } from "@mui/material/styles";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  borderRadius: 1,
  padding: theme.spacing(2),
}));

const Styled = {
  Card,
};
export default Styled;
