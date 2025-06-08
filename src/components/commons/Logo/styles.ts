import { Box as MuiBox, Typography as MuiTypography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Box = styled(MuiBox)(() => ({
  display: "flex",
  alignItems: "center",
}));

const Typography = styled(MuiTypography)(() => ({
  fontFamily: "Archivo",
  fontWeight: 600,
  letterSpacing: "1px",
}));

const Styled = {
  Box,
  Typography,
};

export default Styled;
