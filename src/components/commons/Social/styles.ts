import { Box as MuiBox } from "@mui/material";

import { styled } from "@mui/material/styles";

const Box = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const Styled = {
  Box,
};

export default Styled;
