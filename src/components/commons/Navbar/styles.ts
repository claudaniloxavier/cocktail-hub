import {
  AppBar as MuiAppBar,
  Box as MuiBox,
  Toolbar as MuiToolbar,
  Typography as MuiTypography,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "999px",

  [theme.breakpoints.down("sm")]: {
    backgroundColor: theme.palette.background.default,
    borderRadius: "none",
  },
}));

const Toolbar = styled(MuiToolbar)(() => ({
  minHeight: 88,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

const MenuItemsWrapper = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flex: 1,
  paddingLeft: theme.spacing(10),
  paddingRight: theme.spacing(10),

  [theme.breakpoints.between("sm", "md")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const MenuItem = styled(MuiTypography)(({ theme }) => ({
  cursor: "pointer",
  fontWeight: 700,
  fontSize: "14px",
  color: theme.palette.text.secondary,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const ActionsWrapper = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const Styled = {
  AppBar,
  Toolbar,
  MenuItemsWrapper,
  MenuItem,
  ActionsWrapper,
};

export default Styled;
