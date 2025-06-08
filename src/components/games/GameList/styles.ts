import {
  Box as MuiBox,
  Pagination as MuiPagination,
  Typography as MuiTypography,
  TypographyProps,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const EmptyBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  textAlign: "center",
  marginTop: theme.spacing(5),
}));

const PageTitle = styled(MuiTypography)<TypographyProps>(({ theme }) => ({
  paddingLeft: theme.spacing(0),
  paddingRight: theme.spacing(0),

  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const ContentBox = styled(MuiBox)(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginLeft: theme.spacing(0),
  marginRight: theme.spacing(0),

  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const Pagination = styled(MuiPagination)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(5),

  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(3),
  },

  "& ul > li > button": {
    borderRadius: "8px",
    width: 56,
    height: 56,
    border: "none",

    [theme.breakpoints.down("sm")]: {
      width: 40,
      height: 40,
    },

    "&.Mui-selected": {
      backgroundColor: "#DECAFF",
      color: "#6A00F4",
    },
  },
}));

const Styled = {
  EmptyBox,
  PageTitle,
  ContentBox,
  Pagination,
};
export default Styled;
