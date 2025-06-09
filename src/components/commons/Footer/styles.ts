import {
  Box as MuiBox,
  Container as MuiContainer,
  ContainerProps,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const FooterContainer = styled(MuiContainer)<ContainerProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(7.5, 12),

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3.5, 5),
  },
}));

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
  FooterContainer,
  Divider,
  Box,
  CopyrightLink,
};
export default Styled;
