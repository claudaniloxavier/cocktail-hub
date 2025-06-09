import { Box as MuiBox, BoxProps, Card as MuiCard } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ComponentPropsWithoutRef } from "react";

type ImageBoxProps = BoxProps<"img"> & ComponentPropsWithoutRef<"img">;

const Box = styled(MuiBox)<ImageBoxProps>(({ theme }) => ({
  width: "100%",
  height: 595,
  objectFit: "contain",

  [theme.breakpoints.down("sm")]: {
    height: 180,
    objectPosition: "top left",
    objectFit: "cover",
  },
}));

const Card = styled(MuiCard)(({ theme }) => ({
  padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
  marginTop: theme.spacing(3),
  marginLeft: 0,
  marginRight: 0,

  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const Styled = {
  Box,
  Card,
};

export default Styled;
