import {
  Card as MuiCard,
  Box as MuiBox,
  Button as MuiButton,
  CardMedia as MuiCardMedia,
  CardMediaProps,
  CardContent as MuiCardContent,
  Typography as MuiTypography,
  TypographyProps,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const SkeletonCard = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2),
  gap: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  width: 266,
  height: 416,
  boxShadow: "none",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    width: "100%",
    height: 161,
  },
}));

const SkeletonInfoBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginBottom: theme.spacing(1),
}));

const GameCard = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  boxShadow: "none",
  maxWidth: 289,
  maxHeight: 423,
  height: "100%",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    maxWidth: "100%",
    maxHeight: 161,
  },
}));

const GameCardMedia = styled(MuiCardMedia)<CardMediaProps<"img">>(
  ({ theme }) => ({
    maxHeight: 256,
    maxWidth: 256,
    width: "100%",
    height: "100%",
    objectFit: "fill",
    marginRight: theme.spacing(0),
    marginBottom: theme.spacing(2),
    borderRadius: "8px",

    [theme.breakpoints.down("sm")]: {
      maxHeight: 96,
      maxWidth: 96,
      marginRight: theme.spacing(2),
      marginBottom: 0,
    },
  })
);

const GameCardContent = styled(MuiCardContent)(({ theme }) => ({
  padding: theme.spacing(0),
  flex: 1,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
    textAlign: "left",
  },
}));

const GameTitle = styled(MuiTypography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.text.secondary,
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
  overflow: "hidden",
  display: "-webkit-box",
  width: "100%",
  lineHeight: "1.2",
  cursor: "default",
}));

const GameSecondaryInfo = styled(MuiTypography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: "100%",
  marginTop: theme.spacing(0),

  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(1),
  },
}));

const Button = styled(MuiButton)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  borderRadius: "16px",
  color: theme.palette.text.primary,
  fontSize: "16px",
  fontWeight: 600,
  padding: theme.spacing(1.5, 3),
  width: "100%",
  alignSelf: "center",
  "&:hover": {
    color: theme.palette.primary.dark,
  },

  [theme.breakpoints.down("sm")]: {
    alignSelf: "flex-start",
  },
}));

const Styled = {
  SkeletonCard,
  SkeletonInfoBox,
  GameCard,
  GameCardMedia,
  GameCardContent,
  GameTitle,
  GameSecondaryInfo,
  Button,
};
export default Styled;
