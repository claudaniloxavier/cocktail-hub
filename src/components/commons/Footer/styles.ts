import {
  Box as MuiBox,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const Divider = styled(MuiDivider)(({ theme }) => ({
  marginLeft: 0,
  marginRight: 0,
  borderColor: theme.palette.text.disabled,
}));

const Box = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(2),
}));

const CopyrightLink = styled(MuiTypography)(() => ({
  textDecoration: "underline",
  textUnderlineOffset: 3,
}));

const Styled = {
  Divider,
  Box,
  CopyrightLink,
};
export default Styled;
