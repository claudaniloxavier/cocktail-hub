import { Paper as MuiPaper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Paper = styled(MuiPaper)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),

  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  },
}));

const Styled = {
  Paper,
};

export default Styled;
