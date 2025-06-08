import { ListItem as MuiListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

const ListItem = styled(MuiListItem)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

const Styled = {
  ListItem,
};

export default Styled;
